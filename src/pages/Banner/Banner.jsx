const Banner = () => {
    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(rgb(201, 24, 74,0.4), rgba(0, 0, 0, 1)),url(https://i.ibb.co/qMCsR09/hero.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-7xl mx-auto min-h-[90vh] flex items-center justify-center">
                <div className="text-center space-y-4 w-3/4 text-white">
                    <h1 className="font-bold text-2xl md:text-5xl">
                        Celebrate Love, <span className="text-[#C9184A]">Plan with Us</span>
                    </h1>
                    <p className=" font-semibold md:text-xl">
                        From the initial concept to the final dance, we are here to bring your
                        wedding vision to life. Trust us to make your day unforgettable.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
