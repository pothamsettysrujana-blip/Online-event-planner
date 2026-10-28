import Navbar from "./Navbar";
function FAQ() {
    return (
        <>
            <Navbar />

            {<div className="container mt-5">

                <h2 className="mb-4">
                    Frequently Asked Questions
                </h2>

                <div className="accordion">

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target="#q1"
                            >
                                How do I register?
                            </button>
                        </h2>

                        <div id="q1" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                Visit Register page and fill the form.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#q2"
                            >
                                How can I cancel registration?
                            </button>
                        </h2>

                        <div id="q2" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                Contact event organizers.
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            }
        </>


    );
}

export default FAQ;