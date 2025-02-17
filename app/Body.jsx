import "./Body.css";

export default function Hero() {
    return (
        <div className="hero">
            <div className="title">
                <div className="bold_title">
                    International Conference on Computational
                    Techniques in Data Science
                    IICTDS 2025
                </div>

                <div className="small_title">
                    December 19th-20th , 2025
                </div>
            </div>

            <div className="container">
                <div className="body">
                    <div className="title_paper">
                        Conference Theme
                    </div>
                    <div className="content">
                        The conference aims to explore cutting-edge developments in computational methods and frameworks that drive innovation in Data Science (DS). Participants will engage with novel
                        theoretical concepts, practical tools, and emerging technologies, emphasizing
                        interdisciplinary applications across industries like healthcare, finance, autonomous systems,
                        and social sciences.
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="body">
                    <div className="title_paper">
                        Conference Objectives
                    </div>
                    <div className="content">
                        The main goals of the IICTDS 2025 conference are:
                        <ul>
                            <li className="space">To foster collaboration between academic researchers, industry professionals, and
                                policymakers.</li>
                            <li className="space">To highlight innovative algorithms, modelling techniques, and computational
                                approaches in AI, ML, and DS.</li>
                            <li className="space">To discuss real-world challenges and emerging ethical concerns in AI-driven solutions.</li>
                            <li className="space">To provide a platform for presenting novel applications and solutions to key societal
                                challenges using AI, ML, and Data Science.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="body">
                    <div className="title_paper">
                        Key topics of interest
                    </div>
                    <div className="content">
                        The conference will focus on, but is not limited to, the following topics:
                        <div className="sub-heading">
                            Artificial Intelligence
                        </div>
                        <ul>
                            <li className="space">Explainable AI and interpretability</li>
                            <li className="space">AI in robotics, IoT, and smart devices</li>
                            <li className="space">Cognitive computing and AI ethics</li>
                            <li className="space">Natural language processing and understanding</li>
                            <li className="space">AI for healthcare, sustainability, and climate science</li>
                        </ul>
                    </div>

                    <div className="content">
                        <div className="sub-heading">Data Science</div>
                        <ul>
                            <li className="space">Big data analytics, architecture, and infrastructure</li>
                            <li className="space">Data wrangling, pre-processing, and feature engineering</li>
                            <li className="space">Scalable algorithms for large datasets</li>
                            <li className="space">Predictive and prescriptive analytics</li>
                            <li className="space">Visualization techniques and tools for data interpretation</li>
                        </ul>
                    </div>

                    <div className="content">
                        <div className="sub-heading">Interdisciplinary Applications</div>
                        <ul>
                            <li className="space">AI, ML, and DS for personalized medicine and genomics</li>
                            <li className="space">AI, ML, and DS for Wireless Networks</li>
                            <li className="space">AI, ML and DS for IoT, IoMT and IIoT</li>
                            <li className="space">AI for constrained and unconstrained optimization problems</li>
                            <li className="space">AI in the finance and banking industry</li>
                            <li className="space">AI-driven innovations in education and e-learning</li>
                            <li className="space">AI applications in smart cities and transportation</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}