import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://devops-production-project.onrender.com/")
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 DevOps Full Stack Project</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;