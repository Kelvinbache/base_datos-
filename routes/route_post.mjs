import { router } from "./route_father.mjs";

const route_post = router.post("/create-user", (req, res) => {

  const { name, lastName } = req.body;
  res.status(200).send("submit is exit");

});

export { route_post };
