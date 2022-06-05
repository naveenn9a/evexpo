import styles from '../styles/Home.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Slider from "react-slick";
import { useState, useRef } from 'react'
import axios from 'axios'
import * as EmailValidator from 'email-validator';
import { message, Tag } from 'antd';
import { Register } from './../components/register'
import Countdown from 'react-countdown';

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(2)])
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "", company: "", phone: "", country: "" })
  const [isContactSubmitting, setContactPending] = useState(false)
  const [isRegisterOpen, toggleRegisterDialog] = useState(false)
  const [isDownloadBrochure, setDownloadBrochure] = useState(false)

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoPlaySpeed: 3000,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false
  };

  const setFormData = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const submitForm = (e) => {
    e.preventDefault();

    if (contactForm.message.trim().length == 0 || contactForm.name.trim().length == 0 || contactForm.email.trim().length == 0 || contactForm.phone.trim().length == 0 || contactForm.country.trim().length == 0) {
      message.warn('Please enter all the fields')
      return;
    }

    if (!EmailValidator.validate(contactForm.email)) {
      message.warn('Please enter valid email.')
      return;
    }

    setContactPending(true);

    axios.post('/api/contact', contactForm)
      .then(e => {
        setContactPending(false);
        message.success('Submitted!');
        setContactForm({ name: "", email: "", message: "", company: "", phone: "", country: "" })
      })
      .catch(e => {
        setContactPending(false);
        message.error('Error submitting. Please try again');
      })
  }

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div>done</div>;
    } else {
      return <h1 className='text-xl sm:text-lg font-[200] text-center mb-0 text-white'>
        Early bird registration ends in <span className='font-[300]'>{days} days and {hours}h {minutes}m {seconds}s</span>
      </h1>
    }
  };

  return (
    <div className={styles.container}>
      <Register isDownloadBrochure={isDownloadBrochure} isModalVisible={isRegisterOpen} handleCancel={e => { toggleRegisterDialog(false); setDownloadBrochure(false) }} />
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

      <section id="venue-strip" className='h-[125px]'>
        <div className="main-content w-full h-[70px] text-white container px-[150px] sm:px-0 mx-auto flex flex-col items-center justify-center">
          <div className="count-item w-full w-full">
            <h1 className=' sm:text-lg text-3xl font-[200] text-center mb-0 text-white'><span className="font-[300]">24, 25 & 26th June</span> at Orion Mall, Rajajinagara, Bengaluru</h1>
          </div>
        </div>
        <div className="count-down w-full py-6 px-10 h-[55px] flex flex-col items-center justify-center" style={{ background: '#358600' }}>
          <Countdown
            date={new Date("2022-06-24T06:00:00")}
            renderer={renderer}
          />
        </div>
      </section>

      <section id="about-the-show" className="section-bg">
        <div className='container mx-auto px-10 mt-10 sm:px-0'>
          <div className="section-header ">
            <h3 className=''>About the show</h3>
          </div>
          <div className="main-content px-[50px] py-[50px] sm:px-5 sm:py-0">
            <div className="flex sm:flex-col">
              <div className="main-content-left">
                <div className="about-the-show_header justify text-primary sm:text-center text-4xl sm:text-2xl mb-4 font-bold">
                  Green Evolution Initiative - EV Expo - 2022
                </div>
                <div className="about-the-show_sub text-xl sm:text-lg leading-normal sm:text-center sm:pr-0 pr-10 mb-4 text-left">
                  <p className='text-justify'>
                    Green Evolution Initiative 2022 Expo is an Electric Motor Vehicle Show which will provides the opportunity and platform to electric vehicle manufacturers to showcase their latest Products, technology, equipment, innovations and NextGen transport, electric passengers cars, scooter, motorcycle, cycles,  etc to meet and network with the trade industry as well as end users with the main aim to find out new business and protection of the environment. Green Evolution Initiative 2022 Expo is the best public interactive platform for resources sharing, product purchase and brand display for the people and industry. EvExpo is the only expo dedicated to electric vehicle industry in India. “End mile connectivity” and “Environment Friendly” are the key to Electric vehicle industry.
                  </p>
                </div>
              </div>
              <div className="main-content-right flex items-center justify-center">
                <img src="/gvi_pic1.webp" alt="givpic1" />
              </div>
            </div>

            <div className="flex mt-[50px] sm:flex-col">
              <div className="main-content-left sm:hidden flex items-center justify-center">
                <img src="/gvi_pic2.webp" alt="givpic2" />
              </div>
              <div className="main-content-right">
                <div className="about-the-show_header text-primary sm:text-center sm:pl-0 pl-10 text-4xl sm:text-2xl mb-4 font-bold text-left">
                  THE GREEN VEHICLE SECTOR OVERVIEW
                </div>
                <div className="about-the-show_sub text-xl sm:text-lg leading-normal sm:text-center sm:pl-0 pl-10 mb-4 text-right">
                  <p className='text-justify'>
                    The Indian Automobile sector can be said to be broadly divided into 79% of Two Wheelers, 4% of 3  Wheelers, 12% of economy cars, 2% of High End cars and rest forming other vehicles segments. The Growing prices of fossil fuels and an increased awareness of Environment protection has lead the world including India to adopt Green Vehicle Technology. The phase – II of FAME scheme has an out lay of 10,000 crore for a period of 3 years from 1st April 2019. 86% of the fund has been allocated for creating a demand of XEV’s. The Fame – II aims to generate demand by way of supporting 7000 e-Buses, 5 lakhs e-3 Wheelers, 55000 e-4 Wheeler Passenger cars (including strong Hybrid) and 10 lakh e-2 Wheelers. This opens up the investment for about $180 billion by 2030 and an annual battery capacity requirement of 158 Gwh. The sales of electric vehicle is also expected to grow from half million in FY 2020 TO 100 MILLION BY 2030.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-the-organiser" className="">
        <div className='container mx-auto px-10 mt-10 sm:px-0'>
          <div className="section-header ">
            <h3 className=''>About The Organiser</h3>
          </div>
          <div className="main-content text-center px-[50px] pb-[50px] pt-[0px] sm:px-5">
            <div className="text-center about-the-show_header text-primary text-4xl font-bold">
              <img className='mx-auto sm:h-[100px]' src="/assets/native/logo.webp" alt="Native Promoters" />
            </div>
            <div className="sm:pr-0 text-center about-the-show_sub text-xl sm:text-lg leading-normal pr-10 mb-4 text-left">
              <p className='text-justify'>
                Native Promoters is a dynamic performance-
                based growth marketing agency in Karnataka.
                We focus on the creative thoughts on behalf of
                customers. The company believes to formulate
                the emotion and technicality with a satisfactory
                combination.

              </p>
              <p className='text-justify'>
                Native Promoters is into both offline and
                online marketing presence which makes term
                marketing potent. The strategies and activities
                are well designed and executed to form the
                bond between the product and the customer
                which leads to brand building. We believe
                local influencers have more capability over
                customers perception, so we established with
                local influencers network to take marketing
                Action easier.

              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="visitors-count" className=''>
        <div className="main-content w-full h-full text-white container px-[150px] sm:px-0 mx-auto flex sm:flex-col items-center justify-center">
          <div className="count-item w-full w-full">
            <h1 className='text-6xl sm:text-xl font-bold text-center text-white'>45000+</h1>
            <p className='text-lg sm:text-lg text-center'>Estimated Visitors</p>
          </div>
          <div className="count-item w-full">
            <h1 className='text-6xl sm:text-xl font-bold text-center text-white'>40+</h1>
            <p className='text-lg sm:text-lg text-center'>Estimated Exhibitors</p>
          </div>
          <div className="count-item w-full">
            <h1 className='text-6xl sm:text-xl font-bold text-center text-white'>65+</h1>
            <p className='text-lg sm:text-lg text-center'>Brands</p>
          </div>
        </div>
      </section>

      <section id="why-exhibit" className=''>
        <div className='container mx-auto px-10 mt-10 sm:px-0'>
          <div className="section-header">
            <h3>Why Exhibit?</h3>
          </div>
          <div className="main-content px-[50px] sm:px-0 sm:px-5">
            <p className='text-xl sm:text-lg mb-4 text-justify'>
              Ev expo Show will facilitate one of the finest exhibiting platforms showcasing the latest EV models, innovative solutions, next-gen technologies and many of the greatest electrification developments from leading automakers, service providers and trailblazing startups. The event aims to provide a perfect platform for participants to get their latest products recognised by end-users & important industry players and gauge instant market reaction.
            </p>
            <p className='text-xl sm:text-lg mb-4 text-justify'>
              The exhibition will be attended by industry players from the global value chain including, business leaders, investors, qualified buyers, industry experts and domestic media, thereby providing participants with an exclusive opportunity to consolidate their market position in front of a most-relevant audience and gain maximum brand visibility. The expo will run for 3 days and shall facilitate a high-level business ground to engage with industry buyers, conduct business in real-time and establish long-term business relationships
            </p>
          </div>
          <div className="mt-[50px] px-[120px] sm:px-0 portfolio-container flex sm:flex-col">
            <div className="w-full mb-1 portfolio-item sm:mr-0 mr-1">
              <h1 className='text-xl text-white font-bold'>Zero Tailpipe Emissions</h1>
              <p className='sm:text-lg text-justify'>Driving an electric vehicle can help you reduce your carbon footprint because there will be zero tailpipe emissions. You can reduce the environmental impact of charging your vehicle further by choosing renewable energy options for home electricity.</p>
            </div>
            <div className="w-full portfolio-item mb-1">
              <h1 className='text-xl text-white font-bold'>Low maintenance cost</h1>
              <p className='sm:text-lg text-justify'>Electric vehicles have very low maintenance costs because they don’t have as many moving parts as an internal combustion vehicle. The servicing requirements for electric vehicles are lesser than the conventional petrol or diesel vehicles. Therefore, the yearly cost of running an electric vehicle is significantly low.</p>
            </div>
          </div>
          <div className="px-[120px] sm:px-0 portfolio-container flex sm:flex-col">
            <div className="w-full sm:mr-0 sm:mb-1 portfolio-item mr-1">
              <h1 className='text-xl text-white font-bold'>Electric Vehicles are easy to drive and quiet</h1>
              <p className='sm:text-lg text-justify'>Electric vehicles don’t have gears and are very convenient to drive. There are no complicated controls, just accelerate, brake, and steer. When you want to charge your vehicle, just plug it into a home or public charger. Electric vehicles are also quiet, so they reduce noise pollution that traditional vehicles contribute to.</p>
            </div>
            <div className="w-full sm:mb-1 portfolio-item">
              <h1 className='text-xl text-white font-bold'>No noise pollution</h1>
              <p className='sm:text-lg text-justify'>Electric vehicles have the silent functioning capability as there is no engine under the hood. No engine means no noise. The electric motor functions so silently that you need to peek into your instrument panel to check if it is ON. Electric vehicles are so silent that manufacturers have to add false sounds in order to make them safe for pedestrians.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="exhibitor-profile" className="section-bg py-[50px] mt-10">
        <div className='container mx-auto px-10 sm:px-0'>
          <div className="section-header">
            <h3>Exhibitor Profile</h3>
          </div>
        </div>

        <div className="main-content container mx-auto">
          <Slider {...settings}>
            <div className="react-slick-slide">
              <img src={"/assets/exhibitors/1.webp"} alt="sfs" />
              {/* <div className='info sm:w-[80%] sm:left-[10%]'>
                <h1 className='info-header text-3xl sm:text-lg font-bold'>
                  Entire EV Ecosystem Under One Roof
                </h1>
                <p className='info-para'>
                  Dedicated to the entire eMobility ecosystem that brings the entire EV value chain under one roof to network
                </p>
              </  fdiv> */}
            </div>
            <div className="react-slick-slide">
              <img src={"/assets/exhibitors/2.webp"} alt="sfs" />
            </div>
            <div className="react-slick-slide">
              <img src={"/assets/exhibitors/3.webp"} alt="sfs" />
            </div>
            <div className="react-slick-slide">
              <img src={"/assets/exhibitors/4.webp"} alt="sfs" />
            </div>
            <div className="react-slick-slide">
              <img src={"/assets/exhibitors/5.webp"} alt="sfs" />
            </div>
            <div className="react-slick-slide">
              <img src={"/assets/exhibitors/1.webp"} alt="sfs" />
            </div>
            <div className="react-slick-slide">
              <img src={"/assets/exhibitors/2.webp"} alt="sfs" />
            </div>
          </Slider>
        </div>
      </section>

      <section id="about-the-venue" className="">
        <div className='container mx-auto px-10 mt-10 sm:mt-5 sm:px-0'>
          <div className="section-header ">
            <h3 className=''>About The Venue</h3>
          </div>
          <div className="main-content px-[50px] py-[50px] sm:px-5 sm:py-0">
            <h1 className="text-4xl text-primary font-bold text-center">
              Orion Mall
            </h1>
            <div className="why-orion">
              <h1 className="text-2xl font-bold text-center">
                Why Orion?
              </h1>
              <ul className='text-lg text-center'>
                <li className='sm:text-lg sm:font-normal'><span className='text-primary'>✓</span> First in Bangalore to take such mode of <span className="text-primary">initiative</span>.</li>
                <li className='sm:text-lg sm:font-normal'><span className='text-primary'>✓</span> Orion mall has already taken its initiative by installing <span className="text-primary">EV</span> chargers at parking, now we are adding one more step towards it.</li>
                <li className='sm:text-lg sm:font-normal'><span className='text-primary'>✓</span> Encouraging public to be a part of <span className="text-primary">Go Green</span>.</li>
                <li className='sm:text-lg sm:font-normal'><span className='text-primary'>✓</span> Oppurtunity for people to experience <span className="text-primary">EV</span>.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="visitors-profile" className="">
        <div className='container mx-auto px-10 mt-10 sm:px-0 sm:mt-5'>
          <div className="section-header">
            <h3 className=''>Visitors Profile</h3>
          </div>
          <div className="main-content text-center px-[50px] py-[50px] sm:px-5 sm:py-0">
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Charging Station Manufacture</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Component Manufacture</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Component Supplier</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Critical Power Infrastructure</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Design and Simulation</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Distributor</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Drive train</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Electrical Vehicle Manufacturer</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Engineering Consultancy</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Fuel Cell</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Hybrid Vehicle Manufacture</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Magnetics</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Power Generation</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Motors</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Automation Equipment</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Automotive components</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Automotive Manufacturers</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Battery components</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Battery manufactures</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Battery materials</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Battery Operated Auto</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Battery Pack Assembler</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Battery Pack Integrator</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Cabling & Connectors</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">OEMs</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Power Management</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Power monitoring/ Distribution</Tag>
            <Tag color={"#358600"} className="sm:text-sm sm:px-2 sm:py-1 sm:m-1 text-lg px-5 py-2 m-2">Renewable energy Technology</Tag>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-10 section-bg">
        <div className='container mx-auto px-10 sm:px-5'>
          <div className="section-header">
            <h3>Contact Us</h3>
            <p className='text-lg'>Want to efficiently engage and connect with your team? Contact our team! </p>
          </div>
          <div className="flex px-[80px] sm:flex-col sm:px-5">
            <div className="w-full">
              <h3 className="font-bold text-center text-2xl">Get in touch</h3>
              <div className="contact-info  mb-5">
                <p className=' w-full mx-auto text-xl sm:text-lg'>
                  Native promoters Pvt Ltd - #28, Ashirvad Colony, Horamavu, Bengaluru, Karnataka 560016, India
                </p>
                <div className=" mt-4 text-xl flex flex-col">
                  <i className="ion-ios-telephone"></i>
                  <a className='sm:text-lg' href="tel:+919980234506">+91 9980234506</a>
                </div>
                <div className="mt-4 text-xl flex flex-col">
                  <i className="ion-ios-email"></i>
                  <a className='sm:text-lg' href="mailto:marketing@evexpogei.com">marketing@evexpogei.com</a>
                  <a className='sm:text-lg' href="mailto:info@evexpogei.com">info@evexpogei.com</a>
                </div>
              </div>
            </div>
            <div className="w-full text-center">
              <h3 className='font-bold text-2xl sm:text-xl'>Leave us a message</h3>
              <div className="form">
                <form action="" method="post" role="form" className="contactForm">
                  <div className="">
                    <input type="text" value={contactForm.name} onChange={setFormData} name="name" className="w-[80%] sm:w-[100%] mb-2" id="name" placeholder="Full name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  </div>
                  <div className="">
                    <input type="email" value={contactForm.email} onChange={setFormData} className="w-[80%] sm:w-[100%] mb-2" name="email" id="email" placeholder="Email address" data-rule="email" data-msg="Please enter a valid email" />
                  </div>
                  <div className="">
                    <input type="phone" value={contactForm.phone} onChange={setFormData} className="w-[80%] sm:w-[100%] mb-2" name="phone" id="phone" placeholder="Phone number" data-rule="phone" data-msg="Please enter a valid email" />
                  </div>
                  <div className="">
                    <input type="text" value={contactForm.company} onChange={setFormData} className="w-[80%] sm:w-[100%] mb-2" name="company" id="company" placeholder="Company name" />
                  </div>
                  <div className="">
                    <input type="text" value={contactForm.country} onChange={setFormData} className="w-[80%] sm:w-[100%] mb-2" name="country" id="country" placeholder="Country" />
                  </div>
                  <div className="">
                    <textarea value={contactForm.message} onChange={setFormData} className="w-[80%] sm:w-[100%] mb-2" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  </div>
                  <div className=""><button disabled={isContactSubmitting} onClick={submitForm} type="submit">{isContactSubmitting ? 'Please wait...' : 'Send Message'}</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
