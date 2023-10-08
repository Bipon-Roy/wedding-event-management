import { Link } from "react-router-dom";

const WishlistCard = ({ wishlist }) => {
    const { id, name, price, shortDescription, cardBackground, serviceImage, image } = wishlist;

    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <img src={image} className="rounded-lg" alt="Card Thumbnail" />
            </div>
            <div className="space-y-3 lg:mx-0 flex flex-col">
                <p className="text-2xl font-bold">{name}</p>
                <p className=" text-[#c9184a] font-bold rounded-lg text-lg">Price: {price}</p>
                <p className="font-semibold rounded-md max-w-fit text-lg">{shortDescription}</p>

                <Link
                    to={`/serviceDetails/${id}`}
                    className="w-full bg-[#c9184a] text-white text-center py-1 rounded-md mb-1"
                >
                    Show Details
                </Link>
            </div>
        </div>
    );
};

export default WishlistCard;
