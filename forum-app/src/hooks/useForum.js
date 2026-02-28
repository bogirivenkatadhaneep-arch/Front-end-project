import { useContext } from "react";
import { ForumContext } from "../context/ForumContext";

function useForum() {
  const context = useContext(ForumContext);

  if (!context) {
    throw new Error("useForum must be used inside ForumProvider");
  }

  return context;
}

export default useForum;