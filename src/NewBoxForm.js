import { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    backgroundColor: "",
    width: "",
    height: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData.backgroundColor, formData.width, formData.height);
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <h1>Create a Box</h1>
      <form onSubmit={handleSubmit} data-testid='newBoxForm'>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="text"
          name="backgroundColor"
          placeholder="Background Color"
          value={formData.backgroundColor}
          onChange={handleChange}
        />

        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="text"
          name="width"
          placeholder="Width"
          value={formData.width}
          onChange={handleChange}
        />

        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="text"
          name="height"
          placeholder="Height"
          value={formData.height}
          onChange={handleChange}
        />
        <button>Add Box</button>
      </form>
    </>
  );
};

export default NewBoxForm;
