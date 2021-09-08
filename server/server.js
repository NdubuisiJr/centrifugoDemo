const express = require("express");
const path = require("path");
const publisher = require("./centrifugoPublisher");

const app = express();

publisher.publish("channel", { jon: "snow" });

app.use(express.static(path.join(process.cwd(), "public")));

app.listen(5000, () => {
  console.log(`listening on port 5000`);
});
