const mongoose = require('mongoose');
const Student = require('../models/student');

mongoose.connect('mongodb://user:userPass11@ds257981.mlab.com:57981/fta_db', {useMongoClient: true});

const students=[{
    name: "a",
    class: "ca",
    feeling: "fa",
    age: 15
},
{
    name: "b",
    class: "ba",
    feeling: "ba",
    age: 16
}
];

Student.create(students, (err) => {
    if(err){throw(err)}
    console.log(`Created ${students.length} students`)
    mongoose.connection.close();
})