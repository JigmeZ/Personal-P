"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center"></SheetTrigger>
      <SheetContent className="flex flex-col">
        <div>logo</div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
