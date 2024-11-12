'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './createUser.module.css';

export default function CreateUserPage() {
    const [RM, setRm] = useState('');
    const [etapa, setEtapa] = useState('');
    const [Ano, setAno] = useState('');
    const [tipoprova, setTipoprova] = useState('');
    const [notaExt, setNotaExt] = useState('');
    const [nomeAluno, setNomeAluno] = useState('');
    const [turma, setTurma] = useState('');

    const getAluno = async () => {
        if (RM && Ano) {
            const url = `http://localhost:3001/avalia/${RM}/${Ano}`;  //http://localhost:3001/avalia/711/2024
            console.log(`Constructed URL: ${url}`);
            console.log('Current state:', RM, Ano);

        };


    }
    
    const createUser = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:3001/avalia/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ RM, etapa, Ano: Ano ? parseInt(Ano) : null, tipoprova, notaExt, nomeAluno, turma }),
        });

    }



    return (
        <div className={styles.container}>

            <form onSubmit={getAluno} className={styles.form}>
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

                <button type='submit' className={styles.button} disabled={!RM || !Ano}>Filtrar</button>
            </form>

            <h1>Criar Nova Nota</h1>
            
            <form onSubmit={createUser} className={styles.form}>

                <input
                    type="text"
                    placeholder="Nome"
                    value={nomeAluno}
                    onChange={(e) => setNomeAluno(e.target.value)}
                    className={styles.input}
                />

                <input
                    type="text"
                    placeholder="Turma"
                    value={turma}
                    onChange={(e) => setTurma(e.target.value)}
                    className={styles.input}
                />

                <input
                    type="text"
                    placeholder="Tipo de Prova"
                    value={tipoprova}
                    onChange={(e) => setTipoprova(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="number"
                    placeholder="Nota"
                    value={notaExt}
                    onChange={(e) => setNotaExt(e.target.value)}
                    className={styles.input}
                />




                <button type="submit" className={styles.button}>Criar</button>
            </form>
        </div>
    );
}
