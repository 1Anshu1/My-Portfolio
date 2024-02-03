
import Layout from '../layout/Layout'
import './style.css'
import { projects } from '../../data/constants.js'

const Project = () => {
    return (
        <div className='project'>
            <Layout>
                <div id='project' className="project-section">Project</div>
                {
                    projects.map((item) => (
                        <div key={item.id} className="project-item">
                            <div className="project-item-left">
                                <div className="project-title">{item.title}</div>
                                <div className="project-tags">
                                    {
                                        item.tags.map((tag) => (
                                            <span key={tag} className="">{tag}</span>
                                        ))
                                    }
                                </div>
                                <div className="project-desc">{item.description}</div>
                                <div className="project-links">
                                    <button>View Code</button>
                                    <button>Visit Live App</button>
                                </div>
                            </div>
                            <div className="project-img-right">
                                <div className="project-img">
                                    <img src={item.image} alt="" />
                                </div>

                            </div>
                        </div>
                    ))
                }
            </Layout>
        </div>
    )
}

export default Project
