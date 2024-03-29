import FooterSection1 from "./FooterSection1";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <div className="flex  w-full flex-col items-center justify-around gap-y-5 bg-slate-200 py-8 md:flex-row md:px-8 lg:px-4 xl:px-14 ">
      <FooterSection1 />
      <FooterContact />
    </div>
  );
};
export default Footer;
