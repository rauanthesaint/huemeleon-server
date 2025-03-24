import express from "express";
import router from "./router/index.js";

import { NODE_DEV, PORT } from "./config/index.js";

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

if (NODE_DEV === "DEVELOPMENT") {
  app.listen(PORT, () => {
    console.log(`Server started on dev mode on port: ${PORT}`);
  });
}
export default app;
