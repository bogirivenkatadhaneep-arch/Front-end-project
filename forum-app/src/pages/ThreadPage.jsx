import { useParams } from "react-router-dom";
import useForum from "../hooks/useForum";
import Loader from "../components/common/Loader";
import ThreadView from "../components/threads/ThreadView";
import PostForm from "../components/posts/PostForm";

function ThreadPage() {
  const { threadId } = useParams();
  const { threads, loading, toggleRead, toggleCollapse } = useForum();

  if (loading) {
    return <Loader />;
  }

  const thread = threads.find((item) => item.id === threadId);

  if (!thread) {
    return <p className="status-text">Thread not found.</p>;
  }

  return (
    <div className="page-stack">
      <ThreadView
        thread={thread}
        onToggleRead={() => toggleRead(thread.id)}
        onToggleCollapse={() => toggleCollapse(thread.id)}
      />
      <PostForm threadId={thread.id} />
    </div>
  );
}

export default ThreadPage;