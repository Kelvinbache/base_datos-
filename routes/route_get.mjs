import { router } from "./route_father.mjs";
import { db } from "../BD_SQlite/db_sqlite.mjs";

const route_get = router.get("/list-users", (req, res) => {

  function select() {

    function controller(err, rows) {
      if (err) {

        res.status(404).json({error: err.message, "message of server": "closer Base data"}); // there is double response
        db.close();
        return;

      } else {
        res.status(200).json(rows);
      }
    }

    db.all("SELECT name, lastName FROM use", [], controller); 
}

  db.serialize(select);

});

export { route_get };
