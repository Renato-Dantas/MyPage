const ProjSection = ({effect, projectTitle, projectImage, projectLink}) => {
    return ( 
        <section className="project">
            <div className="project__text" data-aos={effect}>
                <p data-aos={effect}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia laborum fugiat earum in natus temporibus consectetur, magnam eum hic voluptas perferendis officia tenetur, provident sapiente necessitatibus quos. Veniam, voluptatum!</p>
            </div>
            <div className="project__image" data-aos={effect}>
                <h3>{projectTitle}</h3>
                <img src={projectImage} alt="link to an deployed project" />
                <a href={projectLink} target={"_blank"} rel="noreferrer">
                    <button>Visit Now</button>
                </a>
            </div>
        </section>
     );
}
 
export default ProjSection;