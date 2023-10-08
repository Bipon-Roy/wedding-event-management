import { Link } from "react-router-dom";

const ServiceCard = ({ cards }) => {
    const { id, name, image, price, shortDescription } = cards;

    return (
        <div className="shadow-2xl rounded-xl bg-white">
            <figure className="relative">
                <img
                    src={image}
                    className="h-[260px] md:h-[300px] lg:h-[220px] w-full rounded-t-xl transition-all"
                    alt="Card Thumbnail"
                />
                <p className="absolute px-2 py-1 bg-[#c9184a] text-white font-medium rounded-lg bottom-3 right-3">
                    Price: {price}
                </p>
            </figure>
            <div className="card-body p-5 h-[170px]">
                <p className="text-lg font-bold">{name}</p>
                <p className="font-semibold rounded-md max-w-fit">{shortDescription}</p>

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

export default ServiceCard;
