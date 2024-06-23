import express from "express";
import { route_get } from "../routes/route_get.mjs";
import { route_post } from "../routes/route_post.mjs";

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.disable("x-powered-by");

// use routes
app.use(route_get);
app.use("/admin", route_post);

app.listen(port, () => {
  console.log("server is power");
});
