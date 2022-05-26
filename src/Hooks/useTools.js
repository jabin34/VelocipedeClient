import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://protected-cliffs-14570.herokuapp.com/tools")
      .then((res) => res.json())
      .then((result) => setTools(result));
  }, []);
  return [tools, setTools];
};
export default useTools;
