import { Routes, Route } from "react-router-dom";
import { ForumProvider } from "./context/ForumContext";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ThreadPage from "./pages/ThreadPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <ForumProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:categoryId" element={<CategoryPage />} />
          <Route path="thread/:threadId" element={<ThreadPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ForumProvider>
  );
}

export default App;