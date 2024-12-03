'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import styles from './createUser.module.css';
import Link from 'next/link';

export default function CreateUserPage() {
  const [NomeAluno, setNomeAluno] = useState('');
  const [RM, setRM] = useState('');
  const [Turma, setTurma] = useState('');
  const [Ano, setAno] = useState('');
  const [msgSucesso, setMsgSucesso] = useState('');
  const [msgErro, setMsgErro] = useState('');


  const createUser = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://api-gestao-da-direcao.onrender.com/alunos/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ RM, Turma, Ano, NomeAluno })


      });

      // Verifica se a resposta não foi bem-sucedida
      if (!res.ok) {
        setMsgErro('Erro ao criar usuário. Usuário já existente')
        setTimeout(() => setMsgErro(''), 3000)

        setAno('');
        setRM('');
        setTurma('');
        setNomeAluno('');
      } else {
        setMsgSucesso('Usuário carregado com sucesso!');
        setTimeout(() => setMsgSucesso(''), 3000)

        setAno('');
        setRM('');
        setTurma('');
        setNomeAluno('');
      }

    } catch (error) {
      console.log('error', error)
    }

  };


  const handleEnsinoTurmaChange = (e) => {
    console.log('etapa changed:', e.target.value);
    setTurma(e.target.value);
  }



  return (

    <div className={styles.container}>
      <Header />

      {msgSucesso && (
        <div className={styles.msgSucesso}>
          {msgSucesso}
        </div>)}
      {msgErro && (
        <div className={styles.msgErro}>
          {msgErro}
        </div>)}

      <h1 className={styles.h1}>Criar Novo Aluno</h1>
      <form onSubmit={createUser} className={styles.form}>

        <div className={styles.create}>

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
            onChange={(e) => setRM(e.target.value)}
            className={styles.input}
          />
          <input
            type="number"
            placeholder="Ano"
            value={Ano}
            onChange={(e) => setAno(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.filtro}>
          <label>
            <select className={styles.button} name="ensino" value={Turma} onChange={handleEnsinoTurmaChange}>
              <option value="">EF I</option>
              <option value="1EF">1 Ano</option>
              <option value="2EF">2º Ano</option>
              <option value="3EF">3º Ano</option>
              <option value="4EF">4º Ano</option>
              <option value="5EF">5º Ano</option >
            </select>
          </label>




          <label>
            <select className={styles.button} name="ensino" value={Turma} onChange={handleEnsinoTurmaChange}>
              <option value="">EF II</option>
              <option value="6A">6º Ano A</option>
              <option value="6B">6º Ano B</option>
              <option value="7A">7º Ano A</option>
              <option value="7B">7º Ano B</option>
              <option value="8A">8º Ano A</option>
              <option value="8B">8º Ano B</option>
              <option value="9A">9º Ano A</option>
              <option value="9B">9º Ano B</option>
            </select>
          </label>


          <label>
            <select className={styles.button} name="ensino" value={Turma} onChange={handleEnsinoTurmaChange}>
              <option value="">EM</option>
              <option value="1AEM">1º Ano A</option>
              <option value="1BEM">1º Ano B</option>
              <option value="2AEM">2º Ano A</option>
              <option value="2BEM">2º Ano B</option>
              <option value="3AEM">3º Ano A</option>
              <option value="3BEM">3º Ano B</option>
            </select>
          </label>
        </div>


        <button type="submit" className={styles.createButton}>Criar</button>

        <Link className={styles.back} href='/gerenciamentoAlunos'>  Voltar</Link>
      </form>

    </div>

  );
}