import React, { useState } from "react";

function AddPatientModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    disease: "",
    status: "",
  });

  if (!open) return null;

  // Update form fields when user types
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // When Add is clicked, send data back and close modal
  function handleSubmit(e) {
    e.preventDefault();
    onAdd(form); // gives patient to parent
    setForm({ name: "", age: "", disease: "", status: "" }); // clear form
    onClose(); // close popup
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <form
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Add Patient</h2>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full mb-2 rounded"
          required
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="border p-2 w-full mb-2 rounded"
          required
        />
        <input
          name="disease"
          type="text"
          placeholder="Disease"
          value={form.disease}
          onChange={handleChange}
          className="border p-2 w-full mb-2 rounded"
          required
        />
        <input
          name="status"
          type="text"
          placeholder="Status"
          value={form.status}
          onChange={handleChange}
          className="border p-2 w-full mb-4 rounded"
          required
        />
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            className="bg-gray-300 px-3 py-1 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPatientModal;
