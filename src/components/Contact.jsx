const Contact = () => {
    return ( 
        <section className="contact" id='contact'>
            <h2 data-aos='fade-right'>Contact Me</h2>
            <div className='icons'>

                <a href="https://www.linkedin.com/in/dantasrenato/" target={"_blank"}>
                    <div id = 'linkedin' data-aos='fade-left'>
                        <label>Linkedin</label>
                    </div>
                </a>

                <a href="https://github.com/Renato-Dantas" target={"_blank"}>
                    <div id='github' data-aos='fade-left'> 
                        <label>GitHub</label>
                    </div>

                </a>
                
                <a href="mailto: renatodantas@outlook.com.br" target={"_blank"}>
                    <div id='outlook' data-aos='fade-left'>
                        <label>Outlook</label>
                    </div>
                </a>

                <a href="/" target={"_blank"}>
                    <div id='whatsapp' data-aos='fade-left'>
                        <label>Whatsapp</label>
                    </div>
                </a>
            </div>
        </section>
     );
}
 
export default Contact;