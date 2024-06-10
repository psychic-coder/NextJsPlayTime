// in this part the naming convention doesnot matter much

import mongoose from "mongoose";

//this connect has to be present in all the parts of the api the , its necessary the api calls  
export async function connect() {
  try {
    //we wrote the ! after the mongouri , as we're using ts, so the "!" makes sure that the connection in always string
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongodb connected successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "Mongodb connection error.Please make sure mongodb is running." + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong :", error);
  }
}
