"use client";
import React, { useState, useRef, useEffect } from 'react';
import style from "./page.module.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { render } from 'react-dom';
import Link from 'next/link';


const Home = () => {
  const [ensinoTurma, setEnsinoTurma] = useState(''); // add state for each select
  const [etapa, setEtapa] = useState('');
  const [ano, setAno] = useState('');
  const descricaoRef = useRef(null);

  useEffect(() => {
    if (descricaoRef.current) {
      descricaoRef.current.innerHTML = '';
    }
  }, []);


  const getFilter = async () => {
  

    if (!ensinoTurma || !etapa || !ano) {
      alert('Por favor, selecione todas as opções!');
      return; // Interrompe a execução da função se algum campo estiver vazio
    }

    
    if (ensinoTurma && etapa && ano) {
      const url = `http://localhost:3001/avaliasesi/${etapa}/${ensinoTurma}/${ano}`;  //http://localhost:3001/avaliasesi/1S/3%25E.M/2024
      console.log(`Constructed URL: ${url}`);
      console.log('Current state:', etapa, ensinoTurma, ano);

      try {
        const response = await fetch(url);
        console.log(response);
        const resData = await response.json();
        console.log(resData);

        // Create a table element
        // Create a table element

        const table = document.createElement('table');
        table.className = style.table; 
        // Verifique se a classe foi adicionada
        // add a border to the table

        // Create a header row
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
      alert('Por favor, selecione todas as opções!');
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

  // const [filter, setFilter] = useState({
  //   ensino: '',
  //   etapa: '',
  //   ano: '',
  // });

 

  // const handleFilterChange = (e) => {
  //   const { name, value } = e.target;
  //   setFilter((prevFilter) => ({
  //     ...prevFilter,
  //     [name]: value,
  //   }));

  //   // Atualiza as etapas disponíveis com base no ensino selecionado
  //   if (name === 'ensino') {
  //     setFilter((prevFilter) => ({
  //       ...prevFilter,
  //       etapa: '', // Reseta a etapa ao mudar o ensino
  //     }));
  //     setAvailableEtapas(getEtapas(value));
  //   }
  // };



  // const handleFilter = () => {
  //   const newFilteredStudents = studentsData.filter((student) =>
  //     (filter.ensino ? student.ensino === filter.ensino : true) &&
  //     (filter.etapa ? student.etapa === filter.etapa : true) &&
  //     (filter.ano ? student.ano === filter.ano : true)
  //   );
  //   setFilteredStudents(newFilteredStudents);
  // };

  return (
    <>
      <Header />

      <h1 className={style.text}>Avalia Sesi</h1>

      <div className={style.filtro}>
        <label>
          <select className={style.button} name="ensino" value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
            <option value="">EF1</option>
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


        <label>
          <select className={style.button} name="etapa" onChange={handleEtapaChange} value={etapa}>
            <option value="">Etapa</option>
            <option value="1S">1</option>
            <option value="2S">2</option>
            <option value="3S">3</option>
          </select>
        </label>

        <div className={style.ano}>
          <label>Ano</label>
          <input className={style.input} value={ano} type='number' onChange={handleAnoChange} name="ano" />
        </div>



<button className={style.button} onClick={getFilter} >Filtrar</button>


        
      <Link  href="https://app.powerbi.com/home?experience=power-bi&culture=pt-br&country=br&ScenarioId=Signup" className={style.button}>Power BI</Link>     



      </div>

     
        <div className={style.table} id='descricao' ref={descricaoRef} />
        
              <div className={style.footer}>

      <Footer />
      </div>

    </>
  );
};

export default Home;