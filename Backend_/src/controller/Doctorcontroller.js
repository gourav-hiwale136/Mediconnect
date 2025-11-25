import Doctor from "../model/Doctormodel.js";

// Get all doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).send("Error fetching doctors");
  }
};

// Create doctor
const createDoctor = async (req, res) => {
  try {
    const { name, specialization, contact } = req.body;
    const doctor = new Doctor({ name, specialization, contact });
    await doctor.save();
    res.status(201).json({ message: "Doctor created", doctor });
  } catch (error) {
    res.status(500).send("Error creating doctor");
  }
};

// Update doctor
const updateDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, specialization, contact } = req.body;
    const updated = await Doctor.findByIdAndUpdate(
      id,
      { name, specialization, contact },
      { new: true }
    );
    if (!updated) return res.status(404).send("Doctor not found");
    res.json({ message: "Doctor updated", doctor: updated });
  } catch (error) {
    res.status(500).send("Error updating doctor");
  }
};

// Delete doctor
const deleteDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Doctor.findByIdAndDelete(id);
    if (!deleted) return res.status(404).send("Doctor not found");
    res.json({ message: "Doctor deleted", doctor: deleted });
  } catch (error) {
    res.status(500).send("Error deleting doctor");
  }
};

export default {
  getDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
