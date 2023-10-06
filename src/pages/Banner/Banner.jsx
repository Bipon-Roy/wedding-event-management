const Banner = () => {
    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(rgba(13, 14, 14, 0.5), rgba(0, 0, 0, 0.7)),url(https://i.ibb.co/J22yKj9/just-married-couple-with-their-car-min.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-7xl mx-auto min-h-[90vh] flex items-center">
                <div className="w-[400px] bg-white p-6 rounded-md space-y-3 mx-8 mt-72 md:mt-64 lg:m-0">
                    <h1 className="font-semibold text-2xl md:text-4xl">
                        Celebrate Love, Plan with Us
                    </h1>
                    <p className="text-gray-600 md:text-xl">
                        From the initial concept to the final dance, we are here to bring your
                        wedding vision to life. Trust us to make your day unforgettable.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
