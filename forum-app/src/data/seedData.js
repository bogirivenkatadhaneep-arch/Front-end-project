const seedData = {
  categories: [
    {
      id: "general",
      name: "General Discussion",
      description: "Talk about anything related to the forum and community."
    },
    {
      id: "frontend",
      name: "Frontend Development",
      description: "React, Vue, Angular, UI engineering and performance topics."
    },
    {
      id: "dsa",
      name: "DSA & Algorithms",
      description: "Discuss problem solving, coding logic and algorithm design."
    }
  ],
  threads: [
    {
      id: "t1",
      categoryId: "frontend",
      title: "How to optimize React rendering?",
      author: "Alice",
      content:
        "I am building a large React application. What are the practical ways to reduce unnecessary re-renders without overusing memoization?",
      createdAt: "2026-02-28 10:00 AM",
      read: false,
      collapsed: false,
      replies: [
        {
          id: "r1",
          author: "Bob",
          content:
            "Start with React.memo only where it actually helps. Most performance issues come from poor state placement, not from missing memo.",
          createdAt: "2026-02-28 10:15 AM"
        },
        {
          id: "r2",
          author: "Charlie",
          content:
            "Split large components, keep state close to where it is used, and profile before optimizing.",
          createdAt: "2026-02-28 10:30 AM"
        }
      ]
    },
    {
      id: "t2",
      categoryId: "frontend",
      title: "Best folder structure for large apps?",
      author: "David",
      content:
        "Should I organize React apps by feature, by component type, or by route? I want something scalable and easier to maintain.",
      createdAt: "2026-02-28 11:00 AM",
      read: true,
      collapsed: false,
      replies: [
        {
          id: "r3",
          author: "Eva",
          content:
            "Use feature-based structure once the app grows. Type-based folders look clean at first but become painful later.",
          createdAt: "2026-02-28 11:20 AM"
        }
      ]
    },
    {
      id: "t3",
      categoryId: "general",
      title: "Welcome to the discussion forum",
      author: "Admin",
      content:
        "Introduce yourself and share what you want to learn from this project.",
      createdAt: "2026-02-28 09:00 AM",
      read: false,
      collapsed: false,
      replies: []
    },
    {
      id: "t4",
      categoryId: "dsa",
      title: "How do I improve at recursion?",
      author: "Nikhil",
      content:
        "I understand loops better than recursion. What is the best way to think about recursive calls without getting confused?",
      createdAt: "2026-02-28 12:00 PM",
      read: false,
      collapsed: false,
      replies: [
        {
          id: "r4",
          author: "Meera",
          content:
            "Stop memorizing patterns blindly. First identify base case, then identify how the problem becomes smaller each call.",
          createdAt: "2026-02-28 12:25 PM"
        }
      ]
    }
  ]
};

export default seedData;