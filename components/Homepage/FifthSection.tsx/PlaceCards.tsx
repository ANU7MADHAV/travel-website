import stars from "@/public/stars.png";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

type Props = {
  image: any;
  days: string;
  place: string;
  country: string;
  price: string;
  pastPrice: string;
  description: string;
};

const PlaceCards = ({
  image,
  days,
  place,
  country,
  price,
  pastPrice,
  description,
}: Props) => {
  return (
    <div className="md mt-8 w-[300px] space-y-1 text-left md:w-[400px] lg:w-[300px]">
      <Image src={image} alt="swiss" />
      <section>
        <p className="flex items-center">
          <span className="px-1">
            <CiCalendarDate />{" "}
          </span>
          {days} days
        </p>
      </section>
      <section className="flex justify-between">
        <h1>{place}</h1>
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
        <h1 className="text-[#DF6951]">
          {price} <span className="text-gray-500">{pastPrice}</span>
        </h1>
      </section>
      <section>
        <p>{description}</p>
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
