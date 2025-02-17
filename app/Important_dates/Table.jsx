import "./Table.css";

export default function Table() {
  return (
    <div className="tab">
      <table>
        <tbody>
          <tr>
            <th colSpan="2">Important dates</th>
          </tr>

          <tr>
            <td>Paper submission deadline:</td>
            <td>September 30, 2025</td>
          </tr>
          <tr>
            <td>Notification of acceptance:</td>
            <td>October 30, 2025</td>
          </tr>
          <tr>
            <td>Camera-ready submission:</td>
            <td>November 15, 2025</td>
          </tr>
          <tr>
            <td className="last">Conference dates:</td>
            <td className="last">December 19 -20, 2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
