const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://bartekj:BU6udi7wBcqqJedz@goit.a7muvo0.mongodb.net/db-contacts";

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error", error);
    process.exit(1);
  }
};

const disconnect = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.error(error);
    throw new Error("Database disconnection failed", error.message);
  }
};

module.exports = {
  connect,
  disconnect,
};
