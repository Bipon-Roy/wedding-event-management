import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="py-8 max-w-7xl mx-auto">
            <h1 className="text-center font-semibold text-4xl">Our Services</h1>
            <div className="h-[5px] w-24 mt-2 bg-[#c9184a] rounded flex justify-center mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-6 md:mx-8 lg:mx-0 my-12">
                {services.map((cards) => (
                    <ServiceCard key={cards.id} cards={cards}></ServiceCard>
                ))}
            </div>
        </div>
    );
};

export default Service;
