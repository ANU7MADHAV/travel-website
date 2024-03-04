import Image from "next/image";
import { SheetDemo } from "../navbar/MobileNavbar";
import Navbar from "../navbar/Navbar";
import logo from "@/public/logo.png";
import Link from "next/link";

const FirstSectionAbout = () => {
  return (
    <div className="h-screen w-auto bg-[url('/about.png')] bg-cover bg-center py-2 md:p-4">
      <div className="flex items-center justify-between px-4">
        <Image
          src={logo}
          alt="logo"
          className="w-[60px] overflow-hidden rounded-full bg-white md:w-[80px] lg:w-[100px]"
        />
        <section className="flex items-center gap-12 text-white">
          <section className="hidden md:block">
            <Navbar />
          </section>
          <Link href="/contact">
            <button className="rounded-xl bg-[#DF6951] px-2 py-1 text-sm  md:text-base">
              Contact Us
            </button>
          </Link>

          <section className="block md:hidden">
            <SheetDemo />
          </section>
        </section>
      </div>
      <section className="flex h-full items-center justify-center">
        <h1 className="font-serif text-4xl font-semibold text-white">
          About Us
        </h1>
      </section>
    </div>
  );
};

export default FirstSectionAbout;
