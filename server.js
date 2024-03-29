const express = require("express");
const app = express();
const cors = require('cors')
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");
const path = require("path");

app.use(cors())
app.use(express.static(path.resolve(__dirname, "build")));

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute)
;
app.get('*', function(req, res){
    res.sendfile('./build/index.html');
  });

// if (process.env.NODE_ENV === "production") {

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "build/index.html"));
//   });
// }
const port = process.env.PORT || 5000;

// app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
