import Link from "next/link";
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
                        <li className="space">
                            All attendees, including authors and non-presenting participants, are required to register
                            for the conference
                        </li>
                        <li className="space">
                            Regular registration open until November 30, 2025.
                        </li>
                    </ul>
                </div>


                <div>
                    <Table />
                </div>

                <div className="title_paper">
                    Online Payment Link
                </div>
                <div className="content">
                    <div className="payment-link-container">
                        <Link 
                            href="https://eazypay.icicibank.com/eazypayLink?P1=yRRjHPGx0eu4V0wObEsSbQ==" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="payment-link"
                        >
                            Click here to make payment
                        </Link>
                    </div>
                </div>

                <div className="sub-heading">
                    Authors refer to the following points for registration:
                </div>
                <div className="content">
                    <ul>
                        <li className="space">
                            Write mobile number in place of Student number.
                        </li>
                        <li className="space">
                            Write event name (IICTDS2025) in place of Program Name.
                        </li>
                        <li className="space">
                            Select from drop-down list of Purpose of payment (Conference Registration).
                        </li>
                        <li className="space">
                            QR CODE option is available under UPI OPTION.
                        </li>
                    </ul>
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
    );
}
