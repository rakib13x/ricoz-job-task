import mongoose from "mongoose";
import app from "./app.js";
import config from "./app/config/index.js";

let server;

async function main() {
  try {
    await mongoose.connect(config.database_url);

    server = app.listen(config.port, () => {});
  } catch (err) {
    return err;
  }
}

main();

process.on("unhandledRejection", () => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  process.exit(1);
});
