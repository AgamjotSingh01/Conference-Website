import Table from "./Table";

export default function Hero() {
    return (
        <div className="container">
            <div className="body">
                <div className="title_paper">
                    Registration
                </div>

                <div className="content">
                    <ul>
                        <li className="space">All attendees, including authors and non-presenting participants, are required to register
                            for the conference
                        </li>
                        <li className="space">Early-bird registration rates are available upto December 20, 2025, with regular
                            registration open until December 10, 2025.</li>
                    </ul>
                </div>

                <div className="title_paper">
                    Early-Bird Registration
                </div>
                <div className="content">
                    Authors of accepted papers will have the opportunity to register at early-bird rates
                    starting November 10, 2025.
                </div>

                <div >
                    <Table />
                </div>

                <div className="title_paper">
                    Note
                </div>
                <div className="content">
                    For the most accurate and up-to-date information, participants should refer to the official
                    conference website and communication channels for any updates or changes to the submission
                    guidelines.
                </div>

            </div>
        </div>
    )
}