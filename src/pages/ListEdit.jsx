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
        setList(filtered)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {list.map((list) => (
        <div key={list.id}>
          {list.name}
          <button onClick={() => handleDelete(list.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ListEdit;
