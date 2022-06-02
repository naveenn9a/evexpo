import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container mx-auto">
          <div className="flex sm:flex-col">
            <div className="footer-info w-full px-10 sm:px-5">
              <img src='/logo2.png' alt='Green Evolution Initiative'></img>
              <p className='mt-5 text-lg'>Green Evolution Initiative is slated to be as one of the world’s premier EV Auto and technology shows.</p>
            </div>

            <div className='footer-info-right w-full sm:px-5'>
              <div className="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
                  <li><i className="ion-ios-arrow-right"></i> <Link href="/promotion-plan">Promotion Plans</Link></li>
                </ul>
              </div>

              <div className="footer-contact">
                <h4>Contact Us</h4>
                <p>
                  Native promoters Pvt Ltd - #28, Ashirvad Colony, Horamavu, Bengaluru, Karnataka 560016, India <br />
                  <strong>Phone:</strong> +91 9980234506<br />
                  <strong>Email:</strong> <a className='text-white' href="mailto:marketing@greenevolutioninitiative.com">marketing@greenevolutioninitiative.com</a> <a className='text-white' href="mailto:info@greenevolutioninitiative.com">info@greenevolutioninitiative.com</a><br />
                </p>
                <div className="social-links">
                  <a target={"_blank"} rel="noreferrer" href="https://twitter.com/GEIexpo" className="twitter"><i className="fa fa-twitter"></i></a>
                  <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/Green-Evolution-Initiative-109824648400106/?ref=pages_you_manage" className="facebook"><i className="fa fa-facebook"></i></a>
                  <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/greenevolutioninitiative/" className="instagram"><i className="fa fa-instagram"></i></a>
                  <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/company/green-evolution-initiative/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-5">
        <div className="copyright">
          © Copyright <strong>Green Evolution Initiative</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}