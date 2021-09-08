const express = require("express");
const path = require("path");
const publisher = require("./centrifugoPublisher");

const app = express();

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/publish", (req, res) => {
  publisher.publish("channel_name", { jon: "snow" });
  res.send("ok");
});

app.listen(5000, () => {
  console.log(`listening on port 5000`);
});
