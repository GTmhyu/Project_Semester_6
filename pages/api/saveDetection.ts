import { MongoClient } from 'mongodb';

export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    const { detection } = req.body;

    try {
      // Connect to MongoDB
      const client = new MongoClient('mongodb://127.0.0.1:27017');
      await client.connect();

      // Select the "hasil_model" database and collection
      const db = client.db('hasil_model');
      const collection = db.collection('console');

      // Get the current date and day
      const currentDate = new Date();
      const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const dayOfWeek = days[currentDate.getDay()];

      // Insert the detection result along with the day of the week
      const result = await collection.insertOne({ name: detection, timestamp: currentDate, day: dayOfWeek });

      // Close the connection
      await client.close();

      res.status(200).json({ id: result.insertedId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}