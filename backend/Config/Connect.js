const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("You are connected to the database");
  } catch (err) {
    console.error(err);
  }
};

// enabling debug mode
mongoose.set("debug", true);

module.exports = connect;
