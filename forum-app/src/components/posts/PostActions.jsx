function PostActions({ read, collapsed, onToggleRead, onToggleCollapse }) {
  return (
    <div className="actions">
      <button type="button" onClick={onToggleRead}>
        {read ? "Mark as Unread" : "Mark as Read"}
      </button>
      <button type="button" onClick={onToggleCollapse}>
        {collapsed ? "Expand Replies" : "Collapse Replies"}
      </button>
    </div>
  );
}

export default PostActions;