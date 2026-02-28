import Reply from "./Reply";
import EmptyState from "../common/EmptyState";

function ReplyList({ replies }) {
  return (
    <section className="stack">
      <h3 className="section-title">Replies</h3>
      {replies.length ? (
        replies.map((reply) => <Reply key={reply.id} reply={reply} />)
      ) : (
        <EmptyState message="No replies yet. Be the first to reply." />
      )}
    </section>
  );
}

export default ReplyList;