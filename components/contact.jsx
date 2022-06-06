import { useState } from 'react'
import axios from 'axios'
import * as EmailValidator from 'email-validator';
import { message } from 'antd';

export default function Contact({ }) {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "", company: "", phone: "", country: "" })
  const [isContactSubmitting, setContactPending] = useState(false)

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

  return <>
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
  </>
}