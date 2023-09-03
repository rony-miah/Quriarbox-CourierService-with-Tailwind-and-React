
import './App.css'
import Banner from './Components/Banner/Banner'
import Counter from './Components/Counter/Counter'
import Navbar from './Components/Navbar/Navbar'
import Service from './Components/Service/Service'
import Testimonial from './Components/Testimonial/Testimonial'
import VideoSection from './Components/VideoSection/VideoSection'
import Massage from './Components/Massage/Massage'
import Contact from './Components/Contact/Contact'
import Subscription from './Components/Subscription/Subscription'
import Footer from './Components/Footer/Footer'
import Copyright from './Components/Copyright/Copyright'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
      <Counter></Counter>
      <VideoSection></VideoSection>
      <Testimonial></Testimonial>
      <Massage></Massage>
      <Contact></Contact>
      <Subscription></Subscription>
      <Footer></Footer>
      <Copyright></Copyright>
    </>
  )
}

export default App
