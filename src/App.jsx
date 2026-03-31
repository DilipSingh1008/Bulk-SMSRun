import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Client/Home";
import ServiceDetail from "./sections/ServiceDetail";
import About from "./sections/About";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import useTheme from "../src/hooks/useTheme";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import AdminProvider from "./admin-components/AdminProvider";
import { ThemeProvider } from "./context/ThemeContext";
import ManageCategories from "./pages/Admin/ManageCategories/ManageCategories";
import Subcategory from "./pages/Admin/ManageCategories/Subcategory";
import ManageServicesPage from "./pages/Admin/Manage Services/ServicePage";
import AddEditServicePage from "./pages/Admin/Manage Services/AddServicePage";
import ManagePricing from "./pages/Admin/ManagePricing/ManagePricing";
import AddEditPricing from "./pages/Admin/ManagePricing/AddEditPricing";
import Enquires from "./pages/Admin/enquiry/Enquires";
import SiteSetting from "./pages/Admin/setting/SiteSetting";
import { Navigate } from "react-router-dom";

function App() {
  useTheme();

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> {/* path="/" */}
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Admin routes */}

        <Route path="/admin/login" element={<Login />} />

        <Route
          element={
            <AdminProvider>
              <ThemeProvider>
                <ProtectedRoute />
              </ThemeProvider>
            </AdminProvider>
          }
        >
          <Route path="/admin" element={<Navigate to="/admin/login" />} />

          <Route
            path="/admin/dashboard"
            element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            }
          >
            <Route path="categories" element={<ManageCategories />} />
            <Route path="category/:id" element={<Subcategory />} />
            <Route path="services" element={<ManageServicesPage />} />
            <Route path="services/add" element={<AddEditServicePage />} />
            <Route path="services/edit/:id" element={<AddEditServicePage />} />
            <Route path="enquiry" element={<Enquires />} />
            <Route path="pricing" element={<ManagePricing />} />
            <Route path="pricing/add" element={<AddEditPricing />} />
            <Route path="pricing/edit/:id" element={<AddEditPricing />} />
            <Route path="settings" element={<SiteSetting />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
