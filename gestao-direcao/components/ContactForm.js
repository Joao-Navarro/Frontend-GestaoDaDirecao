// components/ContactForm.js
'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    )
    .then((result) => {
        console.log(result.text);
        setStatus('Mensagem enviada com sucesso!');
        
        // Resetar o formulário
        form.current.reset(); // Adicione esta linha para resetar o formulário
    }, (error) => {
        console.log(error.text);
        setStatus('Erro ao enviar a mensagem, tente novamente.');
    });
};

    

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <label htmlFor="user_name">Seu nome</label>
                <input type="text" name="user_name" required />
            </div>
            <div>
                <label htmlFor="user_email">Seu email</label>
                <input type="email" name="user_email" required />
            </div>
            <div>
                <label htmlFor="message">Mensagem</label>
                <textarea name="message" required />
            </div>
            <button type="submit">Enviar</button>
            {status && <p>{status}</p>}
        </form>
    );
};

export default ContactForm;