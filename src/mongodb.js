import mongoose from "mongoose";
const HOST = process.env.HOST || "localhost";
export const uri = `mongodb://${HOST}:27017/?readPreference=primary&directConnection=true&ssl=false`;
const options = {};

const log = (msg) => console.log(msg);

export const connectWithDb = () => {
  mongoose.connect(uri, options, (err, db) => {
    if (err) {
      console.error(err);
    } else log("database connection established");
  });
};
