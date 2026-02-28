import { Link } from "react-router-dom";
import useForum from "../../hooks/useForum";

function Sidebar() {
  const { categories } = useForum();

  return (
    <aside className="sidebar">
      <h2>Categories</h2>
      <nav aria-label="Sidebar categories">
        <ul className="sidebar-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;