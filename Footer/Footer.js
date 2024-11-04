import React from 'react';
import { FaInstagram, FaFacebookF, FaSpotify, FaYoutube, FaTiktok, FaBars } from 'react-icons/fa6';
import './Footer.css'

export default function Footer() {
    return (
        <footer className='bg000 dircol'>
            <div className="links dirrow center">
                <li className='center'><a href="#">
                    <FaInstagram />
                </a></li>
                <li className='center'><a href="#">
                    <FaFacebookF />
                </a></li>
                <li className='center'><a href="#">
                    <FaSpotify />
                </a></li>
                <li className='center'><a href="#">
                    <FaYoutube />
                </a></li>
                <li className='center'><a href="#">
                    <FaTiktok />
                </a></li>
            </div>
            <div className="t center less">© republic records terms / privacy / cookie choices</div>
            <div className="t center very">if you are using a screen reader and are having problems using this website, please call 866-682-4413 for assistance.</div>
        </footer>
    )
}
