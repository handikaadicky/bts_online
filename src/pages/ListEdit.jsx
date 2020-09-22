import React, { useState, useEffect } from "react";
import { postChecklist, getChecklist, deleteChecklist } from "../service/api";

function ListEdit() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getChecklist().then((res) => setList(res.data.data));
  }, []);

  console.log(list);
  const handleDelete = async (id) => {
    try {
      const response = await deleteChecklist(id);
      if (response.status === 200) {
        const filtered = list.filter((singlelist) => singlelist.id !== id);
        setList(filtered);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateList = () => {};

  return (
    <div className="container">
      {list.map((list) => (
        <ul className="list-group">
          <li className="list-group-item" key={list.id}>
            {list.name}
            <button className="btn btn-danger" onClick={() => handleDelete(list.id)}>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ListEdit;
