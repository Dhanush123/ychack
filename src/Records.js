import React from "react";
import {Table} from "react-bootstrap";

class Records extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Table striped bordered condensed hover id="RecordsTable">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Flag</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default Records;