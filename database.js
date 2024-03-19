// Student Name: Sharath Payili
// Student ID: 1225905683
// Date: 02/18/2024


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PWD}@${MONGODB_CLSTR}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  } });

// client.connect(err => {
//   if (err) {
//          console.error('Database connection failed', err);
//          return;
// }
//   console.log('Connected to MongoDB');
//   client.close();
// });

async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);