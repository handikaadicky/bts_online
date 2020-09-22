import React, { useState, useEffect } from "react";
import { getChecklist } from "../service/api";

function ListChecklist() {
  const [list, setList] = useState("");

  useEffect(() => {
    getChecklist().then((data) => setList(data));
  }, []);
  return <div>[listchecklist]</div>;
}

export default ListChecklist;
