import useForum from "../hooks/useForum";
import CategoryList from "../components/categories/CategoryList";
import Loader from "../components/common/Loader";
import NewThreadForm from "../components/threads/NewThreadForm";

function HomePage() {
  const { categories, threads, loading } = useForum();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="page-stack">
      <section className="hero card">
        <h2>Forum Home</h2>
        <p>
          Browse categories, read threads, post replies, and test a scalable
          React component architecture.
        </p>
      </section>

      <CategoryList categories={categories} threads={threads} />
      <NewThreadForm />
    </div>
  );
}

export default HomePage;