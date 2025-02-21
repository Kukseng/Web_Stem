import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/contents/HomePage";
import AboutPage from "../pages/contents/AboutPage";
import BlogPage from "../pages/contents/BlogPage";
import LecturerPage from "../pages/contents/LecturerPage";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
         
        <Route
          path="/គ្រូបង្រៀន"
          element={
            <MainLayout>
              <LecturerPage/>
            </MainLayout>
          }
        />
        <Route
          path="/អំពីពួកយើង"
          element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          }
        />
        {/* <Route path="/" 
                element={
                    <MainLayout>
                        <
                    </MainLayout>
                }
                /> */}
        <Route
          path="/មាតិកា"
          element={
            <MainLayout>
              <BlogPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}
