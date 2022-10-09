import { useEffect, useState } from "react";
import Form from "./components/Form";

function App() {
  const [message, setMessage] = useState('');
  const [botResponse, setBotResponse] = useState('')

  const sendMessage = async (input) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6ac7a440c9msh22fc5522e89f5cep15a085jsn9d05a22338dd',
        'X-RapidAPI-Host': 'ai-chatbot.p.rapidapi.com'
      }
    };
    
    const res = await fetch(`https://ai-chatbot.p.rapidapi.com/chat/free?message=${input}&uid=user1`, options);
    const data = await res.json();
    // message: data.chatbot.message
    setBotResponse(data.chatbot.response)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage('');
  }

  useEffect(() => {
    sendMessage('hello')
  }, [])

  return (
    <div className="App">
      <h2>Zoey Chatbot</h2>

      <Form onSubmit={handleSubmit} message={message} setMessage={setMessage}/>

      <div className="dialog">
        <p>Bot: {botResponse}</p>
      </div>
    </div>
  );
}

export default App;
