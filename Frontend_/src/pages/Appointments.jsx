import React, { useEffect, useState } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // create form
  const [newAppointment, setNewAppointment] = useState({
    date: "",
    doctor: "",
    patient: "",
  });

  // edit form
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    date: "",
    doctor: "",
    patient: "",
  });

  // search filter
  const [search, setSearch] = useState("");

  // GET: all appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/appointments");
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.error("Failed to fetch appointments", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // POST: create appointment
  const handleCreate = async () => {
    if (
      !newAppointment.date ||
      !newAppointment.doctor ||
      !newAppointment.patient
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAppointment),
      });
      const created = await res.json();
      setAppointments((prev) => [...prev, created]);
      setNewAppointment({ date: "", doctor: "", patient: "" });
    } catch (err) {
      console.error("Failed to create appointment", err);
    }
  };

  // PUT: update appointment
  const handleUpdate = async (id, updatedData) => {
    try {
      await fetch(`http://localhost:8000/api/appointments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      setAppointments((prev) =>
        prev.map((a) => (a._id === id ? { ...a, ...updatedData } : a))
      );
      setEditingId(null);
    } catch (err) {
      console.error("Failed to update appointment", err);
    }
  };

  // DELETE: delete appointment
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this appointment?")) return;

    try {
      await fetch(`http://localhost:8000/api/appointments/${id}`, {
        method: "DELETE",
      });
      setAppointments((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      console.error("Failed to delete appointment", err);
    }
  };

  if (loading) {
    return <div className="p-6">Loading appointments...</div>;
  }

  const filteredAppointments = appointments.filter((a) => {
    const q = search.toLowerCase();
    return (
      a.date.toLowerCase().includes(q) ||
      a.doctor.toLowerCase().includes(q) ||
      a.patient.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Appointments</h1>

        {/* Create form */}
        <div className="mb-6 bg-white shadow rounded-xl p-4 max-w-md">
          <h2 className="text-xl font-semibold mb-3">Create Appointment</h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Date"
              className="w-full border rounded px-3 py-2"
              value={newAppointment.date}
              onChange={(e) =>
                setNewAppointment({ ...newAppointment, date: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Doctor"
              className="w-full border rounded px-3 py-2"
              value={newAppointment.doctor}
              onChange={(e) =>
                setNewAppointment({ ...newAppointment, doctor: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Patient"
              className="w-full border rounded px-3 py-2"
              value={newAppointment.patient}
              onChange={(e) =>
                setNewAppointment({
                  ...newAppointment,
                  patient: e.target.value,
                })
              }
            />
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={handleCreate}>
              Add
            </button>
          </div>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by date / doctor / patient"
          className="mb-3 w-full max-w-sm border rounded px-3 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Table */}
        <div className="bg-white shadow rounded-xl overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Doctor</th>
                <th className="px-4 py-3">Patient</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((a) => (
                <tr key={a._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{a.date}</td>
                  <td className="px-4 py-2">{a.doctor}</td>
                  <td className="px-4 py-2">{a.patient}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      className="px-3 py-1 text-sm bg-blue-600 text-white rounded"
                      onClick={() => {
                        setEditingId(a._id);
                        setForm({
                          date: a.date,
                          doctor: a.doctor,
                          patient: a.patient,
                        });
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 text-sm bg-red-600 text-white rounded"
                      onClick={() => handleDelete(a._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredAppointments.length === 0 && (
                <tr>
                  <td className="px-4 py-4 text-center" colSpan={4}>
                    No appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Edit form */}
        {editingId && (
          <div className="mt-6 bg-white shadow rounded-xl p-4 max-w-md">
            <h2 className="text-xl font-semibold mb-3">Edit Appointment</h2>
            <div className="space-y-3">
              <input
                type="text"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                placeholder="Date"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                value={form.doctor}
                onChange={(e) => setForm({ ...form, doctor: e.target.value })}
                placeholder="Doctor"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                value={form.patient}
                onChange={(e) => setForm({ ...form, patient: e.target.value })}
                placeholder="Patient"
                className="w-full border rounded px-3 py-2"
              />
              <div className="flex gap-2">
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded"
                  onClick={() => handleUpdate(editingId, form)}
                >
                  Save
                </button>
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
