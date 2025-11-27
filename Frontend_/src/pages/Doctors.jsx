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
    <div className="p-6 bg-gray-100 min-h-screen ">
      <div className="max-w-5xl mx-auto bg-white rounded-md shadow">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Doctors</h2>
          <button
            onClick={handleCreate}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm  font-medium px-4 py-2 rounded-md mr-14"
          >
            Add Doctor
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-800 text-sm">
                <th className="px-6 py-3 font-semibold">Name</th>
                <th className="px-6 py-3 font-semibold">Specialization</th>
                <th className="px-6 py-3 font-semibold">Contact</th>
                <th className="px-6 py-3 font-semibold"></th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {/* input row */}
              <tr className="border-t">
                <td className="px-6 py-3">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Doctor's Name"
                    className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-3">
                  <input
                    type="text"
                    value={form.specialization}
                    onChange={(e) =>
                      setForm({ ...form, specialization: e.target.value })
                    }
                    placeholder="Specialization"
                    className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-3">
                  <input
                    type="text"
                    value={form.contact}
                    onChange={(e) =>
                      setForm({ ...form, contact: e.target.value })
                    }
                    placeholder="Contact"
                    className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-3">
                  {/* <button
                    onClick={handleCreate}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-md"
                  >
                    Add
                  </button> */}
                </td>
              </tr>

              {/* data rows */}
              {doctors.map((doc) => (
                <tr
                  key={doc._id}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-3">{doc.name}</td>
                  <td className="px-6 py-3">{doc.specialization}</td>
                  <td className="px-6 py-3">{doc.contact}</td>
                  <td className="px-6 py-3" />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
