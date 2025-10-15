import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import LaundryCard from "./LaundryCard";


const shops = [
    { name: "Laundry Shop name", imageSrc: "https://i.ibb.co.com/MkgvQcMz/cloth.png", rating: 3 },
    { name: "Laundry Shop name", imageSrc: "https://i.ibb.co.com/MkgvQcMz/cloth.png", rating: 4 },
    { name: "Laundry Shop name", imageSrc: "https://i.ibb.co.com/MkgvQcMz/cloth.png", rating: 3 },
    { name: "Laundry Shop name", imageSrc: "https://i.ibb.co.com/MkgvQcMz/cloth.png", rating: 3 },
    { name: "Laundry Shop name", imageSrc: "https://i.ibb.co.com/MkgvQcMz/cloth.png", rating: 4 },
    { name: "Laundry Shop name", imageSrc: "https://i.ibb.co.com/MkgvQcMz/cloth.png", rating: 3 },
];

const NearestLaundry = () => {
    return (
        <>
            <div className="bg-gray-100 py-14">
                <SectionTitle title="Nearest Laundry" />
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