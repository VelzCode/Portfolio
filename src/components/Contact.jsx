import { useForm } from "@formspree/react";
import "../assets/css/Contact.css";


function Form () {
    const [state, handleSubmit] = useForm("xwlplnng");
        console.log(state);

    return (
        <>
            <section className="contact-content">
                <div className="contact-pitch">
                    <h3>Get in Touch..</h3>
                    <p>Whether you're looking for a developer, need a website, or want to collaborate on a project, I would be happy to hear from you. I'm currently open to development opportunities, Volunteer, Remote, Freelance work and new collaborations.
                    </p>
                    <p>
                    If you have any opporunities to offer or just want to get in touch regarding general matters, then feel free to fill the form in opposite or alternatively you can contact me on LinkedIn using the links below.
                    </p>
                    <div className="btn-area">
                        <a href="https://github.com/VelzCode" className="buttons buttons-2" target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/jay-dewhurst/" className="buttons buttons-2" target="_blank">LinkedIn</a>
                    </div>
                </div>
                    <div className="form-wrapper">

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-container">
                                <div className="form-field formf-name">
                                    <label htmlFor="name"><span>Name</span></label>
                                    <input type="text" id="name" name="name" required></input>
                                </div>

                                <div className="form-field formf-company">
                                    <label htmlFor="company"><span>Company</span></label>
                                    <input type="text" id="company" name="company" ></input>
                                </div>

                                <div className="form-field formf-email">
                                    <label htmlFor="email"><span>Email</span></label>
                                    <input type="email" id="email" name="email" required></input>
                                </div>

                                <div className="form-field formf-enquiry">
                                    <label htmlFor="enquiry"><span>Reason for Enquiry</span></label>
                                    <select id="enquiry" name="enquiry">
                                        <option value="website">Website Enquiry</option>
                                        <option value="job">Recruitment</option>
                                        <option value="collab">Collaboration</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-field message-field">
                                    <label htmlFor="message"><span>Message</span></label>
                                    <textarea id="message" name="message" rows="6" required></textarea>
                                </div>
                            </div>

                            <div className="form-button">
                                <button type="submit" disabled={state.submitting} className="buttons buttons-2 form-button">
                                    {state.submitting && <span className="spinner"></span>}
                                    {state.submitting ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </form>
                        <div className="form-response">
                            {state.succeeded && (
                                <p className="success-p">Thank you, your message has been delivered.</p>
                            )}

                            {state.errors && (
                                <p className="errors-p">Sorry, your message could not be sent, please contact me by <a href="mailto=jason.m.dewhurst@protonmail.com">email</a> instead.</p>
                            )}
                        </div>
                    </div>
            </section>
            <hr className="end-contact-divider"></hr>
        </>
    )
}

export default Form;