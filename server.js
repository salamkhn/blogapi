import express from "express";
import { config } from "dotenv";
config();
import { dbCon } from "./dbCon/dbCon.js";
import { userRouter } from "./routes/userRoutes/user.routes.js";
import { categoryRouter } from "./routes/categoryRoute/category.routes.js";
import { contentRouter } from "./routes/contentRoute/content.routes.js";
import { profileRouter } from "./routes/profileRoute/profile.routes.js";
dbCon();
const app = express();

app.use(express.json());

//userRoutes
app.use("/api/users", userRouter);

//contentRoutes
app.use("/api/blog", contentRouter);

// categoryRoutes
app.use("/api/blog", categoryRouter);

// profileRoutes
app.use("/api/blog", profileRouter);

const port = 333;
app.listen(port, () => {
  console.log(`server is listing at port ${port}`);
});
