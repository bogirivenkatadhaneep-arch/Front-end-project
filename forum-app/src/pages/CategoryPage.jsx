import { useParams } from "react-router-dom";
import useForum from "../hooks/useForum";
import ThreadList from "../components/threads/ThreadList";
import Loader from "../components/common/Loader";
import NewThreadForm from "../components/threads/NewThreadForm";

function CategoryPage() {
  const { categoryId } = useParams();
  const { categories, threads, loading } = useForum();

  if (loading) {
    return <Loader />;
  }

  const category = categories.find((item) => item.id === categoryId);
  const filteredThreads = threads.filter(
    (thread) => thread.categoryId === categoryId
  );

  if (!category) {
    return <p className="status-text">Category not found.</p>;
  }

  return (
    <div className="page-stack">
      <section className="card">
        <h2>{category.name}</h2>
        <p>{category.description}</p>
      </section>

      <ThreadList threads={filteredThreads} />
      <NewThreadForm selectedCategoryId={categoryId} />
    </div>
  );
}

export default CategoryPage;