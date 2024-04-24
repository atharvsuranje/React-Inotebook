const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=Mongo%20Compass&directConnection=true&ssl=false"; // Update with your actual database name

const connectToMongo = async () => {
        await mongoose.connect(mongoURI,{
        });
        console.log("Connected to MongoDB");
};

module.exports = connectToMongo;