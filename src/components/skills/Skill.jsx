import Layout from "../layout/Layout";

import { skills } from "../../data/constants";

const Skill = () => {
    return (
        <div id="skills" className="text-white">
            <Layout>
                <div className="text-5xl font-bold py-4">Skills & Tools</div>
                <div className="flex flex-col md:flex-row flex-wrap justify-start gap-8">
                    <div
                        className="basis-[45%] border-2 border-[#00ffff] py-4 px-8 rounded-lg"
                        style={{ boxShadow: "-2px 1px 36px 15px rgba(18, 230, 181, 0.27)" }}
                    >
                        <div className="text-center my-4 text-3xl">Frontend</div>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {skills[0].skills.map((item, id) => (
                                <div
                                    key={id}
                                    className="flex items-center gap-2 border-2 border-[#808080] py-2 px-3 rounded-lg bg-white text-black"
                                >
                                    <img src={item.image} alt="" className="w-12 h-12" />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="basis-[45%] border-2 border-[#00ffff] py-4 px-8 rounded-lg"
                        style={{ boxShadow: "-2px 1px 36px 15px rgba(18, 230, 181, 0.27)" }}
                    >
                        <div className="text-center my-4 text-3xl">Backend</div>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {skills[1].skills.map((item, id) => (
                                <div
                                    key={id}
                                    className="flex items-center gap-2 border-2 border-[#808080] py-2 px-3 rounded-lg bg-white text-black"
                                >
                                    <img src={item.image} alt="" className="w-12 h-12" />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="basis-[45%] border-2 border-[#00ffff] py-4 px-8 rounded-lg"
                        style={{ boxShadow: "-2px 1px 36px 15px rgba(18, 230, 181, 0.27)" }}
                    >
                        <div className="text-center my-4 text-3xl">Others</div>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {skills[2].skills.map((item, id) => (
                                <div
                                    key={id}
                                    className="flex items-center gap-2 border-2 border-[#808080] py-2 px-3 rounded-lg bg-white text-black"
                                >
                                    <img src={item.image} alt="" className="w-12 h-12" />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="basis-[45%] border-2 border-[#00ffff] py-4 px-8 rounded-lg"
                        style={{ boxShadow: "-2px 1px 36px 15px rgba(18, 230, 181, 0.27)" }}
                    >
                        <div className="text-center my-4 text-3xl">Familiar</div>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {skills[3].skills.map((item, id) => (
                                <div
                                    key={id}
                                    className="flex items-center gap-2 border-2 border-[#808080] py-2 px-3 rounded-lg bg-white text-black"
                                >
                                    <img src={item.image} alt="" className="w-12 h-12" />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Skill;
