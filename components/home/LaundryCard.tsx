import Image from "next/image";
import { FC } from "react";

type LaundryCardProps = {
  name: string;
  imageSrc: string;
  rating: number;
};

const LaundryCard: FC<LaundryCardProps> = ({ name, imageSrc, rating }) => {
  const maxStars = 5;

  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl text-center flex flex-col items-center space-y-4">
      {/* Circle Image */}
      <div className="w-[200px] h-[200px] sm:w-[273px] sm:h-[280px] rounded-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={`Image of ${name}`}
          width={273}
          height={280}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Title */}
      <h3 className="font-medium text-lg">{name}</h3>

      {/* Rating */}
      <div className="flex justify-center text-xl text-black">
        {Array.from({ length: maxStars }).map((_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>

      {/* Button */}
      <button
        className="w-full bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition cursor-pointer"
        aria-label={`Visit ${name}`}
      >
        Visit shop
      </button>
    </div>
  );
};

export default LaundryCard;
