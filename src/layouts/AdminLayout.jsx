import "../styles/admin.css";
import { Outlet } from "react-router-dom";
import AdminHeader from "../admin-components/AdminHeader";
import AdminSidebar from "../admin-components/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-[var(--main-bg)]">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader />

        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
