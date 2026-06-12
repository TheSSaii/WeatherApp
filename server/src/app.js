import express from "express";
import cors from "cors";

import weatherRoutes from "./routes/weatherRoutes.js";

import {
  errorHandler,
} from "./middlewares/errorHandler.js";

const app = express();

const PORT =
  process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use(
  "/api/weather",
  weatherRoutes
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
