import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SkipToContent from "./SkipToContent";

function Layout() {
  return (
    <>
      <SkipToContent />
      <div className="app-shell">
        <Header />
        <div className="content-shell">
          <Sidebar />
          <main id="main-content" className="main-area">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;