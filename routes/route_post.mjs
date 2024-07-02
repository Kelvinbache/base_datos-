import { router } from "./route_father.mjs";

//base data
import { db, drive_init } from "../BD_SQlite/db_sqlite.mjs";

// value data
import { values } from "../middleware/values/values_data.mjs";

const route_post = router.post("/create-user", (req, res, next) => {
  // get information to the req
  const { name, lastName } = req.body;

  // call to the function of value
  const value = values(name, lastName);

  // Yeah the data is not value
  
  if (value) {
  
    res.status(400).json(value);
    next();
  
  } try {

      db.serialize(drive_init(name, lastName));
      res.status(200).send("submit is exit");
  
    } catch (error) {
  
      res.status(400).json({ message: "is error in insert data" });
      db.close();
  
    }

    

});

export { route_post };
