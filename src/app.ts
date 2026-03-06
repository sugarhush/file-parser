import e from "express";
import type { Express, Request, Response } from "express";
import dotenv from "dotenv";
import healthRoutes from "./routes/healthRoute.ts";

dotenv.config();

const app: Express = e();
const PORT = process.env.PORT || 8080;

//Routers
app.use("/", healthRoutes);

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}/health`);
});
