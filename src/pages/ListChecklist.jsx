import React, { useState, useEffect } from "react";
import { getChecklist } from "../service/api";
import { useHistory } from "react-router-dom";

function ListChecklist() {
  const history = useHistory();
  const [list, setList] = useState([]);

  useEffect(() => {
    getChecklist().then((res) => setList(res.data.data));
  }, []);

  console.log(list);
  return (
    <div className="container">
      <h1 class="display-6">List Items</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/lists/edit")}
      >
        Edit List
      </button>
      <br />
      <br />
      {list.map((list) => (
        <ul className="list-group">
          <li className="list-group-item" key={list.id}>
            {list.name}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ListChecklist;
