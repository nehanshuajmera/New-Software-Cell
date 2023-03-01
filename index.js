const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
dotenv.config();
app.use(express.json());

app.use(cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
// connect to mongoDB

// mongoose.connect(process.env.MDB_CONNECT,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) return console.error(err);
//     console.log("Connected to MongoDB");
//   }
// );
// set up routes

app.use("/contactus", require("./Router/contactRouter"));
app.use("/connectus", require("./Router/connectRouter"));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
const path=require("path");


app.use(express.static('client/build'));
 app.get('*', (req, res) => {
    res.sendFile(path.resolve('client','build','index.html'));
});
