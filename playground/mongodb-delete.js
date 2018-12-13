const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if (err){
       return console.log('Unable to connect to MongoDB server');
   }
   const db = client.db('TodoApp');

   console.log('Connected to MongoDB server');

   // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
   //     console.log(result);
   // }, (err) => {
   //    return console.log('Was unable to delete todos', err);
   // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //    console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Jeremiah'});
    // db.collection('Users').findOneAndDelete({_id: new ObjectID('5c12aff73f042e462475832a')}).then((res) => {
    //     console.log(JSON.stringify(res, undefined, 2));
    // });

});