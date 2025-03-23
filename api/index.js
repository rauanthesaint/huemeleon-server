import express from "express";
const app = express();

app.get("/", (request, response) => {
  response.json({
    message: "HI",
  });
});

app.listen(4212, () => console.log("Server is ready"));
