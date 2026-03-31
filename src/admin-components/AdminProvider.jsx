// AdminProvider.jsx
import { AuthProvider } from "../context/AuthContext";

const AdminProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AdminProvider;