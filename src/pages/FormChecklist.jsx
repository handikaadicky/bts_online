import React, { useState, useEffect } from "react";
import { postChecklist, getChecklist, deleteChecklist } from "../service/api";
import ListEdit from "../pages/ListEdit";

function FormChecklist() {
  const [name, setName] = useState("");

  const handlePost = async (id) => {
    const data = {
      name,
    };
    try {
      const response = await postChecklist(data);
      if (response.status === 200) {
          
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const nameChange = (evt) => {
    setName(evt.target.value);
  };

  return (
    <div>
      <form>
        name
        <input type="text" name="username" onChange={nameChange}></input>
        <button type="button" onClick={() => handlePost(name.id)}>
          Add List
        </button>
      </form>

      {/* List */}
      <ListEdit />
    </div>
  );
}

export default FormChecklist;
