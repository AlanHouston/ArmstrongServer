const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.mongodburi, {useNewUrlParser: true})

const MaxEffortRoutes = require("./routes/MaxEffortRoutes");
const PyramidRoutes = require("./routes/PyramidRoutes");
const GripSwitchRoutes = require("./routes/GripSwitchRoutes");
const MaxDayRoutes = require("./routes/MaxDayRoutes");
const PushUpRoutes = require("./routes/PushUpRoutes");

// to allow fetch calls to localhost:3000 working locally
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(MaxEffortRoutes);
app.use(PyramidRoutes);
app.use(GripSwitchRoutes);
app.use(MaxDayRoutes);
app.use(PushUpRoutes);

//heroku handles PORT
const port = process.env.PORT || 3001;
app.listen(port, ()=>{
  console.log('Listening');    
});


