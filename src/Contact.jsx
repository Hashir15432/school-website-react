import ContactSection from './components/ContactSection'
import ContactInfo from './components/ContactInfo'
import HeroSecond from './components/HeroSecond'

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