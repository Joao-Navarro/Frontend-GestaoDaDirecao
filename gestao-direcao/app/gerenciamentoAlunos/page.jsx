"use client";
import React, { useState } from 'react';
import style from "./page.module.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const [ensinoTurma, setEnsinoTurma] = useState(''); 
  const [ano, setAno] = useState('');

  const getFilter = async () => {
    if (ensinoTurma && ano) {
      const url = `http://localhost:3001/alunos/${ensinoTurma}/${ano}`
 console.log(`Constructed URL: ${url}`);
      console.log('Current state:', ensinoTurma, ano);

      try {
        const response = await fetch(url);
        console.log(response);
        const resData = await response.json();
        console.log(resData);

  
        const table = document.createElement('table');
        table.border = '1'; // add a border to the table


        const headerRow = table.insertRow(0);
        const headers = Object.keys(resData[0]);
        headers.forEach((header, index) => {
          const th = document.createElement('th');
          if (header === 'rm') {
            th.innerHTML = 'RM';
          } else if (header === 'Turma') {
            th.innerHTML = 'Turma';
          } else if (header === 'PorcentagemAcertoIngles') {
            th.innerHTML = 'Porcentagem Acerto Inglês';
          } else if (header === 'Ebep' || header === 'ComDeficiencia') {
            th.innerHTML = header.replace('Ebep', 'E.B.E.P').replace('ComDeficiencia', 'Com Deficiência');
          } else {
            th.innerHTML = header.replace('1S-', '1ª Etapa ').replace('2S-', '2ª Etapa ').replace('3S-', '3ª Etapa ').replace('CH', 'Ciências Humanas').replace('CN', 'Ciências Naturais').replace('LI', 'Língua Inglesa').replace('LP', 'Língua Portuguesa').replace('MAT', 'Matemática');
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

  const handleEnsinoTurmaChange = (e) => {
    console.log('etapa changed:', e.target.value);
    setEnsinoTurma(e.target.value);
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
          <select className={style.button} name="ensino" value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
            <option value="">EF1</option>
            <option value="1%25E.F">1º Ano</option>
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

      <h1 className={style.text}>Gerenciamento de Alunos</h1>

      <div className="info">
        <div className={style.table} id="descricao"></div>
        <div className={style.botao}>
          <button className={style.button} onClick={() => alert('Ação não implementada!')}>Editar</button>
          <button className={style.button} onClick={() => alert('Ação não implementada!')}>Salvar</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;