import { useState } from "react";
import useForum from "../../hooks/useForum";

function PostForm({ threadId }) {
  const { addReply } = useForum();

  const [formData, setFormData] = useState({
    author: "",
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

    if (!formData.author.trim() || !formData.content.trim()) {
      return;
    }

    await addReply(threadId, formData);

    setFormData({
      author: "",
      content: ""
    });
  };

  return (
    <form className="form card" onSubmit={handleSubmit}>
      <h3>Add Reply</h3>

      <label>
        Name
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>

      <label>
        Message
        <textarea
          name="content"
          rows="4"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your reply"
        />
      </label>

      <button type="submit">Post Reply</button>
    </form>
  );
}

export default PostForm;