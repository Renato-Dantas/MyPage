import Icon from '../pictures/book.png'

const Courses = ({year, title, description}) => {

    return ( 
        <section className="courses" id='courses'>
            <div className='icon' data-aos='fade-down'>
                <img src={Icon} alt="white study icon" />
            </div>
            <div className="description" data-aos='fade-right'>
                <h3>{title}</h3>
                <span>{year}</span>
                <p>{description}</p>
            </div>
        </section>
     );
}
 
export default Courses;