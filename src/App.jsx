// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css';
// import Footer from './components/Footer';
// import Check from './components/Check';
import SectionFirst from './components/SectionFirst';
import Review from './components/Review';
import Features from './components/Features';
import Principal from './components/Principal';
import AboutSection from './components/AboutSection';
import Campus from './components/Campus';

const App = () => {
  return (
    <div className=''>
      {/* <Navbar /> */}
      <Hero />
      <Features />
      {/* <FeaturesSec /> */}
      <AboutSection />
      <Campus />
      {/* <Check /> */}
      <SectionFirst />
      <Principal />
      <Review />
      {/* <Footer /> */}
    </div>
  )
}

export default App