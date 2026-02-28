import { Link } from "react-router-dom";

function CategoryCard({ category, threadCount }) {
  return (
    <article className="card">
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <p className="meta-text">Threads: {threadCount}</p>
      <Link className="button-link" to={`/category/${category.id}`}>
        View Category
      </Link>
    </article>
  );
}

export default CategoryCard;