import express from "express";
import routerUser from "./user";
import routerProduct from "./product";
import routerCategories from "./category";
import routerAuth from "./auth";
import routerToken from "./token";
import upImages from "./upImages";

const Router = express.Router();

Router.use("/users", routerUser);
Router.use("/products", routerProduct);
Router.use("/categories", routerCategories);
Router.use("/", routerAuth);
Router.use("/", routerToken);
Router.use("/", upImages);
export default Router;
