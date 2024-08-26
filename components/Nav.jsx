"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Me",
    path: "/About",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="w-full flex justify-center bg-black p-4 shadow-lg">
      <nav className="flex gap-7 rounded-lg">
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname &&
                "text-green-500 border-b-2 boarder-green-500"
              } capitalize font-medium hover:text-green-500 transition-all`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Nav;
