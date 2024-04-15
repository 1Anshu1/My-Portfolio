import { experiences } from "../../data/constants.js";
import Layout from "../layout/Layout";
const Experience = () => {
    return (
        <div className="text-white my-20">
            <Layout>
                <div id="experience" className="text-5xl font-bold py-4">
                    Experience
                </div>
                <div className="flex flex-col md:flex-row flex-wrap justify-start gap-8">
                    {experiences.map((item) => (
                        <div
                            key={item.id}
                            className="basis-[45%] border-2 border-[#00ffff] py-4 px-8 rounded-lg"
                            style={{ boxShadow: "-2px 1px 36px 15px rgba(18, 230, 181, 0.27)" }}
                        >
                            <div className=" my-4 text-lg ">
                                Role:{" "}
                                <span className="text-[#00ffff]">
                                    {item.role} ({item.date})
                                </span>
                            </div>
                            <div className=" my-4 text-lg ">
                                Company: <span className="text-[#00ffff]">{item.company}</span>
                            </div>
                            <ul className="list-disc my-5 opacity-70">
                                {item.desc.map((descr, idx) => (
                                    <li key={idx} className="text-sm mb-2">
                                        {descr}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill) => (
                                    <h1
                                        key={skill}
                                        className="text-md font-bold bg-gradient-to-r from-cyan-500 to-green-500 text-transparent bg-clip-text border-2 border-cyan-500 px-2 rounded-md"
                                    >
                                        {skill}
                                    </h1>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
    );
};
export default Experience;
