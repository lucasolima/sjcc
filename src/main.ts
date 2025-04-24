import express from "express";
import cors from "cors";
import commentRoutes from "./infra/http/CommentController"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", commentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 Server running at http://localhost:${PORT}`);
});