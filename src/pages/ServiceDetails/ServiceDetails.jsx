import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const service = services.find((card) => card.id === idInt);
    console.log(service.cardBackground);

    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="grid grid-cols-2 gap-10">
                <div className="rounded-xl">
                    <img className="rounded-md" src={service.image} alt={service.name} />
                </div>
                <div className="space-y-3">
                    <p className="text-3xl text-[#c9184a] font-semibold">{service.name}</p>
                    <p className="font-medium rounded-md max-w-fit">
                        {service.detailedDescription}
                    </p>
                    <p className="text-[#c9184a] font-bold rounded-lg ">Price: {service.price}</p>

                    <h1 className="font-medium text-xl">Included Service</h1>
                    <ul className="list-disc ml-6 font-medium  my-2 space-y-1">
                        {service.includedServices.map((service, idx) => (
                            <li key={idx}>{service}</li>
                        ))}
                    </ul>
                    <div className="pt-10">
                        <button className="py-2 bg-[#c9184a] font-medium text-white w-full rounded">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
