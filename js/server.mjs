import express from "express";
import { route_get } from "../routes/route_get.mjs";
import { route_post } from "../routes/route_post.mjs";
import { router_delete } from "../routes/route_delete.mjs";

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.disable("x-powered-by");

// use routes
app.use("/admin", route_get);
app.use("/admin", route_post);
app.use("/admin", router_delete);

app.listen(port);
