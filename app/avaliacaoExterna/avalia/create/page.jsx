'use client';

import { useState } from 'react';
import styles from './createUser.module.css';
import Header from '@/components/Header';
import Link from 'next/link';

export default function CreateUserPage() {
  const [rm, setRm] = useState('');
  const [etapa, setEtapa] = useState('');
  const [ano, setAno] = useState('');
  const [tipoprova, setTipoprova] = useState('');
  const [notaExt, setNotaExt] = useState('');
  const [Turma, setTurma] = useState('');
  const [msgSucesso, setMsgSucesso] = useState('');
  const [msgErro, setMsgErro] = useState('');



  const createUser = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://api-gestao-da-direcao.onrender.com/avalia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rm, etapa, ano, tipoprova, notaExt })


      });

      // Verifica se a resposta não foi bem-sucedida
      if (!res.ok) {
        setMsgErro('Erro ao criar usuário. Usuário já existente')
      setTimeout(() => setMsgErro(''), 3000)

      setAno('');
      setEtapa('');
      setRm('');
      setTipoprova('');
      setTurma('');
      setNotaExt('');
    } else {
      setMsgSucesso('Usuário carregado com sucesso!');
      setTimeout(() => setMsgSucesso(''), 3000)

      setAno('');
      setEtapa('');
      setRm('');
      setTipoprova('');
      setTurma('');
      setNotaExt('');
    }

      // Se a resposta for bem-sucedida
 
    } catch (error) {
      console.log('error', error)
    }
    // Adicione manipuladores de eventos para cada select, se necessário


    // add event handlers for each select

  };
  const handleTurmaChange = (e) => {
    console.log('Turma changed:', e.target.value);
    setTurma(e.target.value);
  }


  const handleEtapaChange = (e) => {
    console.log('Etapa changed:', e.target.value);
    setEtapa(e.target.value);
  }


  const handleAnoChange = (e) => {
    console.log('ano changed:', e.target.value);
    setAno(e.target.value);
  }

  const handleTipoprovaChange = (e) => {
    console.log('tipo prova changed:', e.target.value);
    setTipoprova(e.target.value);
  }

  return (
    <div className={styles.container}>
      <Header />

      { msgSucesso && (
      <div className={styles.msgSucesso}>
        {msgSucesso}
        </div>)}
        { msgErro && (
      <div className={styles.msgErro}>
        {msgErro}
        </div>)}

      <h1 className={styles.h1}>Lançar Nova Nota</h1>
      <form onSubmit={createUser} className={styles.form}>


        <div className={styles.filtro}>
          <label>
            <select className={styles.button} name="ensino" value={Turma} onChange={handleTurmaChange}>
              <option value="">EF I</option>
              <option value="3EF">3º Ano</option>
              <option value="4EF">4º Ano</option>
              <option value="5EF">5º Ano</option >
            </select>
          </label>




          <label>
            <select className={styles.button} name="ensino" value={Turma} onChange={handleTurmaChange}>
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
            <select className={styles.button} name="ensino" value={Turma} onChange={handleTurmaChange}>
              <option value="">EM</option>
              <option value="1AEM">1º Ano A</option>
              <option value="1BEM">1º Ano B</option>
              <option value="2AEM">2º Ano A</option>
              <option value="2BEM">2º Ano B</option>
              <option value="3AEM">3º Ano A</option>
              <option value="3BEM">3º Ano B</option>
            </select>
          </label>




          <label>
            <select className={styles.button} name="etapa" onChange={handleEtapaChange} value={etapa}>
              <option value="">Etapa</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>

          <label>
            <select className={styles.button} name="etapa" onChange={handleTipoprovaChange} value={tipoprova}>
              <option value="">Tipo de Prova</option>
              <option value="SARESP">SARESP</option>
              <option value="DESBRAVENEM">DESBRAVENEM</option>
            </select>
          </label>


          <input placeholder='Ano' value={ano} type='number' onChange={handleAnoChange} name="ano" />



        </div>

        <div className={styles.create}>
          <input
            type="number"
            placeholder="RM do Aluno"
            value={rm}
            onChange={(e) => setRm(e.target.value)}
            className={styles.input}
          />
          <input
            type="number"
            placeholder="Nota do Aluno"
            value={notaExt}
            onChange={(e) => setNotaExt(e.target.value)}
            className={styles.input}

          />

          <button type="submit" className={styles.button} disabled={!Turma || !etapa || !ano || !tipoprova}>Criar</button>

        </div>

      </form>

      <Link className={styles.back} href='/avaliacaoExterna' >Voltar</Link>

      <div id = 'error'></div>

    </div>
  );
}