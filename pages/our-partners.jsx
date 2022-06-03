import styles from '../styles/Home.module.css'
import Slider from "react-slick";

export default function Home() {

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoPlaySpeed: 2000,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false
  };

  return (
    <div className={styles.container}>
      <section id="exhibitor-profile" className="section-bg py-[50px] mt-[50px]">
        <div className='container mx-auto px-10 sm:px-0'>
          <div className="section-header">
            <h3>Our Partners</h3>
          </div>
        </div>

        <div className="main-content container mx-auto">
          <Slider {...settings}>
            <div className="react-slick-slide">
              <img src={"/assets/logos/4wavessupport_partner.png"} alt="sfs" />
            </div>
            <div className="react-slick-slide">
              <img src={"/assets/logos/fanstreet-digitalpartner.png"} alt="sfs" />
            </div>
            <div className="react-slick-slide">
              <img src={"/assets/logos/nativepromoters-organizedandmarketedby.png"} alt="sfs" />
            </div>
            <div className="react-slick-slide">
              <img src={"/assets/logos/orion-venue.jpg"} alt="sfs" />
            </div>
            <div className="react-slick-slide">
              <img src={"/assets/logos/spykke-chargingpartner.png"} alt="sfs" />
            </div>
          </Slider>
        </div>
      </section>
    </div>
  )
}
