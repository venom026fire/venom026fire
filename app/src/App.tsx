import BackToTop from "./components/layout/BackToTop";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ScrollProgress from "./components/layout/ScrollProgress";
import ScrollToTop from "./components/layout/ScrollToTop";
import AnimatedRoutes from "./routes";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-mist-200">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
