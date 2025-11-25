import React, { useEffect, useState } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    date: "",
    doctor: "",
    patient: "",
  });

  useEffect(() => {
    fetch("http://localhost:8000/api/appointments")
      .then((res) => res.json())
      .then(setAppointments);
  }, []);

  // Update handler
  const handleUpdate = async (id, updatedData) => {
    await fetch(`http://localhost:8000/api/appointments/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    // Update UI after edit
    setAppointments(
      appointments.map((a) => (a._id === id ? { ...a, ...updatedData } : a))
    );
    setEditingId(null);
  };

  // Example UI for editing (add below your list):
  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((a) => (
          <li key={a._id}>
            {a.date} - {a.doctor} with {a.patient}
            <button
              onClick={() => {
                setEditingId(a._id);
                setForm({ date: a.date, doctor: a.doctor, patient: a.patient });
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      {editingId && (
        <div>
          <input
            type="text"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            placeholder="Date"
          />
          <input
            type="text"
            value={form.doctor}
            onChange={(e) => setForm({ ...form, doctor: e.target.value })}
            placeholder="Doctor"
          />
          <input
            type="text"
            value={form.patient}
            onChange={(e) => setForm({ ...form, patient: e.target.value })}
            placeholder="Patient"
          />
          <button onClick={() => handleUpdate(editingId, form)}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Appointments;
