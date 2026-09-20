import "../assets/css/Contact.css";

function Form () {

    return (
        <section className="form-wrapper">
            <h2 className="form-header">Contact Form</h2>
                <form className="form-container" action="" method="post">
                    <div className="form-field">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Name..." required></input>
                    </div>

                    <div className="form-field">
                        <label for="company">Company</label>
                        <input type="text" id="company" name="company" placeholder="Company..."></input>
                    </div>

                    <div className="form-field">
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="Email..." required></input>
                    </div>

                    <div className="form-field">
                        <label for="enquiry">Reason for Enquiry</label>
                        <select id="enquiry" name="enquiry">
                            <option value="website">Website Enquiry</option>
                            <option value="job">Recruitment</option>
                            <option value="collab">Collaboration</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-field message-field">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                    </div>
                </form>
        </section>
    )
}

export default Form;