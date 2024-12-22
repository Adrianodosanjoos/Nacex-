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
        alert("Your email has been sent successfully.");
        return; 
    }, (err) => {
         console.log("erro: ", err)
    }) 
}

          
  return (
    <div className="container">
     

       <p className="p">A <span>NACEX</span> é uma empresa líder no segmento de transporte expresso em Portugal, Espanha, Andorra e Benelux. Faz parte do Grupo Logista distribuidor líder de produtos e serviços para o comércio local no sul da Europa.</p>
       <p className="p">Oferecemos uma ampla gama de serviços nacionais, internacionais e de valor acrescentado que se adaptam às necessidades de entrega mais exigentes do mercado. A <span>NACEX</span> disponibiliza aos seus clientes ferramentas tecnológicas e sistemas de comunicação que estão na vanguarda do setor.</p>
       <p className="p">O nosso objetivo consiste em desenvolver serviços que satisfaçam as expectativas dos nossos clientes. Satisfazemos as suas necessidades logísticas e de distribuição através do desenvolvimento constante dos recursos humanos e técnicos para garantir a melhoria contínua dos nossos serviços.</p>

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
