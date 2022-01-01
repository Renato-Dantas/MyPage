const Knowledge = ({title, description, icon}) => {

    const handleIconClick = (e)=>{
        const icon = e.target;
        const description = e.target.parentElement.nextElementSibling;
    
        icon.classList.add('pulse');
        description.classList.add('is-active');
        description.style.opacity = 1;
    }

    return ( 
        <section className="knowledge" id='knowledge'>
            <div className="icon" data-aos='fade-right'>
                <img src={icon} alt={`Icon of ${title}`} onClick={handleIconClick} />
            </div>
            <div className="description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </section>
     );
}
 
export default Knowledge;