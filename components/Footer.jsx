import React from 'react'
import { FaLocationDot, BsFacebook, FaTiktok, BsInstagram } from "react-icons/fi";
import Link from 'next/link';

const Footer = () => {
  return (
      <footer className= 'flex justify-between px-40 py-30 bg-[#FFEBCD] bottom-0'>
        <div><h3>Get In Touch</h3>
              <div>
               
                  <p> Bon Accord AB11 6UA</p>
                  <p> +44 7753662690</p>
                  <p> hannahsguesthouse@gmail.com </p>
              </div>
        </div>

          <div className ='align-content: center;'>
             <h3>Quick Links</h3>
            <Link href = '/'> 
                <h3>Home</h3>
            </Link>

            <Link href = 'rooms'>
                <h3>Room</h3>
            </Link>

            <Link href = 'about'>
                <h3>About</h3>
            </Link>

            <Link href = 'contact'>
                <h3>Contact</h3>
            </Link>

        </div>

        <div>
            <h3>Our Social Media</h3>

              
        </div>

        
    </footer>
  )
}

export default Footer