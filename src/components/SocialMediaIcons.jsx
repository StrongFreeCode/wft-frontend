import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiTwitter, SiWhatsapp } from 'react-icons/si';

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com" aria-label="Icon para abri red social facebook" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600">
                <FaFacebook className="w-6 h-6" />
            </a>
            {/*   <a href="https://www.twitter.com" aria-label="Icon para abri red social twitter" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400">
                <SiTwitter className="w-6 h-6" />
            </a> */}
            <a href="https://www.instagram.com" aria-label="Icon para abri red social instagram" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-600">
                <FaInstagram className="w-6 h-6" />
            </a>
            {/*  <a href="https://www.linkedin.com" aria-label="Icon para abri red social linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-700">
                <FaLinkedinIn className="w-6 h-6" />
            </a> */}
            <a href="https://wa.me/5355244394" aria-label="Icon para abri red social Whatsapp" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-600">
                <SiWhatsapp className="w-6 h-6" />
            </a>
        </div>
    );
};

export default SocialMediaIcons;