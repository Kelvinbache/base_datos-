import { router } from "./route_father.mjs";
import { db } from "../BD_SQlite/db_sqlite.mjs";

const router_delete = router.delete("/delete-user", (req, res, next) => {
  const { name } = req.body;

  function delete_user() {
    db.run(" DELETE FROM users WHERE name LIKE" + ` '%${name}%' `, (err) => {
    
  if (err) {
        res.status(404).json(err.message);
        next();
      }
    
      res.status(200).send("user done remove");
    
    });
  }

  db.serialize(delete_user);
});

export { router_delete };
