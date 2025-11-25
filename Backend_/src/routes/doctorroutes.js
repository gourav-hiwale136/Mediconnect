import express from "express";
import DoctorController from "../controller/Doctorcontroller.js";

const DoctorRouter = express.Router();

// GET all doctors
DoctorRouter.get("/", DoctorController.getDoctors);
// create 
DoctorRouter.post("/", DoctorController.createDoctor);

// update 
DoctorRouter.put("/:id", DoctorController.updateDoctor);

// delete
DoctorRouter.delete("/:id", DoctorController.deleteDoctor);

export default DoctorRouter;
