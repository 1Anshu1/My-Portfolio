import Layout from "../layout/Layout";
import "./style.css";
import { projects } from "../../data/constants.js";

const Project = () => {
    return (
        <div className="my-20 text-white">
            <Layout>
                <div id="project" className="text-5xl font-bold my-4">
                    Project
                </div>
                {projects.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col md:flex-row justify-between items-center gap-5 rounded-lg border-2 border-[#00ffff] my-4 py-2 px-4 text-white transition-all ease-in duration-500 hover:bg-[#00ffff] hover:text-black "
                    >
                        <div className="basis-[50%]">
                            <div className="font-bold text-4xl mb-5">{item.title}</div>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag) => (
                                    <span key={tag} className="tags">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="project-desc">{item.description}</div>
                            <div className="project-links my-4">
                                <span className="font-bold py-2 px-4 rounded-lg border-2 border-white mx-3">
                                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                                        View Code
                                    </a>
                                </span>
                                <span className="font-bold py-2 px-4 rounded-lg border-2 border-white mx-3">
                                    <a href={item.livelink} target="_blank" rel="noopener noreferrer">
                                        Visit Live App
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="basis-[40%] ">
                            {/* <div className="project-img">
                                <iframe
                                    src=""
                                    title=""
                                    allowFullScreen
                                    className="aspect-video w-full h-full"
                                ></iframe>
                            </div> */}
                        </div>
                    </div>
                ))}
            </Layout>
        </div>
    );
};

export default Project;
