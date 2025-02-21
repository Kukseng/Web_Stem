import Banner from "../../components/common/Banner";
import CourseCard from "../../components/common/CourseCard";
import CourseCategories from "../../components/common/categorycourse/CourseCategories";

import ScienceInterface from "../../components/common/subjectcard/ScienceInterface";
import CourseListingPage from "../../components/common/categorycourse/CourseListingPage";
import MainCategory from "../../components/common/MainCategory";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <MainCategory/>
      <CourseCategories />
      <ScienceInterface />
      <CourseListingPage />
      <CourseCard />
    </div>
  );
};

export default HomePage;
