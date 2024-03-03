import Image from "next/image";
import travel from "@/public/travelimage.jpeg";

const ThirdSection = () => {
  return (
    <div className="my-8">
      <Image
        src={travel}
        alt="travel"
        className="h-300px bg-contain bg-center"
      />
      <section className="my-4 px-4 text-left">
        <h1 className="text-2xl text-[#DF6951]">
          First Guide Travel: Your Gateway to Exceptional Travel Experiences
        </h1>
        <p className="my-4 font-serif">
          Long standing travel industry experience, firsthand knowledge of
          offered destinations, direct partnerships withmultiple carriers and
          strict provider selection criteria enables First Guide Travel to offer
          its customers unique and exceptional travelproducts at lowest possible
          rates. In addition to that, thecompany is proud of offering
          exceptional customer service and acare. Our professional staff will
          take care of each detail andaspect of your trip, ensuring that your
          travel experience isenjoyable and hassle free.
        </p>
      </section>
      <section className="my-4 px-4 text-left">
        <h1 className="text-2xl text-[#DF6951]">
          Customer-Centric Safety and Comfort
        </h1>
        <p className="my-4 font-serif">
          We trust in providing a personal and professional touch beyond just
          making it a contract execution. We stick to safety and assure to
          provide safe and comfortable services to our valuable customers. We
          feel happy to serve our customers
        </p>
      </section>
    </div>
  );
};

export default ThirdSection;
