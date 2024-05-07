import "../pages/Contact.css";
import "../pages/Overall.css";

function Contact() {
    
    return (
        <div className="ContactPage">
            <div className="contact_info" id="Contact">
                <h2>Contact Info</h2>
                <p>(208)-606-8344</p>
                <p>ka.brown606@gmail.com</p>
                <p><a href="../media/Resume/ResumeMay2024.pdf" download="ResumeMay2024.pdf" className="ResumeLink">
                    Download Resume</a></p>
                
                <p>If you have any questions or inquearies, please feel free to contact me with my email/phone number, 
                    or fill out the google form to the side. Thank you!
                </p>
            </div>
            <div className="email">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeCzLj2W5-LHUsT34APwXZLouhIbVFC_INgyWITu4xJJl7aAg/viewform?embedded=true" width="100%" height="300px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    );
}

export default Contact;