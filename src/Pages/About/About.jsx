/* eslint-disable react/no-unescaped-entities */


const About = () => {
    return (
        <div className=" max-w-screen-xl mx-auto px-4 relative">
            {/* <p className="absolute  left-0  text-center text-[#341010]  text-3xl md:text-6xl font-bold transparent opacity-20 rotate-0  " > ABOUT US</p> */}
            <h2 className="text-center my-12  text-2xl md:text-5xl font-bold">WHY WE ARE <span className="text-red-500">BEST?</span></h2>

            <div className="flex items-center flex-col-reverse md:flex-row ">
                <div className="md:w-3/5 px-4 ">
                    <div>
                        <h3 className="text-xl font-semibold">  1. About Task Manegement</h3>
                        <p>Welcome to Task Manegement, your ultimate destination for everything related to phones! At Task Manegement, we are passionate about bringing you the latest and most comprehensive information about a wide range of mobile devices.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">  2. Our Mission</h3>
                        <p>Our mission at Task Manegement is to provide users with a one-stop platform where they can explore, compare, and discover the perfect phone that suits their needs. We understand that choosing a phone is a significant decision, and our goal is to simplify this process by offering detailed information and insights.</p>
                    </div>
                    <div className="mb-3">
                        <h3 className="text-xl font-semibold ">  3. Our Commitment</h3>
                        <p>At Task Manegement, we are committed to delivering a user-friendly experience. We value transparency, accuracy, and user satisfaction. Our team works tirelessly to ensure that the information on our website is up-to-date and reliable.</p>
                    </div>
                </div>
                <div className="relative px-4 md:w-2/5">
                    <img className="  rounded-t-box pt-5 " src="https://i.postimg.cc/TPcTYMD1/banner-1.png" alt="" />


                </div>
            </div>


        </div>
    );
};

export default About;