import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router';

export default function Navbar() {
  const [offset, setOffset] = useState(0);
  const [isMenuOpen, showMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollIntoView = (id) => {
    const element = document.querySelector(id)
    const offset = 50;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  const scrollInto = (e, id) => {
    e.preventDefault();
    showMenu(false)

    if(router.pathname != '/') {
      router.push('/')
      setTimeout(() => {
        scrollIntoView(id)
      }, 100);
    } else {
      scrollIntoView(id)
    }
  }

  return (
    <header id="header" className={`flex ${offset > 100 ? 'navbar-scrolled' : ''} ${router.pathname.replace('/', '')}`}>
      <div className="flex items-center justify-between w-full px-10 sm:px-0">
        <div id="logo" className="mx-10 h-full flex items-center">
          <img onClick={e => router.push('/')} className='h-[50%] cursor-pointer' src="/logo3.png" alt="Green Evolution Initiative" />
        </div>
        <MenuOutlined className='sm:block hidden sm:mr-5 sm:text-xl' onClick={e => showMenu(!isMenuOpen)} />
        <nav id="nav-menu-container" className='sm:hidden'>
          <ul className="nav-menu flex">
            <li><a className='text-xs text-[14px] p-0 mr-2 capitalize' onClick={e => { scrollInto(e, '#about-the-show') }} href="#">About Show</a></li>
            <li><a className='text-xs text-[14px] p-0 mr-2 capitalize' onClick={e => { scrollInto(e, '#about-the-organiser') }} href="#">Organiser</a></li>
            <li><a className='text-xs text-[14px] p-0 mr-2 capitalize' onClick={e => { scrollInto(e, '#why-exhibit') }} href="#">Why Exhibit</a></li>
            <li><a className='text-xs text-[14px] p-0 mr-2 capitalize' onClick={e => { scrollInto(e, '#exhibitor-profile') }} href="#">Exhibitor Profile</a></li>
            <li><a className='text-xs text-[14px] p-0 mr-2 capitalize' onClick={e => { scrollInto(e, '#about-the-venue') }} href="#">Venue</a></li>
            <li><a className='text-xs text-[14px] p-0 mr-2 capitalize' onClick={e => { scrollInto(e, '#contact') }} href="#">Get in Touch</a></li>
          </ul>
        </nav>
        <nav id="nav-menu-container-mobile" className={`sm:block hidden ${isMenuOpen ? 'show' : ''}`}>
          <CloseOutlined onClick={e => showMenu(!isMenuOpen)} className='float-right text-xl mr-5 mt-2' />
          <ul className="nav-menu flex flex-col h-full pt-10 pl-8">
            <li className='mb-5'><a className='text-xs text-white text-[14px] h-full p-0 mr-2 capitalize' onClick={e => { scrollInto(e, '#about-the-show') }} href="#">About Show</a></li>
            <li className='mb-5'><a className='text-xs text-white text-[14px] h-full p-0 mr-2 capitalize' onClick={e => { scrollInto(e, '#about-the-organiser') }} href="#">Organiser</a></li>
            <li className='mb-5'><a className='text-xs text-white text-[14px] h-full p-0 mr-2 capitalize' onClick={e => { scrollInto(e, '#why-exhibit') }} href="#">Why Exhibit</a></li>
            <li className='mb-5'><a className='text-xs text-white text-[14px] h-full p-0 mr-2 capitalize' onClick={e => { scrollInto(e, '#exhibitor-profile') }} href="#">Exhibitor Profile</a></li>
            <li className='mb-5'><a className='text-xs text-white text-[14px] h-full p-0 mr-2 capitalize' onClick={e => { scrollInto(e, '#about-the-venue') }} href="#">Venue</a></li>
            <li className='mb-5'><a className='text-xs text-white text-[14px] h-full p-0 mr-2 capitalize' onClick={e => { scrollInto(e, '#contact') }} href="#">Get in Touch</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}