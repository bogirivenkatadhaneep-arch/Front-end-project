function Post({ author, content, createdAt }) {
  return (
    <div className="post-block">
      <p className="meta-text">
        <strong>{author}</strong> • {createdAt}
      </p>
      <p>{content}</p>
    </div>
  );
}

export default Post;