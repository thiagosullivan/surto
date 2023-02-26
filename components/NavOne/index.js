import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavigationOneContainer } from './style';

function NavigationOne() {
  return (
    <NavigationOneContainer>
        <button className='navOne__btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="26" viewBox="0 0 66 26" fill="none">
                <rect width="66" height="8" fill="#2E2F33"/>
                <rect x="31" y="18" width="35" height="8" fill="#2E2F33"/>
            </svg>
        </button>
        <ul>
            <li><Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link></li>
            <li><Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link></li>
            <li><Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link></li>
        </ul>
    </NavigationOneContainer>
  )
}

export default NavigationOne