import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import UploadData from "./pages/UploadData";

import EmissionRecords from "./pages/EmissionRecords";

import AuditLogs from "./pages/AuditLogs";

import Login from "./pages/Login";

import Layout from "./components/Layout";

function ProtectedRoute({
  children,
}: any) {

  const isAuthenticated =
    localStorage.getItem(
      "isAuthenticated"
    );

  return isAuthenticated
    ? children
    : <Navigate to="/login" />;
}

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>

              <Layout>

                <Dashboard />

              </Layout>

            </ProtectedRoute>
          }
        />

        <Route
          path="/upload"
          element={
            <ProtectedRoute>

              <Layout>

                <UploadData />

              </Layout>

            </ProtectedRoute>
          }
        />

        <Route
          path="/records"
          element={
            <ProtectedRoute>

              <Layout>

                <EmissionRecords />

              </Layout>

            </ProtectedRoute>
          }
        />

        <Route
          path="/audit"
          element={
            <ProtectedRoute>

              <Layout>

                <AuditLogs />

              </Layout>

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}