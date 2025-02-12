import { Router } from "express";


import costumers from "./app/controllers/CostumersController";

const routes  = new Router;

routes.get("/costumers", costumers.index);
routes.get("/costumers/:id", costumers.show);
routes.post("/costumers", costumers.create);
routes.put("/costumers/:id", costumers.update);
routes.delete("/costumers/:id", costumers.destroy);





export default  routes;
