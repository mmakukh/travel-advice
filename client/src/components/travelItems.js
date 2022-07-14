import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "../Header";

const Record = (props) => (
  <tr>
    <td>
      <img src={props.record.picture} width={100} height={100} />
    </td>
    <td>{props.record.title}</td>
    <td>{props.record.description}</td>
    <td>
      <Link className="btn btn-link" to={`/item/${props.record._id}`}>
        Learn More
      </Link>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);
  const location = useLocation();
  const s = location.state;
  console.log({ s });
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5050/travels`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  function recordList() {
    return records.map((record) => {
      return <Record record={record} key={record._id} />;
    });
  }

  function header() {
    if (location.state) {
      return <Header userName={location.state.user.username} />;
    }
    return <Header />;
  }

  function configWidget() {
    if (location.state.user) {
      return <div width={120}>Configure your Search / TODO</div>;
    }
    return <div />;
  }

  return (
    <div>
      <div width={120}>{configWidget}</div>
      <div>{header()}</div>
      <h3>Record List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
