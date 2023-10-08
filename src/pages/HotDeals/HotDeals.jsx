import { useEffect, useState } from "react";
import DealsCard from "./DealsCard";

const HotDeals = () => {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        fetch("/deals.json")
            .then((res) => res.json())
            .then((data) => setDeals(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="py-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-6 md:mx-8 lg:mx-0 my-6">
                    {deals.map((deal) => (
                        <DealsCard key={deal.id} deal={deal}></DealsCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HotDeals;
