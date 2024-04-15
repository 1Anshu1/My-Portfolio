import Typewriter from "typewriter-effect";
import Layout from "../layout/Layout";
import anshu from "../../assets/anshu.jpeg";

const HeroBanner = () => {
    return (
        <div className="">
            <Layout>
                <div id="about" className="flex flex-col-reverse md:flex-row items-center text-white py-32">
                    <div className="basis-[50%] text-bold text-4xl">
                        Hi, I am
                        <br />
                        Anshu Kumar
                        <br />
                        <span className="text-[#00ffff] font-extrabold">
                            <Typewriter
                                className="typewriter"
                                options={{
                                    strings: ["I am a FullStack Developer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                        <p className="text-[16px] text-[#808080] font-semibold mt-4">
                            As a proficient Full Stack Developer specializing in the MERN (MongoDB, Express.js,
                            React.js, Node.js) stack, I bring a wealth of expertise to every project. With a keen eye
                            for detail and a passion for crafting seamless user experiences, I thrive on transforming
                            ideas into reality. My dedication to staying abreast of industry trends and my commitment to
                            continual learning ensures that I deliver cutting-edge solutions. Whether it's architecting
                            robust backend systems or designing intuitive frontend interfaces, I approach each task with
                            enthusiasm and a drive for excellence. Let's collaborate to turn your vision into a digital
                            masterpiece.
                        </p>
                    </div>
                    <div className="m-auto">
                        <div className="border-2 border-[#00ffff] max-w-[400px] max-h-[300px] rounded-full overflow-hidden">
                            <img src={anshu} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default HeroBanner;
