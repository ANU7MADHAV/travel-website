import Image from "next/image";
import lets from "@/public/lets.png";

const FourthSection = () => {
  return (
    <div className="my-[90px] flex h-[400px] w-auto items-center overflow-hidden bg-[url('/maps.jpg')] bg-cover bg-center py-4   ">
      <Image
        src={lets}
        alt="lets"
        className="ml-[80px] w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] "
      />
    </div>
  );
};

export default FourthSection;
