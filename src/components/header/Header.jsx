import "./style.css";
import Layout from "../layout/Layout";

const Header = () => {
    return (
        <div className="bg-[#0c0c22] text-white  fixed w-[100%] top-0 z-10 navbar p-2">
            <Layout>
                <div className="flex justify-between items-center py-2 px-4">
                    <div className="text-[#00ffff] font-bold text-2xl">Anshu Kumar</div>
                    <ul className="flex gap-4 cursor-pointer list-none">
                        <li className="hover:text-[#00ffff]">
                            <a href="#about" className="text">
                                About
                            </a>
                        </li>
                        <li className="hover:text-[#00ffff]">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="hover:text-[#00ffff]">
                            <a href="#experience">Experience</a>
                        </li>
                        <li className="hover:text-[#00ffff]">
                            <a href="#project">Project</a>
                        </li>
                    </ul>
                    <div className="">
                        <a href="https://github.com/1Anshu1" className="nav-btn" target="_blank" rel="noreferrer">
                            Github
                        </a>
                        <a
                            href="https://www.linkedin.com/in/anshukumar1/"
                            className="nav-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Linkedin
                        </a>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Header;
