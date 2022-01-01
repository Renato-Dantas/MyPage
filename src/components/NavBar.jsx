const NavBar = () => {

    const handleHamburger = ()=>{
        const [a, b, c] = document.querySelectorAll('.line');
        const sideBar = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');

        a.classList.toggle('rotate_pos');
        b.classList.toggle('disapier');
        c.classList.toggle('rotate_neg')
        sideBar.classList.toggle('side-active')

        links.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease both ${index/5 + .3}s`
            }
        })
    }

    return ( 
        <header>
            <nav>
                <ul className="nav-links">
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#knowledge">Knowleadge</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="hamburger" onClick={handleHamburger}>
                    <div className="line a"></div>
                    <div className="line b"></div>
                    <div className="line c"></div>
                </div>
            </nav>
        </header>
     );
}
 
export default NavBar;