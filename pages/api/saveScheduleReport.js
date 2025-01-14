import { connectToDataBase } from '../../config/mongodb';

export default async (request, response) => {
  //console.log('Requisição recebida:', request.method, request.url);

  try {
    // Extrair o Client ID do Google Analytics
    const googleAnalyticsId = getGoogleAnalyticsId(request.cookies);
    //verifica se no body tem o parametro que só visualizou a pagina

    const onlyView = request?.body?.onlyView ?? false;

    // Verificar se o googleAnalyticsId foi obtido
    if (!googleAnalyticsId) {
      return response.status(400).send({ result: false, message: 'Google Analytics ID ausente' });
    }

    // Conectar ao banco de dados
    const db = await connectToDataBase(process.env.MONGODB_URI);
    const collection = db.collection('agendamento_report');

    // Objeto a ser inserido ou atualizado
    const updateObj = {
      googleAnalyticsId,
      accessCount: 1, // Definir 1 no primeiro acesso
    };

    //console.log('Objeto a ser salvo:', updateObj);

    //verificar se o googleAnalyticsId já existe no banco
    const existingDoc = await collection.findOne({ googleAnalyticsId });

    if (existingDoc) {
      // Atualizar o documento existente
      await collection.updateOne({ googleAnalyticsId }, {
        $inc: { accessCount: 1 }, $set: {
          onlyView: existingDoc?.onlyView == false ? false : !!onlyView,
          click_date: existingDoc?.onlyView == false ? existingDoc?.click_date ?? new Date() : null,
          first_view_date: onlyView && existingDoc.first_view_date == null ? new Date() : onlyView && existingDoc.first_view_date ? existingDoc.first_view_date : null
        }
      });
    } else {
      // Inserir um novo documento
      await collection.insertOne({ ...updateObj, onlyView: !!onlyView, first_view_date: new Date() });
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
