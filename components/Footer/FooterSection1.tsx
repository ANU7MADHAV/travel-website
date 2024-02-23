import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import logo from "@/public/logo.png";
import Image from "next/image";

const FooterSection1 = () => {
  return (
    <div className="flex w-[200px]  flex-col items-center justify-center">
      <Image src={logo} alt="logo" className="mb-4 w-20" />
      <h3>Travel helps companies </h3>
      <h3>manage payments easily.</h3>
      <section className="flex gap-4 py-1  text-[#DF6951]">
        <FaTiktok />
        <FaInstagram />
      </section>
    </div>
  );
};

export default FooterSection1;
