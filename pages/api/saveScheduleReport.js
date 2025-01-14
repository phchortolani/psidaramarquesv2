import { connectToDataBase } from '../../config/mongodb';
import moment from 'moment';
import 'moment/locale/pt-br';


export default async (request, response) => {
/*   console.log('request', request.body) */

  try {
    // Extrair o Client ID do Google Analytics
    const googleAnalyticsId = getGoogleAnalyticsId(request.cookies);
    if (!googleAnalyticsId) return response.send({ result: true, });

    // Objeto a ser inserido ou atualizado
    const updateObj = {
      googleAnalyticsId,
      accessCount: 1, // Definir 1 no primeiro acesso
    };

    const onlyView = request?.body?.onlyView ?? false;
    const ip = request?.body?.ip ?? null;

    if (ip != null) {
      const geoData = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,regionName,city,query`).then((res) =>
        res.json()
      );
      const country = geoData?.country ?? null;
      const regionName = geoData?.regionName ?? null;
      const city = geoData?.city ?? null;
      updateObj.region = {
        country: country ?? null,
        regionName: regionName ?? null,
        city: city ?? null,
        ip: ip
      }
    }


    // Conectar ao banco de dados
    const db = await connectToDataBase(process.env.MONGODB_URI);
    const collection = db.collection('agendamento_report');

    //verificar se o googleAnalyticsId já existe no banco
    const existingDoc = await collection.findOne({ googleAnalyticsId });


    if (existingDoc) {
      // Atualizar o documento existente
      await collection.updateOne({ googleAnalyticsId }, {
        $inc: { accessCount: 1 },
        $set: {
          onlyView: existingDoc?.onlyView == false ? false : !!onlyView,
          click_date: !onlyView ? moment().utc(true).toDate() : existingDoc.click_date,
          region: updateObj.region ? updateObj.region : existingDoc.region,
          first_view_date: existingDoc.first_view_date
        }
      });
    } else {
      // Inserir um novo documento
      await collection.insertOne({
        ...updateObj,
        onlyView: !!onlyView,
        first_view_date: moment().utc(true).toDate()
      });
    }

    response.send({
      result: true,
      googleAnalyticsId,
    });
  } catch (error) {
    //console.error('Erro ao salvar no banco:', error);
    response.status(500).send({ result: false, error: error.message });
  }
};

// Função para extrair o Client ID do cookie _ga
function getGoogleAnalyticsId(cookies) {
  const gaCookie = cookies._ga; // Acessa o cookie _ga
  if (gaCookie) {
    // O Client ID está após o segundo ponto
    const clientId = gaCookie.split('.').slice(-2).join('.');
    //console.log('Client ID do Google Analytics:', clientId);
    return clientId;
  }
  return null; // Caso não exista o cookie
}
