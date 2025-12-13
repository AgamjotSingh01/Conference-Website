import "./page.css";

export default function OrganizingCommittee() {
    return (
        <>
            <div className="container">
                <div className="body">

                    {/* PAGE TITLE */}
                    <div className="title_paper center">Organizing Committee</div>

                    {/* ------------ STUDENT COORDINATOR TABLE ------------ */}
                    <div className="table-section-title">Student Coordinators</div>
                    <table className="committee-table formal-table student-table">
                        <thead>
                            <tr>
                                <th>Department</th>
                                <th>Lead Name</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ITSupport&nbsp;&Technical Department</td>
                                <td>Saksham Tripathi</td>
                                <td>
                                    <div><strong>Phone:</strong> 8953417949</div>
                                    <div><strong>Email:</strong> saksham.tripathi047@nmims.in</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Publication Committee</td>
                                <td>Bhavya Jha</td>
                                <td>
                                    <div><strong>Phone:</strong> 7657872928</div>
                                    <div><strong>Email:</strong>jha.bhavya025@nmims.in</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Hospitality &Transport Committee</td>
                                <td>Aryamann Ailawadi</td>
                                <td>
                                    <div><strong>Phone:</strong>  6283513186</div>
                                    <div><strong>Email:</strong>ailawadi.aryamann020@nmims.in</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Publicity Committee </td>
                                <td>Neha Sachdeva</td>
                                <td>
                                    <div><strong>Phone:</strong> 6283325133</div>
                                    <div><strong>Email:</strong> sachdeva.neha039@nmims.in</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Event & Stage Management Committee</td>
                                <td>Bhavya Jha & Neha Sachdeva</td>
                                <td>
                                    <div><strong>Phone:</strong> 7657872928</div>
                                    <div><strong>Email:</strong> jha.bhavya025@nmims.in</div>
                                    <div><strong>Phone:</strong> 6283325133</div>
                                    <div><strong>Email:</strong>sachdeva.neha039@nmims.in</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Discipline & Audience Management Committee</td>
                                <td>Neha Sachdeva</td>
                                <td>
                                    <div><strong>Phone:</strong> 6283325133</div>
                                    <div><strong>Email:</strong>sachdeva.neha039@nmims.in</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Registration Committee</td>
                                <td>Aryamann Ailawadi</td>
                                <td>
                                    <div><strong>Phone:</strong>6283513186</div>
                                    <div><strong>Email:</strong>ailawadi.aryamann020@nmims.in</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* ------------ FACULTY COORDINATOR TABLE ------------ */}
                    <div className="table-section-title">Faculty Coordinators</div>
                    <table className="committee-table formal-table faculty-table">
                        <thead>
                            <tr>
                                <th>Department</th>
                                <th>Name</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Publication Committee</td>
                                <td>Dr. Preetjot Kaur</td>
                                <td>
                                    <div><strong>Phone:</strong> 01723501300</div>
                                    <div><strong>Email:</strong> preetjot.kaur@nmims.edu</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Hospitality & Transport Committee</td>
                                <td>Dr. Ranvir Singh</td>
                                <td>
                                    <div><strong>Phone:</strong> 01723501300</div>
                                    <div><strong>Email:</strong> ranvir.panwar@nmims.edu</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Publicity Committee</td>
                                <td>Dr. Aditya</td>
                                <td>
                                    <div><strong>Phone:</strong> 01723501300</div>
                                    <div><strong>Email:</strong> aditya.bakshi@nmims.edu</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Event & Stage Management Committee</td>
                                <td>Dr. Aastha Gupta</td>
                                <td>
                                    <div><strong>Phone:</strong> 01723501300</div>
                                    <div><strong>Email:</strong> aastha.gupta@nmims.edu</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Discipline & Audience Management Committee</td>
                                <td>Mr. Pankaj Gullane</td>
                                <td>
                                    <div><strong>Phone:</strong> 01723501300</div>
                                    <div><strong>Email:</strong> pankaj.gulhane@nmims.edu</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Registration Committee</td>
                                <td>Mr. Ashish Mogra</td>
                                <td>
                                    <div><strong>Phone:</strong> 01723501300</div>
                                    <div><strong>Email:</strong> ashish.mogra@nmims.edu</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}
