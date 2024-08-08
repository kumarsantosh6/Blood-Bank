// const mongoose = require("mongoose");
// const colors = require("colors");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log(
//       `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
//         .white
//     );
//   } catch (error) {
//     console.log(`Mongodb Database Error ${error}`.bgRed.white);
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log(`DB Connected Successfully`.bgGreen.white))
    .catch((err) => {
      console.log(`Error in Mongodb ${err}`.bgRed.white);
    });
};

module.exports = connectDB;
