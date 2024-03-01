import Image from "next/image";

type Props = {
  image: any;
  place: string;
  days?: string;
  price: string;
};

const ExploreCards = ({ place, image, days, price }: Props) => {
  return (
    <div className="my-4 justify-center">
      <div className="grid shadow  lg:w-[300px] xl:w-[400px]">
        <Image
          src={image}
          alt="dubai"
          className="h-[200px] overflow-hidden rounded-xl bg-contain p-2"
        />
        <section className="p-2 px-4">
          <h1 className="text-xl font-semibold">{place}</h1>
          <h1 className="text-lg font-medium">{days}</h1>
          <p className="text-base text-gray-600">{price}</p>
        </section>
      </div>
    </div>
  );
};

export default ExploreCards;
