// import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import './App.css';
// import Footer from './components/Footer';
// import Check from './components/Check';
import SectionFirst from './components/SectionFirst/SectionFirst';
import Review from './components/Review/Review';
import Features from './components/Features/Features';
import Principal from './components/Principal/Principal';
import AboutSection from './components/About/AboutSecond';
import Campus from './components/Campus/Campus';

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