const Hello = ({myPicture}) => {
    return ( 
        <section className="hello">
            <h1>Hello There!</h1>
            <div className="image-me">
                <img src={myPicture} alt="My Photo" />
            </div>
        </section>
     );
}
 
export default Hello;