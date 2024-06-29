import { router } from "./route_father.mjs";
import { error_http } from "../middleware/errors/errors_http/error_http.mjs";

const route_get = router.get("/list-users", (req, res,next) => {
 
  if(!res.location(`http://localhost:3000/admin/list-users`)){
  
  res.status(400).json(error_http);
  next();

}

  res.status(200).json('ALl he left good')


});

export { route_get };
