
import "./App.css";
import Header from "./components/Home/Header/Header";
import Hero from "./components/Home/Hero/Hero";
import About from "./components/Home/About/About";
import Story from "./components/Home/Story/Story";
import Reason from "./components/Home/Reason/Reason";
import Feature from "./components/Home/Feature/Feature";
import Testimonial from "./components/Home/Testimonial/Testimonial";
import FAQ from "./components/Home/FAQ/FAQ";
import CTA from "./components/Home/CTA/CTA";
import Form from "./components/Home/Form/Form";
import Footer from "./components/Home/Footer/Footer";

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Story />
        <Reason />
        <Feature />
        <Testimonial />
        <FAQ />
        <CTA />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
