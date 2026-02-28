import { Link } from "react-router-dom";

function ThreadCard({ thread }) {
  return (
    <article className="card">
      <h3>
        <Link to={`/thread/${thread.id}`}>{thread.title}</Link>
      </h3>
      <p>{thread.content.slice(0, 120)}...</p>
      <div className="card-footer">
        <span>By {thread.author}</span>
        <span>{thread.replies.length} replies</span>
        <span>{thread.read ? "Read" : "Unread"}</span>
      </div>
    </article>
  );
}

export default ThreadCard;