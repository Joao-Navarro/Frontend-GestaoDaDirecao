
"use client";
import React, { useState, useRef, useEffect } from 'react';
import style from "./page.module.css";
import Header from '@/components/Header';
import Link from 'next/link';




const Home = () => {
  const [ensinoTurma, setEnsinoTurma] = useState(''); // add state for each select
  const [ano, setAno] = useState('');
  const [sala, setSala] = useState('')
  const descricaoRef = useRef(null);
  const [msgSucesso, setMsgSucesso] = useState('');
  const [msgErro, setMsgErro] = useState('');
  const [data, setData] = useState([]);


  useEffect(() => {
    if (descricaoRef.current) {
      descricaoRef.current.innerHTML = '';
    }
  }, []);

  const getFilter = async () => {
    if (ensinoTurma && ano) {
      const url = `https://api-gestao-da-direcao.onrender.com/alunos/${ensinoTurma}/${ano}`;  //http://localhost:3001/avaliasesi/1S/3%25E.M/2024
      console.log(`Constructed URL: ${url}`);
      console.log('Current state:', ensinoTurma, ano);

      try {
        const response = await fetch(url);
        console.log(response);
        const resData = await response.json();
        console.log(resData);

        if (Array.isArray(resData) && resData.length === 0) {
          setMsgErro('Erro ao carregar tabela')
          setTimeout(() => setMsgErro(''), 3000)
          setData([])
        } else {
          setMsgSucesso('Tabela carregada com sucesso!');
          setTimeout(() => setMsgSucesso(''), 3000)
          setData(resData)
        }


      } catch (error) {
        console.log('error', error);
      }

    } else {
      console.log('Please select all options');
    }

  }

  // add event handlers for each select
  const handleEnsinoTurmaChange = (e) => {
    console.log('etapa changed:', e.target.value);
    setEnsinoTurma(e.target.value);
  }

  const handleAnoChange = (e) => {
    console.log('ano changed:', e.target.value);
    setAno(e.target.value);
  }

  const handTurmaAno = (e) => {
    console.log('turma changed:', e.target.value);
    setSala(e.target.value);
  }

  return (
    <>

      {msgSucesso && (
        <div className={style.msgSucesso}>
          {msgSucesso}
        </div>)}
      {msgErro && (
        <div className={style.msgErro}>
          {msgErro}
        </div>)}

      <Header />

      <h1 className={style.text}>Listar Alunos</h1>

      <div className={style.filtro}>
        <label>
          <select className={style.button} name="ensino" value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
            <option value="">EF I</option>
            <option value="1EF">1º Ano</option>
            <option value="2EF">2º Ano</option>
            <option value="3EF">3º Ano</option>
            <option value="4EF">4º Ano</option>
            <option value="5EF">5º Ano</option >
          </select>
        </label>




        <label>
          <select className={style.button} name="ensino" value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
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
          <select className={style.button} name="ensino" value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
            <option value="">EM</option>
            <option value="1AEM">1º Ano A</option>
            <option value="1BEM">1º Ano B</option>
            <option value="2AEM">2º Ano A</option>
            <option value="2BEM">2º Ano B</option>
            <option value="3AEM">3º Ano A</option>
            <option value="3BEM">3º Ano B</option>
          </select>
        </label>

        <input value={ano} type='number' onChange={handleAnoChange} name="ano" placeholder='Ano' />



        <button className={style.button} onClick={getFilter} disabled={!ensinoTurma || !ano}>Filtrar</button>

      </div>

      <div className={style.tableAll} >
        <div className={style.table} id='descricao'>
          {data.length > 0 && (
            <table className={style.table}>
              <thead>
                <tr>
                  <th>RM</th>
                  <th>Nome do Aluno</th>
                  <th>Nota</th>
                  <th>Ano</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.rm}>
                    <td>{item.rm !== null ? item.rm : "Não informado"}</td>
                    <td>{item.nomealuno !== null ? item.nomealuno : "Não informado"}</td>
                    <td>{item.turma !== null ? item.turma : "Não informado"}</td>
                    <td>{item.ano !== null ? item.ano : "Não informado"}</td>
                    <Link href={`/gerenciamentoAlunos/users/alunos/${item.rm}/edit`} className={style.editLink}>
                      Editar
                    </Link>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>



      <div className={style.card}>

        <Link className={style.back} href='/gerenciamentoAlunos'> Voltar</Link>


      </div>



    </>


  );
};


export default Home;
