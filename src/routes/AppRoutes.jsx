import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";

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
        <Route path="/about" 
                element={
                    <MainLayout>
                        <AboutPage/>
                    </MainLayout>
                }
                />
                <Route path="/" 
                element={
                    <MainLayout>
                        <HomePage/>
                    </MainLayout>
                }
                />
                <Route path="/blog" 
                element={
                    <MainLayout>
                        <BlogPage/>
                    </MainLayout>
                }
                />
      </Routes>
    </Router>
  );
}
