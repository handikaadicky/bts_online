import React, { useState, useEffect } from "react";
import { getChecklist } from "../service/api";
import { useHistory } from "react-router-dom";

function ListChecklist() {
    const history = useHistory()
  const [list, setList] = useState([]);

  useEffect(() => {
    getChecklist().then((res) => setList(res.data.data));
  }, []);

  console.log(list);
  return (
    <div>
      <button onClick={() => history.push('/lists/edit')}>Edit Form</button>
      {list.map((list) => (
        <div key={list.id}>{list.name}</div>
      ))}
    </div>
  );
}

export default ListChecklist;
