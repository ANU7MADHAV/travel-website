import FooterSection1 from "./FooterSection1";
import Desitination from "./Desitination";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <div className="mt-[30px] flex w-full flex-col items-center justify-around gap-y-5 bg-slate-200 py-8 md:flex-row lg:px-4 xl:px-14 ">
      {" "}
      {/* Adjust alignment and spacing */}
      <FooterSection1 />
      <Desitination />
      <FooterContact />
    </div>
  );
};

export default Footer;
