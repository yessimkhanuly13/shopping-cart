import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import './styles/contact.css'


function Contact() {
  return (
    <div className='Contact'>
      <div className='link'>
        <a href="https://github.com/yessimkhanuly13"><FaGithub/></a>
        <a href="https://github.com/yessimkhanuly13"><FaLinkedin/></a>
        <a href="https://github.com/yessimkhanuly13"><FaYoutube/></a>
        <a href="https://github.com/yessimkhanuly13"><FaTwitter/></a>
      </div>
    </div>
  )
}

export default Contact
