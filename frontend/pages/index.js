import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test/")  // Call Django API
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Canteen & Copyshop Automation</h1>
      <p>Backend Message: {message}</p>
    </div>
  );
}
