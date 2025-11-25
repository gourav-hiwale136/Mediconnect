import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  contact: { type: String, required: true },
});

const Doctor = mongoose.model("Doctor", DoctorSchema);

export default Doctor;
