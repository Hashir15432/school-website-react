import HeroSecond from './components/HeroSecond'
// import Vision from './components/Vision'
import AboutSecond from './components/About/AboutSecond'
import AboutForth from './components/About/AboutForth'
import Activity from './components/Activity'
import Review from './components/Review'
import Principal from './components/Principal'

const About = () => {
  return (
    <div>
        <HeroSecond heading='About Us' />
        {/* <Vision /> */}
        <AboutSecond />
        <Activity />
        <AboutForth />
        <Principal />
        <Review />
    </div>
  )
}

export default About