const mongoose = require('mongoose');
// const config = require('config');
const mongoURI =
"mongodb+srv://rattanak-admin:Password2020@cluster0.7g7ae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const db = mongoURI;

const connectDB = async () => {
   try {
      await mongoose.connect(db, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useFindAndModify: false,
         useUnifiedTopology: true,
      });

      console.log('MongoDB Connected...');
   } catch (err) {
      console.error(err.message);
      process.exit(1);
   }
};

module.exports = connectDB;
