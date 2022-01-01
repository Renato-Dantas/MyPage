
const Experience = ({year, title, description}) => {

    return ( 
        <section className="experience" id='experience'>
            <div className='year' data-aos='fade-down'>{year}</div>
            <div className="description" data-aos='fade-right'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </section>
     );
}
 
export default Experience;