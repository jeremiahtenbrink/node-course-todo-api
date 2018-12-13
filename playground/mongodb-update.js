const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if (err){
       return console.log('Unable to connect to MongoDB server.');
   }
   console.log('Connected to MongoDb server');
   let db = client.db('TodoApp');

   // db.collection("Todos").findOneAndUpdate({
   //     _id: new ObjectId('5c12bea7fcbc734b140471ca')
   // }, {
   //     $set: {
   //         completed: true,
   //     }
   // }, {
   //     returnOriginal: false,
   // }).then((result) => {
   //    console.log(JSON.stringify(result, undefined, 2));
   // });

    db.collection("Users").findOneAndUpdate({
        name: 'Jen'
    }, {
        $set: {
            name: "Jeremiah",
        },
        $inc: {
            age: +1,
        }
    }, {
        returnOriginal: false,
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
});