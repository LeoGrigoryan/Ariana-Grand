    import React, { useState } from 'react';
    import './Header.css';
    import { Link } from 'react-router-dom';
    import { FaInstagram, FaFacebookF, FaSpotify, FaYoutube, FaTiktok, FaBars, FaMagnifyingGlass } from 'react-icons/fa6';
    import { objof } from '../Pack/Pack';
    import { Context } from '../../../App';
    import { useContext } from 'react';

    export default function Header() {

        const mail = useContext(Context);

        const change = (e) => {
            mail.setVal(e.target.value);
        }

        return (
            <header className='storh dirrow sb'>
                <div className="searchbox center">
                    <FaMagnifyingGlass />
                    <input type="text" placeholder='search' value={mail.val} onChange={(e) => change(e)} />
                </div>
                <div className="logo center ">
                    <Link to='/' >
                        <img src="https://www.arianagrande.com/files/2024/01/logo.png" />
                    </Link>
                </div>
                <div className="links dirrow se">
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
                <button>
                    <FaBars />
                </button>
            </header>
        )
    }
