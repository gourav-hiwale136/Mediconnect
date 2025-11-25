import Appointment from "../model/Appointmentmodel.js";

// Get all appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).send("Error fetching appointments");
  }
};

// Create a new appointment
const createAppointment = async (req, res) => {
  try {
    const { date, doctor, patient } = req.body;
    const appointment = new Appointment({ date, doctor, patient });
    await appointment.save();
    res.status(201).json({ message: "Appointment created", appointment });
  } catch (error) {
    res.status(500).send("Error creating appointment");
  }
};

// Update an appointment by ID
const updateAppointment = async (req, res) => {
  try {
    const id = req.params.id;
    const { date, doctor, patient } = req.body;
    const updated = await Appointment.findByIdAndUpdate(
      id,
      { date, doctor, patient },
      { new: true }
    );
    if (!updated) return res.status(404).send("Appointment not found");
    res.json({ message: "Appointment updated", appointment: updated });
  } catch (error) {
    res.status(500).send("Error updating appointment");
  }
};

// Delete an appointment by ID
const deleteAppointment = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Appointment.findByIdAndDelete(id);
    if (!deleted) return res.status(404).send("Appointment not found");
    res.json({ message: "Appointment deleted", appointment: deleted });
  } catch (error) {
    res.status(500).send("Error deleting appointment");
  }
};

// Export as an object
export default {getAppointments,createAppointment,updateAppointment,deleteAppointment};
