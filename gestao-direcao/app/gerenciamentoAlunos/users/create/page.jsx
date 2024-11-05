'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './createUser.module.css';

export default function CreateUserPage() {
    const [NomeAluno, setNomeAluno] = useState('');
    const [RM, setRm] = useState('');
    const [Turma, setTurma] = useState('');
    const [Ano, setAno] = useState('');


    const createUser = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:3001/alunos/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ NomeAluno, RM, Turma, Ano : Ano ? parseInt(Ano) : null }),

        });

       
    } 

  
    
    const handleEnsinoTurmaChange = (e) => {
            console.log('etapa changed:', e.target.value);
            setTurma(e.target.value);
          }

          

    return (

        <div className={styles.container}>
            <Header />

            <h1>Criar Novo Aluno</h1>
            <form onSubmit={createUser} className={styles.form}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={NomeAluno}
                    onChange={(e) => setNomeAluno(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="number"
                    placeholder="RM"
                    value={RM}
                    onChange={(e) => setRm(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="number"
                    placeholder="Ano"
                    value={Ano}
                    onChange={(e) => setAno(e.target.value)}
                    className={styles.input}
                />

<label>
<select className={styles.button} name="ensino" value={Turma} onChange={handleEnsinoTurmaChange}>
              <option value="">Turma</option>
              <option value="1%25E.F">1 Ano</option>
              <option value="2%25E.F">2º Ano</option>
              <option value="3%25E.F">3º Ano</option>
              <option value="4%25E.F">4º Ano</option>
              <option value="5%25E.F">5º Ano</option >            
              <option value="6%25E.F">6º Ano</option >            
              <option value="7%25A%25">7º Ano A</option>       
              <option value="7%25B%25">7º Ano B</option>          
              <option value="8%25A%25">8º Ano A</option>          
              <option value="8%25B%25">8º Ano B</option>          
              <option value="9%25A%25">9º Ano A</option>          
              <option value="9%25B%25">9º Ano B</option>           
              <option value="1%25A%25">1º Ano A</option>          
              <option value="1%25B%25">1º Ano B</option>
              <option value="2%25E.M">2º Ano</option>
              <option value="3%25E.M">3º Ano</option>

            </select>
          </label>

         


                <button type="submit" className={styles.button}>Criar</button>
            </form>
            
        </div>
    
    );
    <Footer />
}