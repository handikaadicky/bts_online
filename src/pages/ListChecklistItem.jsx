import React, { useState, useEffect } from "react";
import { postChecklist, getChecklist, deleteChecklist } from "../service/api";

function ListChecklistItem() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getChecklist().then((res) => setList(res.data.data));
  }, []);

  const checkList = (env) => {
    setList(env.target.value);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-6 mx-auto">Check your list </h1>
      </div>
      {list.map((list) => (
        <div className="form-check" key={list.id}>
          <input type="checkbox" class="form-check-input" id="list" />
          <label class="form-check-label" htmlFor="list">
            {list.name}
          </label>
        </div>
      ))}
    </div>
  );
}

export default ListChecklistItem;
