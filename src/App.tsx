import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Category from "./Category"
import FeatureSectionFruits from "./FeatureSectionFruits"
import FeatureSectionBreakfast from "./FeatureSectionBreakfast"
import BannerSection from "./BannerSection"
import BlogSection from "./BlogSection"
import NewsLetter from "./NewsLetter"
import FeatureSection from "./FeatureSection"
import Footer from "./Footer"
import ContactUs from "./ContactUs"

// import emailjs from '@emailjs/browser';
const App = () => {
  return (
    <main>
    <Navbar />
    <Hero />
    <Category />
    <FeatureSectionFruits/>
    <FeatureSectionBreakfast/>
    <BannerSection/>
    <BlogSection/>
    <NewsLetter/>
    <FeatureSection/>
    <ContactUs/>
    <Footer/>
   </main>
  )
}

export default App