const About = () => {
    return (
        <div className="max-w-7xl mx-auto mt-3">
            <h1 className="text-center font-semibold text-4xl">
                About <span className="text-[#c9184a]">Us</span>
            </h1>
            <div className="h-[5px] w-20 mt-2 bg-[#c9184a] rounded flex justify-center mx-auto"></div>
            <div className="grid md:grid-cols-2 gap-6 mt-8 mb-10 mx-5">
                <div
                    className="border-4 lg:border-8 border-[#c9184a] lg:h-[590px] rounded lg:rounded-xl"
                    data-aos="fade-right"
                >
                    <img
                        src="https://i.ibb.co/hRYpXYZ/about.jpg"
                        className="h-full w-full lg:rounded"
                        alt="Team Members Photo"
                    />
                </div>
                <div className="text-black space-y-4" data-aos="fade-up">
                    <h1 className="text-2xl font-bold text-[#c9184a] text-center">
                        Our Commitment to Service Quality
                    </h1>
                    <p className="font-medium">
                        We understand that your wedding day is a momentous occasion, filled with
                        dreams, emotions, and expectations. That&apos;s why we take immense pride in
                        delivering service quality that goes above and beyond. With years of
                        experience in crafting unforgettable weddings, our team of passionate
                        professionals is committed to turning your dream wedding into a reality.
                    </p>
                    <p className="text-[#c9184a] text-xl font-bold text-center">
                        What Sets Us Apart
                    </p>
                    <div className="space-y-4">
                        <p>
                            <span className="text-[#c9184a] font-bold mr-1">
                                Personalized Attention:
                            </span>
                            Your vision is unique, and we treat it as such. Our dedicated wedding
                            planners work closely with you to ensure every detail is tailored to
                            your preferences.
                        </p>
                        <p>
                            <span className="text-[#c9184a] font-bold mr-1">
                                Attention to Detail:
                            </span>
                            We leave no stone unturned. From venue selection to flower arrangements,
                            we ensure flawless execution.
                        </p>
                        <p>
                            <span className="text-[#c9184a] font-bold mr-1">Professionalism:</span>
                            Our skilled team exudes professionalism and grace, guaranteeing a
                            seamless event.
                        </p>
                        <p>
                            <span className="text-[#c9184a] font-bold mr-1">Creativity:</span>
                            Whether it&apos;s a traditional ceremony or a unique theme, our creative
                            approach brings your vision to life.
                        </p>
                        <p>
                            <span className="text-[#c9184a] font-bold mr-1">Flexibility:</span>
                            We adapt to evolving plans, ensuring your wedding day unfolds as you
                            envision it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
