"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "About Me",
    path: "/About",
  },
  {
    name: "Projects",
    path: "/Projects",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-green-500" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div>logo</div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
