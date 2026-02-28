import { createContext, useEffect, useMemo, useState } from "react";
import { fetchForumData, createThread, createReply } from "../api/fakeApi";

export const ForumContext = createContext(null);

export function ForumProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchForumData();
        setCategories(data.categories);
        setThreads(data.threads);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const addThread = async (threadData) => {
    const newThread = {
      id: `t${Date.now()}`,
      categoryId: threadData.categoryId,
      title: threadData.title,
      author: threadData.author,
      content: threadData.content,
      createdAt: new Date().toLocaleString(),
      read: false,
      collapsed: false,
      replies: []
    };

    await createThread(newThread);
    setThreads((prev) => [newThread, ...prev]);
  };

  const addReply = async (threadId, replyData) => {
    const newReply = {
      id: `r${Date.now()}`,
      author: replyData.author,
      content: replyData.content,
      createdAt: new Date().toLocaleString()
    };

    await createReply(threadId, newReply);

    setThreads((prev) =>
      prev.map((thread) =>
        thread.id === threadId
          ? { ...thread, replies: [...thread.replies, newReply] }
          : thread
      )
    );
  };

  const toggleRead = (threadId) => {
    setThreads((prev) =>
      prev.map((thread) =>
        thread.id === threadId ? { ...thread, read: !thread.read } : thread
      )
    );
  };

  const toggleCollapse = (threadId) => {
    setThreads((prev) =>
      prev.map((thread) =>
        thread.id === threadId
          ? { ...thread, collapsed: !thread.collapsed }
          : thread
      )
    );
  };

  const value = useMemo(
    () => ({
      categories,
      threads,
      loading,
      addThread,
      addReply,
      toggleRead,
      toggleCollapse
    }),
    [categories, threads, loading]
  );

  return (
    <ForumContext.Provider value={value}>{children}</ForumContext.Provider>
  );
}