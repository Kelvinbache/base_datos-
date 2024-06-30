import { router } from "./route_father.mjs";
import { db } from "../BD_SQlite/db_sqlite.mjs";

const route_get = router.get("/list-users", (req, res, next) => {

  function select() {
   
    db.all("SELECT name, lastName FROM users", [], (err, rows) => {
   
      if (err) {
        res.status(404).json(err.message);
        next();
      }

      res.status(200).json(rows);
   
    });
  
  }

  db.serialize(select);

});

export { route_get };
