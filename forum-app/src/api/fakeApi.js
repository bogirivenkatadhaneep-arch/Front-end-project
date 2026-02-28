import seedData from "../data/seedData";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let forumDb = {
  categories: [...seedData.categories],
  threads: [...seedData.threads]
};

export async function fetchForumData() {
  await delay(500);
  return {
    categories: [...forumDb.categories],
    threads: [...forumDb.threads]
  };
}

export async function createThread(thread) {
  await delay(500);
  forumDb = {
    ...forumDb,
    threads: [thread, ...forumDb.threads]
  };
  return thread;
}

export async function createReply(threadId, reply) {
  await delay(400);
  forumDb = {
    ...forumDb,
    threads: forumDb.threads.map((thread) =>
      thread.id === threadId
        ? { ...thread, replies: [...thread.replies, reply] }
        : thread
    )
  };
  return reply;
}