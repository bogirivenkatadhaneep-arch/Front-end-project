import Post from "../posts/Post";
import ThreadMeta from "./ThreadMeta";
import PostActions from "../posts/PostActions";
import ReplyList from "../posts/ReplyList";

function ThreadView({ thread, onToggleRead, onToggleCollapse }) {
  return (
    <section className="thread-view">
      <article className="card">
        <h2>{thread.title}</h2>
        <ThreadMeta
          author={thread.author}
          createdAt={thread.createdAt}
          repliesCount={thread.replies.length}
          read={thread.read}
        />
        <Post author={thread.author} content={thread.content} createdAt={thread.createdAt} />
        <PostActions
          read={thread.read}
          collapsed={thread.collapsed}
          onToggleRead={onToggleRead}
          onToggleCollapse={onToggleCollapse}
        />
      </article>

      {!thread.collapsed && <ReplyList replies={thread.replies} />}
    </section>
  );
}

export default ThreadView;