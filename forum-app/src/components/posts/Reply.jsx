function Reply({ reply }) {
  return (
    <article className="card reply-card">
      <p className="meta-text">
        <strong>{reply.author}</strong> • {reply.createdAt}
      </p>
      <p>{reply.content}</p>
    </article>
  );
}

export default Reply;