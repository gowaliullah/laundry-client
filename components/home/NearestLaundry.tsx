import SectionTitle from "../common/SectionTitle";
import LaundryCard from "./LaundryCard";


const shops = [
  { name: "Laundry Shop name", imageSrc: "/assets/laundry.jpg", rating: 3 },
  { name: "Laundry Shop name", imageSrc: "/assets/laundry.jpg", rating: 4 },
  { name: "Laundry Shop name", imageSrc: "/assets/laundry.jpg", rating: 3 },
  { name: "Laundry Shop name", imageSrc: "/assets/laundry.jpg", rating: 3 },
  { name: "Laundry Shop name", imageSrc: "/assets/laundry.jpg", rating: 4 },
  { name: "Laundry Shop name", imageSrc: "/assets/laundry.jpg", rating: 3 },
];

const NearestLaundry = () => {
  return (
    <>
      <div className="bg-neutral-300">
            <SectionTitle title="Nearest Laundry"/>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shops.map((shop, index) => (
          <LaundryCard key={index} {...shop} />
        ))}
      </div>
      </div>
    </>
  );
};

export default NearestLaundry;