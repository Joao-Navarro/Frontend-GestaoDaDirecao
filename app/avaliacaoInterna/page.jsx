"use client";
import React, { useState } from 'react';
import style from "./page.module.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const [ensinoTurma, setEnsinoTurma] = useState(''); // add state for each select
  const [etapa, setEtapa] = useState('');
  const [ano, setAno] = useState('');
  const [msgSucesso, setMsgSucesso] = useState('');
  const [msgErro, setMsgErro] = useState('');

  const getFilter = async () => {
    if (ensinoTurma && etapa && ano) {
      const url = `https://api-gestao-da-direcao.onrender.com/${ensinoTurma}/${etapa}/${ano};`  //http://localhost:3001/avaliasesi/1S/3%25E.M/2024
      console.log(`Constructed URL: ${url}`);
      console.log('Current state:', ensinoTurma, etapa, ano);




      try {
        debugger

        const response = await fetch(url);
        console.log(response);
        const resData = await response.json();
        console.log(resData);

        // Create a table element
        // Create a table element
        const table = document.createElement('table');
        table.border = '1'; // add a border to the table

        // Create a header row
        const headerRow = table.insertRow(0);
        const headers = Object.keys(resData[0]);
        headers.forEach((header, index) => {
          const th = document.createElement('th');
          if (header === 'NomeAluno') {
            th.innerHTML = 'Nome do Aluno';
          } else {
            th.innerHTML = header.replace('1Etapa', '1ª Etapa ').replace('AR', 'Artes').replace('CCE', 'CCE').replace('CH', 'Ciências Humanas').replace('CN', 'Ciências Naturais').replace('EF', 'Educação Física').replace('LI', 'Língua Inglesa').replace('LP', 'Língua Portuguesa').replace('MAT', 'Matemática').replace('PF', 'Pensamento Filosófico').replace('PR', 'Programação').replace('PSC', 'PSC').replace('ROB', 'Robótica');
          }
          headerRow.appendChild(th);
        });

        // Create rows for each data item
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

        // Add the table to the #descricao div
        document.getElementById("descricao").innerHTML = '';
        document.getElementById("descricao").appendChild(table);

        setMsgSucesso('Tabela carregada');
        setTimeout(() => setMsgSucesso(''), 3000)

      }

      catch (error) {
        setMsgErro('Erro ao carregar tabela')
        setTimeout(() => setMsgErro(''), 3000)
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

  const handleEtapaChange = (e) => {
    console.log('ensinoTurma changed:', e.target.value);
    setEtapa(e.target.value);
  }

  const handleAnoChange = (e) => {
    console.log('ano changed:', e.target.value);
    setAno(e.target.value);
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

      <h1 className={style.text}>Avaliação Interna</h1>

      <div className={style.filtro}>
        <select className={style.button} value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
          <option value="">EF I</option>
          <option value="notasEF1/1EF">1º Ano</option>
          <option value="notasEF1/2EF">2º Ano</option>
          <option value="notasEFI/3EF">3º Ano</option>
          <option value="notasEFI/4EF">4º Ano</option>
          <option value="notasEFI/5EF">5º Ano</option >
        </select>


        <select className={style.button} name="ensino" value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
          <option value="">EF II</option>
          <option value="notasEF2/6A">6º Ano A</option>
          <option value="notasEF2/6B">6º Ano B</option>
          <option value="notasEF2/7A">7º Ano A</option>
          <option value="notasEF2/7B">7º Ano B</option>
          <option value="notasEF2/8A">8º Ano A</option>
          <option value="notasEF2/8B">8º Ano B</option>
          <option value="notasEF2/9A">9º Ano A</option>
          <option value="notasEF2/9B">9º Ano B</option>
        </select>

        <select className={style.button} name="ensino" value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
          <option value="">EM</option>
          <option value="notasEM/1AEM">1º Ano A</option>
          <option value="notasEM/1BEM">1º Ano B</option>
          <option value="notasEM/2AEM">2º Ano A</option>
          <option value="notasEM/2BEM">2º Ano B</option>
          <option value="notasEM/3AEM">3º Ano A</option>
          <option value="notasEM/3BEM">3º Ano B</option>

        </select>




        <label>
          <select className={style.button} name="etapa" onChange={handleEtapaChange} value={etapa}>
            <option value="">Etapa</option>
            <option value="%251etapa">1</option>
            <option value="%252etapa">2</option>
            <option value="%253etapa">3</option>
          </select>
        </label>


        <div className={style.ano}>
          <input
            className={style.input}
            value={ano}
            type='number'
            onChange={handleAnoChange}
            name="ano"
            placeholder='Ano' />
        </div>



        <button className={style.button} onClick={getFilter} disabled={!ensinoTurma || !etapa || !ano}>
          Filtrar
        </button>


      </div>





      <div className="info">
        <div style={{ overflow: 'auto' }} className={style.table} id="descricao"></div>


      </div>
    </>
  );
};

export default Home;