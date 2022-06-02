import { useState } from 'react'
import { Modal, message } from 'antd';
import * as EmailValidator from 'email-validator';
import axios from 'axios'
import { useRouter } from 'next/router';

export function Register({ isModalVisible, handleCancel, isDownloadBrochure }) {

  const [registerForm, setregisterForm] = useState({ name: "", email: "", job: "", company: "", phone: "", country: "", type: "" })
  const [isContactSubmitting, setContactPending] = useState(false)
  const router = useRouter();

  const setFormData = (e) => {
    setregisterForm({ ...registerForm, [e.target.name]: e.target.value })
  }

  setTimeout(() => {
  }, 3000);

  const submitForm = (e) => {
    e.preventDefault();

    if (registerForm.job.trim().length == 0 || registerForm.name.trim().length == 0 || registerForm.email.trim().length == 0 || registerForm.phone.trim().length == 0 || registerForm.country.trim().length == 0) {
      message.warn('Please enter all the fields')
      return;
    }

    if (!EmailValidator.validate(registerForm.email)) {
      message.warn('Please enter valid email.')
      return;
    }

    if (registerForm.type !== 'exhibitor' && registerForm.type !== 'visitor' && registerForm.type !== 'dealorfran') {
      console.log(registerForm.type)
      message.warn("Please select if you're a Visitor/ Exhibitor/ Dealer/ Franchise.")
      return;
    }

    setContactPending(true);
    axios.post('/api/register', {...registerForm, isDownloadBrochure})
      .then(e => {
        setContactPending(false);
        message.success('Successfully registered. Thank you!');
        setregisterForm({ name: "", email: "", job: "", company: "", type: "", phone: "", country: "" })
        handleCancel()
        if(isDownloadBrochure) {
          router.push('/brochure.pdf')
        }
      })
      .catch(e => {
        setContactPending(false);
        message.error('Error submitting. Please try again');
      })
  }

  return (
    <Modal title="Registration" footer={false} visible={isModalVisible} onCancel={handleCancel}>
      <div id='contact' className="w-full p-0 text-center">
        <div className="form">
          <form action="" method="post" role="form" className="registerForm">
            <div className="">
              <input type="text" value={registerForm.name} onChange={setFormData} name="name" className="w-[100%] sm:w-[100%] mb-2" id="name" placeholder="Full name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            </div>
            <div className="">
              <input type="email" value={registerForm.email} onChange={setFormData} className="w-[100%] sm:w-[100%] mb-2" name="email" id="email" placeholder="Email address" data-rule="email" data-msg="Please enter a valid email" />
            </div>
            <div className="">
              <input type="phone" value={registerForm.phone} onChange={setFormData} className="w-[100%] sm:w-[100%] mb-2" name="phone" id="phone" placeholder="Phone number" data-rule="phone" data-msg="Please enter a valid email" />
            </div>
            <div className="">
              <input type="text" value={registerForm.company} onChange={setFormData} className="w-[100%] sm:w-[100%] mb-2" name="company" id="company" placeholder="Company name" />
            </div>
            <div className="">
              <input type="text" value={registerForm.job} onChange={setFormData} className="w-[100%] sm:w-[100%] mb-2" name="job" id="job" placeholder="Job title" />
            </div>
            <div className="">
              <input type="text" value={registerForm.country} onChange={setFormData} className="w-[100%] sm:w-[100%] mb-2" name="country" id="country" placeholder="Country" />
            </div>
            <div className="">
              <select value={registerForm.type} onChange={setFormData} className="w-[100%] sm:w-[100%] mb-2" name="type" data-rule="required" >
                <option value="Select">Select</option>
                <option value="exhibitor">Exibitor</option>
                <option value="visitor">Visitor</option>
                <option value="dealorfran">Dealer/ Franchise.</option>
              </select>
            </div>
            <div className="text-left"><button disabled={isContactSubmitting} onClick={submitForm} type="submit">{isContactSubmitting ? 'Please wait...' : isDownloadBrochure ? 'Request Brochure' : 'Register'}</button></div>
          </form>
        </div>
      </div>
    </Modal>
  )
}