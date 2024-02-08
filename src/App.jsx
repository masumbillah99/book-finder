import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BookSection from "./book/BookSection";

function App() {
  return (
    <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <Navbar />
      <BookSection />
      <Footer />
    </div>
  );
}

export default App;
