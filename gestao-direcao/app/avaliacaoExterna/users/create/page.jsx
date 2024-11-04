'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './createUser.module.css';

export default function CreateUserPage() {
  const [rm, setRm] = useState('');
  const [etapa, setEtapa] = useState('');
  const [ano, setAno] = useState('');
  const [tipoprova, setTipoprova] = useState('');
  const [notaExt, setNotaExt] = useState('');
  const [Turma, setTurma] = useState('');
  const router = useRouter();

  const createUser = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:3001/avalia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rm, etapa, ano, tipoprova, notaExt }),
    });


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
      <h1>Criar Novo Usuário</h1>
      <form onSubmit={createUser} className={styles.form}>
        <input
          type="number"
          placeholder="RM"
          value={rm}
          onChange={(e) => setRm(e.target.value)}
          className={styles.input}
        />
       
        <div className={styles.filtro}>
          <label>
            <select className={styles.button} name="ensino" value={Turma} onChange={handleTurmaChange}>
              <option value="">EF1</option>
              <option value="3%25E.F">3º Ano</option>
              <option value="4%25E.F">4º Ano</option>
              <option value="5%25E.F">5º Ano</option >
            </select>
          </label>




          <label>
            <select className={styles.button} name="ensino" value={Turma} onChange={handleTurmaChange}>
              <option value="">EF2</option>
              <option value="6%25A%25">6º Ano A</option>
              <option value="6%25B%25">6º Ano B</option>
              <option value="7%25A%25">7º Ano A</option>
              <option value="7%25B%25">7º Ano B</option>
              <option value="8%25A%25">8º Ano A</option>
              <option value="8%25B%25">8º Ano B</option>
              <option value="9%25A%25">9º Ano A</option>
              <option value="9%25B%25">9º Ano B</option>
            </select>
          </label>


          <label>
            <select className={styles.button} name="ensino" value={Turma} onChange={handleTurmaChange}>
              <option value="">EM</option>
              <option value="1%25A%25">1º Ano A</option>
              <option value="1%25B%25">1º Ano B</option>
              <option value="2%25E.M">2º Ano</option>
              <option value="3%25E.M">3º Ano</option>
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
              <option value="DESBRAVA">DESBRAVENEM</option>
            </select>
          </label>


          <div className={styles.ano}>
            <label>Ano</label>
            <input className={styles.input} value={ano} type='number' onChange={handleAnoChange} name="ano" />
          </div>

          <input
          type="number"
          placeholder="Nota"
          value={notaExt}
          onChange={(e) => setNotaExt(e.target.value)}
          className={styles.input}
        />

        </div>

        <button type="submit" className={styles.button} disabled={!Turma || !etapa || !ano || !tipoprova}>Criar</button>
      </form>
    </div>
  );
}