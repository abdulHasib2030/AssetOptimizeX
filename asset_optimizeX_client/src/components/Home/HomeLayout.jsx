import Feature from "./Feature"
import Hero from "./Hero"
import { Team } from "./Team"
import Testimonials from "./Testimonials"


import backgroundImage from '../../assets/svg/Colored_Patterns.svg'
import backgroundImages from '../../assets/svg/Animated_2.svg'
import Pricing from "./Pricing"
const HomeLayout = () => {

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  
  };

  const divStyletesm = {
    backgroundImage: `url(${backgroundImages})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  
  };
 
  return (
    <>
      <Hero/>
     
      <div className="w-full" >
      <Feature />
      </div>
          {/* <HeroSection/> */}
          {/* <FeatureSection/> */}
          {/* <EmbraceSection/> */}
          
          <Pricing />

      <div className="bg-gradient-to-r from-gray-300 w-full overflow-hidden"  style={divStyletesm}>
        <div className={`container mx-auto`}>
          <div className={`xl:max-w-[1280px] w-full`}>
            <Testimonials />
          </div>
        </div>
      </div>
      <div className="w-full" style={divStyle}>
      <Team/>
      </div>
    </>
  )
}

export default HomeLayout