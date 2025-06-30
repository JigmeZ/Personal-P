import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Socials = [
    { icon: <FaGithub />, path: "https://github.com/JigmeZ"},
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/jigme-chogyal/"},
    { icon: <FaTwitter />, path: "https://x.com/Itsyoboi_Jigme"},
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