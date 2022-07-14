const express = require("express");
const { config } = require("dotenv");
const cors = require("cors");

config();
const app = express();

// accessible to any origin
app.use(cors());

// Body Parser middleware to handle raw JSON files
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀⚙️ Server ready at http://localhost:${PORT}`);
});

app.use((req, res, next) => {
  // 10 sec timeout
  res.setTimeout(10 * 1000, () => {
    return res.status(408).send("Request Timeout.");
  });

  next();
});

// api routes
app.use("/api/employees", require("./routes/employees/index"));

// when invalid routes are entered
app.use(async (req, res) => {
  res.status(404).send("Route is no where to be found.");
});

module.exports = app;
