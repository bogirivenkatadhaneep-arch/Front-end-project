import CategoryCard from "./CategoryCard";

function CategoryList({ categories, threads }) {
  return (
    <section>
      <h2 className="section-title">Categories</h2>
      <div className="grid">
        {categories.map((category) => {
          const count = threads.filter(
            (thread) => thread.categoryId === category.id
          ).length;

          return (
            <CategoryCard
              key={category.id}
              category={category}
              threadCount={count}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CategoryList;