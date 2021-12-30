const Title = ({ titleText, effect }) => {
    return ( 
        <div className="title-section" data-aos={effect}>
            <h1>{titleText}</h1>
        </div>
     );
}
 
export default Title;