import React, { useState, useEffect } from "react";
import { postChecklist, getChecklist, deleteChecklist } from "../service/api";

function ListChecklistItem() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getChecklist().then((res) =>  setList(res.data.data));
  }, []);

  const checkList = (env) => {
    setList(env.target.value);
  };

  return (
    <div>
      {list.map((list) => (
        <div key={list.id}>
          {list.name}
          <input type="checkbox"  />
        </div>
      ))}
    </div>
  );
}

export default ListChecklistItem;
