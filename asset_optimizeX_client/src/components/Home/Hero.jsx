import React from 'react'
import VideoPlayer from '../../assets/images/asset2.mp4'
import thambalVideo from '../../assets/images/Asset-optimizex.png'
import backgroundImag from '../../assets/svg/Animate.svg'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

const Hero = () => {

  const divStyl = {
    backgroundImage: `url(${backgroundImag})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  };


  return (
    <div>
      
      <section className="dark:bg-gray-800 dark:text-gray-100" style={divStyl} >
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"  >
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
    <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                width="52"
                height="25"
              />
            </svg>
            
          </span>{' '}
    <h1
          className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          Frictionless Digital Asset
  
          <span className="sm:block"> Management. </span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Digital asset management (DAM) streamlines the organization, storage, and retrieval of digital resources. It enhances collaboration, ensures version control, and optimizes resource utilization, offering a holistic solution for efficient digital asset handling!
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/get-started"
          >
            Get Started
          </a>
  
          <a
            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/about"
          >
            Learn More
          </a>
        </div>


		</div>
    
<div>
    <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                width="52"
                height="25"
              />
            </svg>
            
          </span>{' '}


  
    
          
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    <figure >

 <Video  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" poster={thambalVideo} controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
             >
            <source  src={VideoPlayer} type='video/mp4'  />
           

 </Video>

    </figure>
			{/* <img src={hero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
		</div>
</div>

	</div>
</section>

    </div>
  )
}

export default Hero
