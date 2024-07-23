import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <Link href="https://www.facebook.com/profile.php?id=100056240132679" className="hover:cursor-pointer" target="_blank">
                <FaFacebookF className="h-4 w-4" />
            </Link>
            <Link href="https://www.instagram.com/rktandoor/" className="hover:cursor-pointer" target="_blank">
                <FaInstagram className="h-4 w-4" />
            </Link>
            <Link href="https://www.youtube.com/@RK_TANDOOR" className="hover:cursor-pointer" target="_blank">
                <FaYoutube className="h-4 w-4" />
            </Link>
        </div>
    );
}

export default SocialIcons;