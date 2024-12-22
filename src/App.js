import { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert("preencha todos os campos");
    return; 
    }

    const templeteParams = {
      from_name: name,
      message: message,
      email: email 
    }

    emailjs.send("service_2cnqh5t", "template_59d1rza", templeteParams, "dO7tFerEOHEsaFB8f")
    .then((response) => {
        console.log("EMAIL SENT", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
    }, (err) => {
         console.log("erro: ", err)
    }) 
}
  return (
    <div className="container">
      <h1 className="title">NaceX</h1>

      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Enter your message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="To send" />
      </form>

    </div>
  );
}

export default App;
