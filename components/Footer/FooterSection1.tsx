import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const FooterSection1 = () => {
  return (
    <div className="flex w-[200px] flex-col items-center  justify-center text-left lg:-mt-[170px]">
      <Image src={logo} alt="logo" className="mb-4 w-20" />
      <h3>Travel helps companies </h3>
      <h3>manage payments easily.</h3>
      <section className="flex gap-4 py-1  text-[#DF6951]">
        <Link href="https://vm.tiktok.com/ZSFYjxCjE/">
          <FaTiktok />
        </Link>
        <Link href="https://www.instagram.com/invites/contact/?i=8m790p0qccwe&utm_content=nr9ww6a">
          <FaInstagram />
        </Link>
      </section>
    </div>
  );
};

export default FooterSection1;
