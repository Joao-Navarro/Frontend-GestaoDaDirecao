
"use client";
import React, { useState, useRef, useEffect } from 'react';
import style from "./page.module.css";
import Header from '@/components/Header';
import { render } from 'react-dom';




const Home = () => {
  const [ensinoTurma, setEnsinoTurma] = useState(''); // add state for each select
  const [ano, setAno] = useState('');
  const [sala, setSala] = useState('')
  const descricaoRef = useRef(null);


  useEffect(() => {
    if (descricaoRef.current) {
      descricaoRef.current.innerHTML = '';
    }
  }, []);




  const getFilter = async () => {
    if (ensinoTurma && ano) {
      const url = `http://localhost:3001/alunos/${ensinoTurma}/${ano}`;  //http://localhost:3001/avaliasesi/1S/3%25E.M/2024
      console.log(`Constructed URL: ${url}`);
      console.log('Current state:', ensinoTurma, ano);

      try {
        const response = await fetch(url);
        console.log(response);
        const resData = await response.json();
        console.log(resData);


        const table = document.createElement('table');
        table.className = style.table;


        const headerRow = table.insertRow(0);
        const headers = Object.keys(resData[0]);
        headers.forEach((header, index) => {
          const th = document.createElement('th');

          if (header === 'RM') {
            th.innerHTML = 'RM';
          }
          else if (header === 'NomeAluno') {
            th.innerHTML = 'Nome do aluno';
          }
          else if (header === 'Turma') {
            th.innerHTML = 'Turma';
          }
          else if (header === 'ano') {
            th.innerHTML = 'ano';
          }

          else if (header === 'Ano') {
            th.innerHTML = 'Ano';
          }
          else if (header === 'Ebep' || header === 'ComDeficiencia') {
            th.innerHTML = header.replace('Ebep', 'E.B.E.P').replace('ComDeficiencia', 'Com Deficiência');
          }
          headerRow.appendChild(th);
        });


        resData.forEach((item) => {
          const row = table.insertRow();
          headers.forEach((header) => {
            const cell = row.insertCell();
            if (item[header] === null) {
              cell.innerHTML = "Não informado";
            } else if (header === 'Ebep' || header === 'ComDeficiencia') {
              cell.innerHTML = item[header] === 'TRUE' ? 'Sim' : 'Não';
            } else {
              cell.innerHTML = item[header];
            }
          });
        });



        document.getElementById("descricao").innerHTML = '';
        document.getElementById("descricao").appendChild(table);
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
      <Header />

      <h1 className={style.text}>Gerenciamento de alunos</h1>

      <div className={style.filtro}>
        <label>
          <select className={style.button} name="ensino" value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
            <option value="">EF1</option>
            <option value="1%25E.F">1 Ano</option>
            <option value="2%25E.F">2º Ano</option>
            <option value="3%25E.F">3º Ano</option>
            <option value="4%25E.F">4º Ano</option>
            <option value="5%25E.F">5º Ano</option >
          </select>
        </label>




        <label>
          <select className={style.button} name="ensino" value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
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
          <select className={style.button} name="ensino" value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
            <option value="">EM</option>
            <option value="1%25A%25">1º Ano A</option>
            <option value="1%25B%25">1º Ano B</option>
            <option value="2%25E.M">2º Ano</option>
            <option value="3%25E.M">3º Ano</option>
          </select>
        </label>

        <div className={style.ano}>
          <label>Ano</label>
          <input className={style.input} value={ano} type='number' onChange={handleAnoChange} name="ano" />
        </div>



        <button className={style.button} onClick={getFilter} disabled={!ensinoTurma || !ano}>Filtrar</button>

      </div>




      <div style={{ overflow: 'auto' }} className={style.table} id='descricao' ref={descricaoRef} />

      <div className={style.card}>

      </div>


      <div className={style.footer}>
      </div>


    </>


  );
};


export default Home;
