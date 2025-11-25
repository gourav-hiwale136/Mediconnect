
import express from "express";
import AppointmentController from "../controller/Appointmentcontroller.js";

const AppointmentRouter = express.Router();

// // Route to get all appointments
AppointmentRouter.get("/", AppointmentController.getAppointments);

// // POST: Create a new appointment
AppointmentRouter.post("/", AppointmentController.createAppointment);

// Update by ID
AppointmentRouter.put("/:id", AppointmentController.updateAppointment);

// Delete by ID
AppointmentRouter.delete("/:id", AppointmentController.deleteAppointment);

export default AppointmentRouter;
