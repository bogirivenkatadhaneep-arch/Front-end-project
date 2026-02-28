function ThreadMeta({ author, createdAt, repliesCount, read }) {
  return (
    <div className="thread-meta">
      <span>By {author}</span>
      <span>{createdAt}</span>
      <span>{repliesCount} replies</span>
      <span>{read ? "Read" : "Unread"}</span>
    </div>
  );
}

export default ThreadMeta;