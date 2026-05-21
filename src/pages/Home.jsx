import About from "../components/Home/About/About";
import CTA from "../components/Home/CTA/CTA";
import FAQ from "../components/Home/FAQ/FAQ";
import Feature from "../components/Home/Feature/Feature";
import Form from "../components/Home/Form/Form";
import Hero from "../components/Home/Hero/Hero";
import Reason from "../components/Home/Reason/Reason";
import Story from "../components/Home/Story/Story";
import Testimonial from "../components/Home/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Story />
      <Reason />
      <Feature />
      <Testimonial />
      <FAQ />
      <CTA />
      <Form />
    </>
  );
}
