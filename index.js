const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'contactWorkshop';
MongoClient.connect(url, function(err, client){
    //rédaction du code sur CMD
    console.log("Connecté à MongoDB");
    const db = client.db(dbName);

    const firstContact = {
        lastName: "Ben Lahmer",
        firstName: "Fares",
        Email: "fares@gmail.com",
        age: 25
    }

    const listOfContacts = [
        {lastName: "Kefi", firstName: "Seif", Email: "kefi@gmail.com", age:15},
        {lastName: "Fatnassi", firstName: "Sarra", Email: "sarra.f@gmail.com", age:40},
        {lastName: "Ben Yahia", firstName: "Rym", age:4},
        {lastName: "Cherif", firstName: "Sami", age:3}
    ]

    // *** create a collection
    // db.createCollection('contactlist');

    // *** insert One contact (fisrtContact)
    // db.collection('contactlist').insertOne(firstContact);

    // *** insert many contacts ('listOfContacts')
    // db.collection('contactlist').insertMany(listOfContacts);

    // *** find contacts older than 18 years and then display them in the console
    db.collection('contactlist').find({age : {$gt:18}}).toArray()
            // use insert with async function
        // await result.forEach(doc => console.log(doc));
            // use .then with normal function
        .then((result)=>console.log('resultat: ', result))

    // *** update only a specific item in the db
    // db.collection('contactlist')
    //     .updateOne(
    //     {firstName:"Rym"},
    //     {$set:{firstName:"TEST"}}
    //     )
    
    // *** update/ add many key/value
    // db.collection('contactlist').updateMany({age:{$lt:18}},{$set:{experience : "15 y"}})


     // *** update/ add a key/value
    // db.collection('contactlist').updateOne({firstName:'Fares'},{$set:{experience : "20 y"}})

    // remove a Key/value
    // db.collection('contactlist').updateMany({age:{$lt:18}},{$unset:{lastName : 1}})

    //delete Many
    // db.collection('contactlist').deleteMany({age: {$lte:4}})
    // .toArray().then ((res)=>console.log(res))

    // trouver un objet et le remplcer totalement
    // db.collection('contactlist').findOneAndReplace(
    //     {firstName:'Seif'},
    //     {lastName: "Kefi", firstName: "Seif", age:55}
    // )


});

app.listen(3000,(req,res)=>{console.log('server is running on : 3000')})