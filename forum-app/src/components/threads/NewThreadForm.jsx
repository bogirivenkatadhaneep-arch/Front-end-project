import { useState } from "react";
import useForum from "../../hooks/useForum";

function NewThreadForm({ selectedCategoryId = "" }) {
  const { categories, addThread } = useForum();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    categoryId: selectedCategoryId || categories[0]?.id || "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.author.trim() ||
      !formData.categoryId.trim() ||
      !formData.content.trim()
    ) {
      return;
    }

    await addThread(formData);

    setFormData({
      title: "",
      author: "",
      categoryId: selectedCategoryId || categories[0]?.id || "",
      content: ""
    });
  };

  return (
    <form className="form card" onSubmit={handleSubmit}>
      <h3>Create New Thread</h3>

      <label>
        Title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter thread title"
        />
      </label>

      <label>
        Author
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>

      <label>
        Category
        <select
          name="categoryId"
          value={formData.categoryId}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Content
        <textarea
          name="content"
          rows="5"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your thread content"
        />
      </label>

      <button type="submit">Create Thread</button>
    </form>
  );
}

export default NewThreadForm;