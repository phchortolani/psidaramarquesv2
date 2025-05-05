import { connectToDataBase } from '../../config/mongodb';
import { WhatsappService } from '../../services/whatsappService';

export default async (request, response) => {
  try {
    const googleAnalyticsId = getGoogleAnalyticsId(request.cookies);
    if (!googleAnalyticsId) return response.send({ result: true });

    const onlyView = request.body?.onlyView ?? false;
    const ip = request.body?.ip ?? null;

    const [geoData, db] = await Promise.all([
      ip ? fetch(`http://ip-api.com/json/${ip}?fields=status,country,regionName,city,query`).then(res => res.json()) : null,
      connectToDataBase(process.env.MONGODB_URI)
    ]);

    const region = ip && geoData?.status === 'success' ? {
      country: geoData.country ?? null,
      regionName: geoData.regionName ?? null,
      city: geoData.city ?? null,
      ip
    } : undefined;

    const collection = db.collection('agendamento_report');

    const existingDoc = await collection.findOne({ googleAnalyticsId });

    const now = new Date();

    if (existingDoc) {
      const updateFields = {
        $inc: { accessCount: 1 },
        $set: {
          onlyView: existingDoc.onlyView === false ? false : !!onlyView,
        },
      };

      if (!onlyView) updateFields.$set.click_date = now;
      if (region) updateFields.$set.region = region;

      await collection.updateOne({ googleAnalyticsId }, updateFields);
    } else {
      await collection.insertOne({
        googleAnalyticsId,
        accessCount: 1,
        onlyView: !!onlyView,
        region,
        first_view_date: now
      });
    }

    // WhatsApp Notification
    const wa = new WhatsappService();
    const r = region || existingDoc?.region || {};
    await wa.sendMessage(
      '5511957886697',
      `*[psidaramarques.com.br/agendamento]*\n\n O IP ${ip || r.ip} acessou o site com o googleAnalyticsId ${googleAnalyticsId} ${onlyView ? 'apenas visualizou' : 'clicou'}.\n\nA região de acesso foi:\n\n${r.country ?? ''} - ${r.regionName ?? ''} - ${r.city ?? ''}\n\n`
    );

    response.send({ result: true, googleAnalyticsId });

  } catch (error) {
    console.error('Erro ao salvar no banco:', error);
    response.status(500).send({ result: false, error: error.message });
  }
};

function getGoogleAnalyticsId(cookies) {
  const gaCookie = cookies._ga;
  return gaCookie ? gaCookie.split('.').slice(-2).join('.') : null;
}
