import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Socials = [
    { icon: <FaGithub />, path: "https://github.com/Baluthegoat"},
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/tashi-penjor-76a3ab296/"},
    { icon: <FaTwitter />, path: "https://x.com/TPenjor55285"},
];

const Social = ({ containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {Socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;