import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="px-4 mx-auto lgl:px-16 max-w-screen-2xl">
        <Navbar></Navbar>
        <Banner></Banner>
        <Projects></Projects>
        <Features></Features>
        <Resume></Resume>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
