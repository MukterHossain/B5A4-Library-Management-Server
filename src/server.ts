import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
dotenv.config();



async function main() {
  try {
    await mongoose.connect(process.env.DB_URL!);
    app.listen(process.env.PORT, () => {
      console.log(`App is Listenin on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
