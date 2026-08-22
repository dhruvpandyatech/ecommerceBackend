import express from "express"
import { Router } from "express"
import AuthController from './auth.controller'
const route = Router();

route.post("register",AuthController.registerController)

route.post("login",AuthController.loginController);

route.post("refresh",AuthController.refreshController)

route.post("logout",AuthController.logoutController)

route.post("/changePassword",AuthController.changePasswordController)
export default route;