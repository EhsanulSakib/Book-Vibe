const About = () => {
    return (
        <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center my-2 md:my-4">About Us</h2>

            <p className="text-sm md:text-lg lg:text-xl text-justify">Welcome to Book Vibe, your ultimate destination for all things books! At Book Vibe, we're passionate about literature and believe in the transformative power of reading. Whether you're a seasoned bookworm or just beginning your literary journey, we're here to inspire and guide you every step of the way.</p>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center my-2 md:my-4">Our Mission</h2>
            <p className="text-sm md:text-lg lg:text-xl text-justify">At Book Vibe, our mission is simple: to connect readers with the stories that resonate with them. We believe that every book has its own unique vibe, and we're dedicated to helping you find the perfect match for your reading preferences. From bestsellers to hidden gems, we curate a diverse selection of titles to cater to every taste and interest.</p>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center my-2 md:my-4">Founders</h2>
            <div className="my-4 md:my-8 lg:my-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="">
                    <img src="https://cdn.create.vista.com/api/media/medium/344433374/stock-photo-handsome-professional-businessman-suit-posing-modern-office?token=" alt="" className=" h-96 m-auto rounded-lg shadow-lg"/>
                    <h2 className="mt-2 md:mt-4 text-xl md:text-3xl font-semibold text-center">Peter Holland</h2>
                </div>

                <div>
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/168/949/desktop-wallpaper-10-businessman-professional-man.jpg" alt="" className="  h-96 m-auto rounded-lg shadow-lg"/>
                    <h2 className="mt-2 md:mt-4 text-xl md:text-3xl font-semibold text-center">Russow Raily</h2>
                </div>

                <div>
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/870/737/desktop-wallpaper-business-suit-men-business-thumbnail.jpg" alt="" className=" h-96 m-auto rounded-lg shadow-lg"/>
                    <h2 className="mt-2 md:mt-4 text-xl md:text-3xl font-semibold text-center">Sam Karrain</h2>
                </div>

                <img src="" alt="" />
            </div>
        </div>
    );
};

export default About;