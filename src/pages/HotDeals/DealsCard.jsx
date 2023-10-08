const DealsCard = ({ deal }) => {
    const { name, image, price, detailedDescription, includedServices } = deal;
    return (
        <div className="bg-[#ffe5ec] px-5 py-6 rounded-md shadow-md flex flex-col">
            <div className="flex justify-center">
                <img className="w-1/2" src={image} alt={name} />
            </div>
            <div className="space-y-3 flex-grow">
                <p className="text-2xl text-[#c9184a] font-semibold">{name}</p>
                <p className="font-medium rounded-md ">{detailedDescription}</p>
                <p className="text-[#c9184a] font-bold rounded-lg ">Price: {price}</p>

                <h1 className="font-semibold text-xl">Included Service</h1>
                <ul className="list-disc ml-6 font-medium  my-2 space-y-1">
                    {includedServices.map((service, idx) => (
                        <li key={idx}>{service}</li>
                    ))}
                </ul>
            </div>
            <div className="pt-4">
                <button className="py-2 bg-[#c9184a] font-medium text-white w-full rounded">
                    Start Booking
                </button>
            </div>
        </div>
    );
};

export default DealsCard;
