const mongoose = require("mongoose");

const connectionURL = process.env.MONGODB_URL;
mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((error) => console.log("Error in connection to database", error));
