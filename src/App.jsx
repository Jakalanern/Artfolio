import React, { useState } from 'react'
import './App.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import images from './images'
import { TypeAnimation } from 'react-type-animation'

function App() {
  const [autoPlay, setAutoPlay] = useState(true)

  console.log(images)
  return (
    <>
      <section className=' title py-14 px-12 text-center flex flex-col gap-2 font-mono border-b-[1px] border-gray-400 '>
        <h1 className='text-3xl md:text-4xl font-bold'>
          Jack Stevens Art Showcase
        </h1>
        <TypeAnimation
          sequence={[
            'All drawings are drawn and/or painted by hand digitally, by Jack Stevens.',
          ]}
          speed={50}
          className='text-md md:text-lg tracking-tighter'
        />
      </section>
      <div className='w-[350px] md:w-[615px] lg:w-[805px] ml-auto mr-auto'>
        <Carousel
          className='gallery px-0 py-14 ml-auto mr-auto'
          showStatus={false}
          autoPlay={autoPlay}
          infiniteLoop={true}
          emulateTouch={true}
          showArrows={false}
          onClickItem={() => {
            setAutoPlay(false)
          }}
          onClickThumb={() => {
            setAutoPlay(false)
          }}
          interval={3000}>
          {images.map((image, alt, id) => {
            return (
              <div className='Image box rounded-md w-[325px] md:w-[550px] lg:w-[750px] cursor-grab mx-auto border-[2px] border-black'>
                <img
                  src={image.src}
                  className='rounded-md'
                  alt={alt}
                  key={id}
                />
              </div>
            )
          })}
        </Carousel>
      </div>

      <section className='py-14 px-8 border-t-[1px] border-black flex flex-col align-middle text-center gap-6'>
        <div className='flex flex-col'>
          <h1 className='text-lg md:text-xl font-medium'>Contact Me //</h1>
          <h4>
            <a
              href='mailto:jtoonzart@gmail.com'
              className='font-light underline md:text-lg'>
              jtoonzart@gmail.com
            </a>
          </h4>
        </div>

        <div className='flex flex-col'>
          <h1 className='text-lg font-medium md:text-xl'>
            View more of my work //
          </h1>
          <h4>
            <a
              href='https://www.instagram.com/withers.art/'
              className='font-light underline md:text-lg'>
              @withers.art
            </a>
          </h4>
        </div>
      </section>
    </>
  )
}

export default App
