const express = require("express");
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());

const atlas_uri = "mongodb+srv://takeHome:takeHomePassword@cluster0.cu4hj.mongodb.net/takeHomeDB?retryWrites=true&w=majority"

mongoose.connect( atlas_uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  );
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  })
  
  


// Start the API server
app.listen(PORT, () =>
  console.log(`Server is listening on PORT ${PORT}!`)
);
