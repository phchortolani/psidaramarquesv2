import { connectToDataBase } from '../../config/mongodb';

export default async (request, response) => {
  if (request.body) {
    const { obj } = request.body;
    if (obj) {
      try {
        const db = await connectToDataBase(process.env.MONGODB_URI);
        const collection = db.collection('cores');

        const del = await collection.deleteOne({ name: obj.name });


        // Insere o novo conteúdo
        const ret = await collection.insertOne(obj);

        response.send({
          result: true
        });

      } catch {
        response.send(null);
      }
    } else {
      response.send(null);
    }
  }
}
