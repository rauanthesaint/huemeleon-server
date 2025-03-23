import express from "express";
import router from "./router/index.js";

const app = express();

app.use(express.json());
app.use("/api", router);

app.get("/", (request, response) => {
  response.json({
    status: 200,
    message: "Huemeleon Server",
    endpoints: {
      api: {
        suggest: `POST /suggest { user_id?: string, reference?: string, text: string }`,
      },
    },
  });
});

export default app;
