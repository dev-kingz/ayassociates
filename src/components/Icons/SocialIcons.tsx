import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div className="flex items-center gap-4">
            <Link href="/" className="hover:cursor-pointer" target="_blank">
                <FaFacebookF className="h-5 w-5" />
            </Link>
            <Link href="/" className="hover:cursor-pointer" target="_blank">
                <FaInstagram className="h-5 w-5" />
            </Link>
            <Link href="/" className="hover:cursor-pointer" target="_blank">
                <FaYoutube className="h-5 w-5" />
            </Link>
            <Link href="/" className="hover:cursor-pointer" target="_blank">
                <FaLinkedin className="h-5 w-5" />
            </Link>
        </div>

    );
}

export default SocialIcons;