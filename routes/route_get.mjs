import { router } from "./route_father.mjs";

const route_get = router.get("/", (req, res) => {
  res.send("hello word to wed");
});

export { route_get };
