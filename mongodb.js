// CRUD

// const mongodb = require("mongodb");
// const mongoClient = mongodb.MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true
  },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database");
    }

    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     name: "Minhaj",
    //     age: 27
    //   },
    //   (error, result) => {
    //     if (error) return console.log(error);

    //     console.log(result.ops);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     { name: "task one", completed: true },
    //     { name: "task two", completed: true },
    //     { name: "task three", completed: false }
    //   ],
    //   (error, result) => {
    //     if (error) return console.log("Unable to insert data");
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").findOne({ completed: false }, (error, task) => {
    //   if (error) return console.log("Unable to find");

    //   console.log(task);
    // });

    // You can use count to get the number of counts of a result so that you don't need to get the result and count manually

    //     db.collection("tasks")
    //       .find({ completed: true })
    //       .toArray((err, tasks) => {
    //         if (err) return console.log("Unable to find data");

    //         console.log(tasks);
    //       });
    //   db.collection("tasks").findOne(
    //     { _id: new ObjectID("5e5b637e3a1a9f6908139d8e") },
    //     (err, task) => {
    //       if (err) return console.log("Unable to fetch");

    //       console.log(task);
    //     }
    //   );
    // db.collection("tasks")
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     }
    //   )
    //   .then(result => console.log(result.modifiedCount))
    //   .catch(err => {
    //     console.log(err);
    //   });

    db.collection("tasks")
      .deleteOne({ name: "task two" })
      .then(result => console.log(result))
      .catch(err => {
        console.log(err);
      });
  }
);
