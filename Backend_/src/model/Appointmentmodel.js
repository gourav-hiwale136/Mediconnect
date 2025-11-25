import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  date: { type: String, required: true }, // Date of the appointment
  doctor: { type: String, required: true }, // Doctor's name
  patient: { type: String, required: true }, // Patient's name
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);
export default Appointment;
