import express from "express";
import userLogin from "../controllers/login.js";
import useradd from "../controllers/user-controller.js";
import { createAttendance, getAttendance, updateAttendance, deleteAttendance } from "../controllers/attendance-controller.js";
import {employeeProfile,employeeget,employeeUpdate,employeeDelete} from "../controllers/employeePro-controller.js";
import {addEmployeeToDirectory,getEmployeeDirectory,updateEmployeeDirectory,deleteDirectory} from '../controllers/emploeeD-controller.js';
import { addPayRoll,getEmployeePay , updateEmployeePay , deletePayroll} from "../controllers/payRoll-controller.js";
import { addPercormance , getEmployeePerformance , updateEmployeePerformance , deletePerformance} from "../controllers/performance-controller.js";
import { addTraining , getTraining , updateTraining , deleteTraining} from "../controllers/training-controller.js";
import { addHiring,getHiring , updateHiring , deleteHiring} from "../controllers/hiring-controller.js";
import {addRole , getRole , updateRole , deleteRole} from "../controllers/role-controller.js";
const userRoute = express.Router();

userRoute.post("/add", useradd)
userRoute.post("/login", userLogin)

userRoute.post("/employee", employeeProfile)
userRoute.get("/employee", employeeget)
userRoute.put("/employee/:id", employeeUpdate)
userRoute.delete("/employee/:id", employeeDelete)

userRoute.post("/employeeDirectory",addEmployeeToDirectory)
userRoute.get("/employeeDirectory",getEmployeeDirectory)
userRoute.put("/employeeDirectory/:id",updateEmployeeDirectory)
userRoute.delete("/employeeDirectory/:id",deleteDirectory)

userRoute.post("/employeeattendance",createAttendance)
userRoute.get("/employeeattendance",getAttendance)
userRoute.put("/employeeattendance/:id",updateAttendance)
userRoute.delete("/employeeattendance/:id",deleteAttendance)

userRoute.post("/employeepayroll",addPayRoll)
userRoute.get("/employeepayroll",getEmployeePay)
userRoute.put("/employeepayroll/:id",updateEmployeePay)
userRoute.delete("/employeepayroll/:id",deletePayroll)

userRoute.post("/employeeperformance",addPercormance)
userRoute.get("/employeeperformance",getEmployeePerformance)
userRoute.put("/employeeperformance/:id",updateEmployeePerformance)
userRoute.delete("/employeeperformance/:id",deletePerformance)

userRoute.post("/employeeTraining",addTraining)
userRoute.get("/employeeTraining",getTraining)
userRoute.put("/employeeTraining/:id",updateTraining)
userRoute.delete("/employeeTraining/:id",deleteTraining)

userRoute.post("/employeeHiring",addHiring)
userRoute.get("/employeeHiring",getHiring)
userRoute.put("/employeeHiring/:id",updateHiring)
userRoute.delete("/employeeHiring/:id",deleteHiring)

userRoute.post("/addRole",addRole)
userRoute.get("/addRole",getRole)
userRoute.put("/addRole/:id",updateRole)
userRoute.delete("/addRole/:id",deleteRole)

export default userRoute;