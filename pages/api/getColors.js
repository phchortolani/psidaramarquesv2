import { connectToDataBase } from '../../config/mongodb';

export default async (request, response) => {
  const db = await connectToDataBase(process.env.MONGODB_URI);
  const retorno = await db.collection('cores').find({}).toArray();


  response.json({
    result: retorno ?? []
  })
}