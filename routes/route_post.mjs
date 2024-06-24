import { router } from "./route_father.mjs";
import { init } from "../BD_SQlite/db_sqlite.mjs";

const route_post = router.post("/create-user", (req, res) => {
  const { name, lastName } = req.body;

  init(name, lastName);

  res.status(200).send("submit is exit");


});

export { route_post };
