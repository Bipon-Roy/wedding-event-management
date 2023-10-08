import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageData } from "../../utility/localStorage";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
    const wishListData = useLoaderData();

    const [wishlistAdded, setWishlistAdded] = useState([]);

    useEffect(() => {
        const storedWishlistIds = getStorageData();

        if (wishListData.length > 0) {
            const wishlistAdded = [];
            for (const id of storedWishlistIds) {
                const wishlist = wishListData.find((wishlist) => wishlist.id === id);

                if (wishlist) {
                    wishlistAdded.push(wishlist);
                }
            }
            setWishlistAdded(wishlistAdded);
        }
    }, [wishListData]);

    const isFalse = wishlistAdded.length === 0;

    return (
        <div>
            {isFalse ? (
                <div className="flex justify-center items-center h-[60vh]">
                    <p className="text-2xl mx-3 md:mx-0 md:text-4xl font-bold text-center">
                        No Wishlist History Found!!!
                    </p>
                </div>
            ) : (
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-10 mb-6 md:mb-14 mx-5 lg:mx-0">
                        {wishlistAdded.map((wishlist) => (
                            <WishlistCard key={wishlist.id} wishlist={wishlist}></WishlistCard>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
export default Wishlist;
