import ContactSection from './components/Contact/ContactSection'
import ContactInfo from './components/Contact/ContactInfo'
import HeroSecond from './components/Hero/HeroSecond'

const Contact = () => {
  return (
    <div>
        <HeroSecond heading="Contact" />
        <ContactInfo />
        <ContactSection />
    </div>
  )
}

export default Contact