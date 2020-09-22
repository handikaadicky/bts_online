import React, { useState, useEffect } from "react";
import { postChecklist, getChecklist, deleteChecklist } from "../service/api";
import ListEdit from "./ListEdit";

function FormChecklist() {
  const [name, setName] = useState("");

  const handlePost = async () => {
    const data = {
      name,
    };
    try {
      const response = await postChecklist(data);
      console.log(response)
      if (response.status === 200) {
        const id = response.data.data.id

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
    <div className="container">
      <form className="form-group">
        name
        <input className="form-control" type="text" name="username" onChange={nameChange}></input>
        <br></br>
        <button className="btn btn-primary" type="button" onClick={() => handlePost(name.id)}>
          Add List
        </button>
      </form>
      {/* List */}
      <ListEdit />
    </div>
  );
}

export default FormChecklist;
