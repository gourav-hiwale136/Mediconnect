import React, { useEffect, useState } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    contact: "",
  });

  useEffect(() => {
    fetch("http://localhost:8000/api/doctors")
      .then((res) => res.json())
      .then(setDoctors);
  }, []);

  // add doctor
  const handleCreate = async () => {
    if (!form.name || !form.specialization || !form.contact) {
      alert("Enter all fields");
      return;
    }
    const res = await fetch("http://localhost:8000/api/doctors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res.ok) {
      const err = await res.text();
      alert("Failed: " + err);
      return;
    }
    const result = await res.json();
    setDoctors((current) => [...current, result.doctor]);
    setForm({ name: "", specialization: "", contact: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* <h2>Doctors</h2> */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        {/* <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Contact</th>
            <th>Add</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Doctors Name"
              />
            </td>
            <td>
              <input
                type="text"
                value={form.specialization}
                onChange={(e) =>
                  setForm({ ...form, specialization: e.target.value })
                }
                placeholder="Specialization"
              />
            </td>
            <td>
              <input
                type="text"
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                placeholder="Contact"
              />
            </td>
            <td>
              <button onClick={handleCreate}>Add</button>
            </td>
          </tr>
          {doctors.map((doc) => (
            <tr key={doc._id}>
              <td>{doc.name}</td>
              <td>{doc.specialization}</td>
              <td>{doc.contact}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Doctors;
