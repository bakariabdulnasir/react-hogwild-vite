import { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    specialty: "",
    greased: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddHog({
      ...formData,
      weight: Number(formData.weight),
      image:
        "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/piggy_smalls.jpg",
    });

    setFormData({
      name: "",
      weight: "",
      specialty: "",
      greased: false,
    });
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      {/* MUST NOT BE h3 */}
      <h2>Add a Hog</h2>

      <label htmlFor="name">Name:</label>
      <input id="name" name="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="weight">Weight:</label>
      <input
        id="weight"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
      />

      <label htmlFor="specialty">Specialty:</label>
      <input
        id="specialty"
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
      />

      <label htmlFor="greased-input">Greased?</label>
      <input
        id="greased-input"
        type="checkbox"
        name="greased"
        checked={formData.greased}
        onChange={handleChange}
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
