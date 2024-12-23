import React, {useState, useEffect } from "react";
function Api() {
  const [state, upDate] = useState([]);
  useEffect(() => {
    fetch("https://project-klrg.onrender.com/api")
        // fetch("//localhost:8000/api")
      .then((Response) => Response.json())
      .then((data) => upDate(data))
      .catch((err) => console.log(err));
  }, []);
  return <>
    {state}
  </>;
}

export default Api;
