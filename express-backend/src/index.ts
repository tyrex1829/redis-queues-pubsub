import express from "express";
import { createClient } from "redis";

const app = express();
const port = 3000;

app.use(express.json());

const client = createClient();
client.connect();

app.post("/submit", async (req, res) => {
  const { problemId, userId, code, language } = req.body;

  //   push it on DB
  try {
    await client.lPush(
      "submissions",
      JSON.stringify({ problemId, userId, code, language })
    );

    res.json({
      message: "Submission recieved!",
    });
  } catch (error) {
    res.json({
      message: "Submission failed!",
    });
  }
});

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
