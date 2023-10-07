import { Link } from "react-router-dom";

const ServiceCard = ({ cards }) => {
    const { name, serviceImage, price, shortDescription, cardBackground } = cards;

    const bgColor = {
        backgroundColor: cardBackground,
    };

    return (
        <div className="">
            <div className="shadow-xl rounded-xl">
                <figure className="relative">
                    <img
                        src={serviceImage}
                        className="h-[260px] md:h-[300px] lg:h-[220px] w-full rounded-t-xl transition-all"
                        alt="Card Thumbnail"
                    />
                    <p className="absolute px-3 py-2 bg-[#e441b6] text-white font-medium rounded-lg bottom-3 right-3">
                        Price: {price}
                    </p>
                </figure>
                <div className="card-body p-5 h-[170px]">
                    <p className="text-lg font-bold">{name}</p>
                    <p className="font-semibold rounded-md max-w-fit">{shortDescription}</p>

                    <Link className="w-full bg-[#631a86] text-white text-center py-1 rounded-md mb-1">
                        Show Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
