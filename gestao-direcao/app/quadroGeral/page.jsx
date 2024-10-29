"use client";
import React, { useState } from 'react';
import style from "./page.module.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';



const Home = () => {
  
  const [Turma, setEnsinoTurma] = useState(''); // add state for each select
  const [etapa, setEtapa] = useState('');
  const [Ano, setAno] = useState('');

  const [tabela1Data, setTabela1Data] = useState([]);
  const [tabela2Data, setTabela2Data] = useState([]);
  const [tabela3Data, setTabela3Data] = useState([]);

  const getFilter = async () => {
    if (Turma && etapa && Ano) {
      try {
        // URLs para as três tabelas
        const urls = [
          `http://localhost:3001/tabelageralef1/${etapa}/${Turma}/${Ano}`,
          `http://localhost:3001/tabelageralef2/${etapa}/${Turma}/${Ano}`,
          `http://localhost:3001/tabelageralem/${etapa}/${Turma}/${Ano}`
        ];

        // Fazendo as chamadas de forma assíncrona
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));

        setTabela1Data(data[0]);
        setTabela2Data(data[1]);
        setTabela3Data(data[2]);
        // Create a table element
        // Create a table element
        const table = document.createElement('table');
        table.className = style.table;// add a border to the table

      } catch (error) {
        console.log('error', error);
      }
    } else {
      console.log('Please select all options');
    }
  };

  const renderTable = (data) => {
    if (!data.length) return null;

    const headers = Object.keys(data[0]);
    return (
      <table className={style.table}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {headers.map((header, index) => (
                <td key={index}>{item[header] === null ? "Não informado" : item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  

  
  }

  // add event handlers for each select
  const handleEnsinoTurmaChange = (e) => {
    console.log('etapa changed:', e.target.value);
    setEnsinoTurma(e.target.value);
  }

  const handleEtapaChange = (e) => {
    console.log('Turma changed:', e.target.value);
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
          <select className={style.button} name="ensino" value={Turma} onChange={handleEnsinoTurmaChange}>
            <option value="">EF1</option>
            <option value="3%25E.F">3º Ano</option>
            <option value="4%25E.F">4º Ano</option>
            <option value="5%25E.F">5º Ano</option >
          </select>


          <select className={style.button} name="ensino" value={Turma} onChange={handleEnsinoTurmaChange}>
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

          <select className={style.button} name="ensino" value={Turma} onChange={handleEnsinoTurmaChange}>
            <option value="">EM</option>
            <option value="1%25A%25">1º Ano A</option>
            <option value="1%25B%25">1º Ano B</option>
            <option value="2%25E.M">2º Ano</option>
            <option value="3%25E.M">3º Ano</option>

          </select>


        </label>


        <label>
          <select className={style.button} name="etapa" onChange={handleEtapaChange} value={etapa}>
            <option value="">Selecione</option>
            <option value="1S">1</option>
            <option value="2S">2</option>
            <option value="3S">3</option>
          </select>
        </label>

        <div className={style.ano}>
          <label>Ano</label>
          <input className={style.input} value={Ano} type='number' onChange={handleAnoChange} name="ano" />
        </div>

        <button onClick={getFilter} disabled={!Turma || !etapa || !Ano}>
          Filtrar
        </button>


      </div>

      <h1 className={style.text}>Quadro geral</h1>

     

        {renderTable(tabela1Data)}

        {renderTable(tabela2Data)}

       
        {renderTable(tabela3Data)}

        
      
      <Footer />
    </>
  );
};

export default Home;