const express = require("express");
const ViewEngine = require("./config/viewEngine");
const WebRoute = require("./routes/web");
const bodyParser = require("body-parser");
const connectDB = require("./config/connectdb1");
const cors = require("cors");
const port = 3000;

let app = express();

app.use(cors({ origin: "http://localhost:8080", credentials: true }));
// app.use(express.json)

// Tăng giới hạn kích thước payload
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

connectDB();

ViewEngine(app);
app.use("/", WebRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
