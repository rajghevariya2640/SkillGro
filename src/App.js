import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Header from "./shared/Header";
import SGButton from "./shared/SGButton";
import { DownArrow } from "./assets/image/svg/Icon";
import ScrollEffect from "./shared/ScrollEffect";
import Footer from "./shared/Footer";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AllCourse from "./pages/AllCourse";
import PageLayout from "./shared/PageLayout";
import SingleCourse from "./pages/SingleCourse";
import NotFound from "./shared/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollOptions = {
      top: 0,
      behavior: "smooth",
    };
    window.scrollTo(scrollOptions);
  }, [pathname]);

  return null;
};

function App() {
  // scroll to top button
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <ScrollEffect />
      <div
        className={`fixed bottom-10 right-10 z-50 duration-200 ${
          isVisible
            ? "visible opacity-100 translate-y-0"
            : "opacity-0 invisible translate-y-3"
        }`}
      >
        <SGButton
          onClick={scrollToTop}
          variant="primary"
          className=" !p-0 h-10 w-10 !rounded-[4px] flex justify-center hover:!shadow-none !shadow-[3px_4px_0_rgba(0,0,0,0.8)]"
        >
          <DownArrow mainClass="rotate-180 w-2.5" className="fill-white" />
        </SGButton>
      </div>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-course" element={<PageLayout />}>
            <Route index element={<AllCourse />} />
            <Route path="single-course" element={<SingleCourse />} />
          </Route>
          <Route path="/all-course" element={<PageLayout />}>
            <Route index element={<AllCourse />} />
            <Route path="single-course" element={<SingleCourse />} />
          </Route>
          <Route element={<PageLayout />}>
            <Route path="/error-page" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/error-page" replace />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
