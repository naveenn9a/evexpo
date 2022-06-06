import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Banner({ toggleRegistration: toggleRegisterDialog, setDownloadBrochure }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(2)])

  return <>
    <div ref={emblaRef} className="embla">
      <div className="embla__container sm:h-[50vh]">
        {/* <div className="embla__slide">
            // <div className="slider-overlay"></div>
            <img className='sm:h-[50vh]' src={"/assets/banner/0.jpg"} alt="Green evolution initiative" />
            <div className='info sm:w-[80%] sm:left-[10%] sm:top-[60%]'>
              <h1 className='info-header text-3xl sm:text-lg font-bold'>
                Driving Top-Line Growth Through Electric Vehicles Transformation
              </h1>
              <p className='info-para text-normal sm:text-[12px]'>
                
              </p>
              <div className="buttons flex flex-row sm:flex-col">
                <button className='mb-2 button-28 w-[200px]' onClick={e => { toggleRegisterDialog(true, true); setDownloadBrochure(true); }}>Request Brochure</button>
                <button className='register button-28 w-[200px]' onClick={e => toggleRegisterDialog(true)}>Register Online</button>
              </div>
            </div>
          </div> */}
        <div className="embla__slide">
          {/* <div className="slider-overlay"></div> */}
          <img className='sm:h-[50vh]' src={"/assets/banner/1.webp"} alt="Green evolution initiative" />
          <div className='info sm:w-[80%] sm:left-[10%]'>
            <h1 className='info-header text-3xl sm:text-lg font-bold'>
              Driving Top-Line Growth Through Electric Vehicles Transformation
            </h1>
            <p className='info-para text-xl font-light sm:text-[12px]'>
              EV Expo gave a platform to B2B & B2C EV companies to  generate more qualified leads, strengthen their competitive advantage, and drive increased revenue.
            </p>
            <div className="buttons flex flex-row sm:flex-col">
              <button className='mb-2 button-28 w-[200px]' onClick={e => { toggleRegisterDialog(true, true); setDownloadBrochure(true); }}>Request Brochure</button>
              <button className='register button-28 w-[200px]' onClick={e => toggleRegisterDialog(true)}>Register Online</button>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          {/* <div className="slider-overlay"></div> */}
          <img className='sm:h-[50vh]' src={"/assets/banner/2.webp"} alt="Green evolution initiative" />
          <div className='info sm:w-[80%] sm:left-[10%]'>
            <h1 className='info-header text-3xl sm:text-lg font-bold'>
              It’s time to plug-in to the new road ahead!
            </h1>
            {/* <p className='info-para text-normal sm:text-[12px]'>
                Dedicated to the entire eMobility ecosystem that brings the entire EV value chain under one roof to network with major industry players and identify numerous business opportunities in a hypercompetitive EV market.
              </p> */}
            <div className="buttons flex flex-row sm:flex-col">
              <button className='mb-2 button-28 w-[200px]' onClick={e => { toggleRegisterDialog(true, true); setDownloadBrochure(true); }}>Request Brochure</button>
              <button className='register button-28 w-[200px]' onClick={e => toggleRegisterDialog(true)}>Register Online</button>
            </div>
          </div>
        </div>

        <div className="embla__slide">
          {/* <div className="slider-overlay"></div> */}
          <img className='sm:h-[50vh]' src={"/assets/banner/3.webp"} alt="Green evolution initiative" />
          <div className='info sm:w-[80%] sm:left-[10%]'>
            <h1 className='info-header text-3xl sm:text-lg font-bold'>
              It’s time for a new generation of personal transportation
            </h1>
            {/* <p className='info-para text-normal sm:text-[12px]'>
                Dedicated to the entire eMobility ecosystem that brings the entire EV value chain under one roof to network with major industry players and identify numerous business opportunities in a hypercompetitive EV market.
              </p>
              */}
            <div className="buttons flex flex-row sm:flex-col">
              <button className='mb-2 button-28 w-[200px]' onClick={e => { toggleRegisterDialog(true, true); setDownloadBrochure(true); }}>Request Brochure</button>
              <button className='register button-28 w-[200px]' onClick={e => toggleRegisterDialog(true)}>Register Online</button>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          {/* <div className="slider-overlay"></div> */}
          <img className='sm:h-[50vh]' src={"/assets/banner/4.webp"} alt="Green evolution initiative" />
          <div className='info sm:w-[80%] sm:left-[10%]'>
            <h1 className='info-header text-3xl sm:text-lg font-bold'>
              It’s time for something better, faster, and simpler
            </h1>
            {/* <p className='info-para text-normal sm:text-[12px]'>
                Dedicated to the entire eMobility ecosystem that brings the entire EV value chain under one roof to network with major industry players and identify numerous business opportunities in a hypercompetitive EV market.
              </p> */}
            <div className="buttons flex flex-row sm:flex-col">
              <button className='mb-2 button-28 w-[200px]' onClick={e => { toggleRegisterDialog(true, true); setDownloadBrochure(true); }}>Request Brochure</button>
              <button className='register button-28 w-[200px]' onClick={e => toggleRegisterDialog(true)}>Register Online</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}