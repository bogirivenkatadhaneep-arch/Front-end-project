import ThreadCard from "./ThreadCard";
import EmptyState from "../common/EmptyState";

function ThreadList({ threads }) {
  if (!threads.length) {
    return <EmptyState message="No threads found in this category yet." />;
  }

  return (
    <div className="stack">
      {threads.map((thread) => (
        <ThreadCard key={thread.id} thread={thread} />
      ))}
    </div>
  );
}

export default ThreadList;