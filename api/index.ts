import express from "express";
import { PORT } from "./config";
import router from "./router";

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

app.listen(PORT, () =>
  console.log("\x1b[32m%s\x1b[0m", `Server is ready on port ${PORT}`)
);
