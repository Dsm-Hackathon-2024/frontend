import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get(req.query.url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(3001, () => console.log("Proxy server running on port 3001"));
