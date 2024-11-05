"use client";
import React, { useState } from 'react';
import style from "./page.module.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const studentsData = [
];

const Home = () => {
  const [ensinoTurma, setEnsinoTurma] = useState(''); // add state for each select
  const [etapa, setEtapa] = useState('');
  const [ano, setAno] = useState('');

  const getFilter = async () => {
    if (ensinoTurma && etapa && ano) {
      const url = `http://localhost:3001/${ensinoTurma}/${etapa}/${ano};`  //http://localhost:3001/avaliasesi/1S/3%25E.M/2024
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

  const handleEtapaChange = (e) => {
    console.log('ensinoTurma changed:', e.target.value);
    setEtapa(e.target.value);
  }

  const handleAnoChange = (e) => {
    console.log('ano changed:', e.target.value);
    setAno(e.target.value);
  }

  const [filter, setFilter] = useState({
    ensino: '',
    etapa: '',
    ano: '',
  });

  const [filteredStudents, setFilteredStudents] = useState(studentsData);
  const [availableEtapas, setAvailableEtapas] = useState([]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));

    // Atualiza as etapas disponíveis com base no ensino selecionado
    if (name === 'ensino') {
      setFilter((prevFilter) => ({
        ...prevFilter,
        etapa: '', // Reseta a etapa ao mudar o ensino
      }));
      setAvailableEtapas(getEtapas(value));
    }
  };

  const getEtapas = (ensino) => {
    switch (ensino) {
      case '3°':
      case '4°':
      case '5°':
        return ['3', '4', '5'];
      case '6°':
      case '7°A':
      case '7°B':
        return ['6', '7A', '7B', '8A', '8B', '9A', '9B'];
      case '1°A':
      case '1°B':
      case '2°':
      case '3°':
        return ['1A', '1B', '2', '3'];
      default:
        return [];
    }
  };

  const handleFilter = () => {
    const newFilteredStudents = studentsData.filter((student) =>
      (filter.ensino ? student.ensino === filter.ensino : true) &&
      (filter.etapa ? student.etapa === filter.etapa : true) &&
      (filter.ano ? student.ano === filter.ano : true)
    );
    setFilteredStudents(newFilteredStudents);
  };

  return (
    <>
      <Header />
      <div className={style.filtro}>
        <label>
        <select className={style.button} value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
                <option value="">EF1</option>
                <option value="notasEF1/1%25E.F">1º Ano</option>
                <option value="notasEF1/2%25E.F">2º Ano</option>
                <option value="notasEF1/3%25E.F">3º Ano</option>
                <option value="notasEF1/4%25E.F">4º Ano</option>
                <option value="notasEF1/5%25E.F">5º Ano</option>
            </select>


          <select className={style.button} name="ensino" value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
            <option value="">EF2</option>
            <option value="notasEF2/6%25A%25">6º Ano A</option>
            <option value="notasEF2/6%25B%25">6º Ano B</option>
            <option value="notasEF2/7%25A%25">7º Ano A</option>
            <option value="notasEF2/7%25B%25">7º Ano B</option>
            <option value="notasEF2/8%25A%25">8º Ano A</option>
            <option value="notasEF2/8%25B%25">8º Ano B</option>
            <option value="notasEF2/9%25A%25">9º Ano A</option>
            <option value="notasEF2/9%25B%25">9º Ano B</option>
          </select>

          <select className={style.button} name="ensino" value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
            <option value="">EM</option>
            <option value="notasEM/1%25A%25">1º Ano A</option>
            <option value="notasEM/1%25B%25">1º Ano B</option>
            <option value="notasEM/2%25E.M">2º Ano</option>
            <option value="notasEM/3%25E.M">3º Ano</option>

          </select>


        </label>


        <label>
          <select className={style.button} name="etapa" onChange={handleEtapaChange} value={etapa}>
            <option value="">Etapa</option>
            <option value="%251etapa">1</option>
            <option value="%252etapa">2</option>
            <option value="%253etapa">3</option>
          </select>
        </label>

        <div className={style.ano}>
          <label>Ano</label>
          <input className={style.input} value={ano} type='number' onChange={handleAnoChange} name="ano" />
        </div>

        <button onClick={getFilter} disabled={!ensinoTurma || !etapa || !ano}>
          Filtrar
        </button>


       </div>

      <h1 className={style.text}>Avaliação Interna</h1>

      

      <div className="info">
      <div style={{ overflow: 'auto' }} className={style.table} id="descricao"></div>
     
     
      </div>
      <Footer />
    </>
  );
};

export default Home;