import Banner from "../Components/Banner"
import HomeConsultation from "../Components/HomeConsultation"
import HomeSmart from "../Components/HomeSmart"
import InteriorDesign from "../Components/InteriorDesign"
import MapSection from "../Components/MapSection"
import ProductCatagory from "../Components/ProductCatagory"
import Shades from "../Components/Shades"

function Home() {
  return (
    <div>
      <Banner />
      <ProductCatagory/>
      <Shades/>
      <HomeSmart/>
      <MapSection/>
      <InteriorDesign/>
      <HomeConsultation/>
    </div>
  )
}

export default Home
