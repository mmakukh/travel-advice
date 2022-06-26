import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const Record = (props) => (
  <tbody>
    <tr>
      <td>{props.record.title}</td>
    </tr>
    <tr>
      <td>{props.record.subtitme}</td>
    </tr>
    <tr>
      <td>{props.record.description}</td>
    </tr>
    <tr>
      <td>
        <img src={props.record.picture} />
      </td>
    </tr>
    <tr>
      <td>{props.record.content}</td>
    </tr>
  </tbody>
);

export default function RecordDescription() {
  const [records, setRecords] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getRecords() {
      const id = params.id.toString();
      console.log(`${id}`);
      const response = await fetch(`http://localhost:5050/travel/${id}`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      console.log(`${records}`);
      if (!records) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setRecords(records);
    }

    getRecords();

    return;
  }, [params.id, navigate]);

  function recordDescription() {
    return <Record record={records} key={records._id} />;
  }

  return (
    <div>
      <h3>Travel Description</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        {recordDescription()}
      </table>
    </div>
  );
}
