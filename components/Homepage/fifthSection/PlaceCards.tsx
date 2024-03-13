import stars from "@/public/stars.png";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

type Props = {
  image: any;
  country: string;
  description: string;
};

const PlaceCards = ({ image, country, description }: Props) => {
  return (
    <div className="md mt-8 w-[300px] space-y-1 text-left lg:w-[300px] xl:w-[400px]">
      <Image
        src={image}
        alt="swiss"
        className="overflow-hidden  rounded-md bg-center lg:h-[400px]"
      />
      <section className="flex justify-between">
        <Image src={stars} alt="stars" />
      </section>
      <section>
        <h1 className="flex items-center">
          {" "}
          <span>
            <IoLocationOutline />
          </span>
          {country}
        </h1>
      </section>
      <section>
        <p className=" lg:line-clamp-4">{description}</p>
      </section>
      <section>
        <button className="rounded-lg bg-[#DF6951] px-2 py-1 text-white">
          Explore Now
        </button>
      </section>
  
    </div>
  );
};

export default PlaceCards;
