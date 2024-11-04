"use client";
import React, { useState, useRef, useEffect } from 'react';
import style from "./page.module.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const [Turma, setTurma] = useState(''); // add state for each select
  const [etapa, setEtapa] = useState('');
  const [ano, setAno] = useState('');
  const [tipoprova, setTipoprova] = useState('');
  const descricaoRef = useRef(null);


  useEffect(() => {
    if (descricaoRef.current) {
      descricaoRef.current.innerHTML = '';
    }
  }, []);




  const getFilter = async () => {
    if (Turma && etapa && ano && tipoprova ) {
      const url = `http://localhost:3001/avalia/${etapa}/${Turma}/${ano}/${tipoprova}`;  //http://localhost:3001/avaliasesi/1S/3%25E.M/2024
      console.log(`Constructed URL: ${url}`);
      console.log('Current state:', etapa, Turma, ano, tipoprova);


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
        // add a border to the table// Create a header row
        const headerRow = table.insertRow(0);
        const headers = Object.keys(resData[0]);
        headers.forEach((header, index) => {
          const th = document.createElement('th');
          if (header === 'rm') {
            th.innerHTML = 'RM';
          } else if (header === 'NomeAluno') {
            th.innerHTML = 'Nome do Aluno';
          }
          else if (header === 'notaExt') {
            th.innerHTML = 'Nota';
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
            }else {
              cell.innerHTML = item[header];
            }
          });
        });


        // Add the table to the #descricao divdocument.getElementById("descricao").innerHTML = '';
        document.getElementById("descricao").appendChild(table);
      } catch (error) {
        console.log('error', error);
      }
    } else {
      console.log('Please select all options');
    }
  }


  // add event handlers for each select
  const handleTurmaChange = (e) => {
    console.log('etapa changed:', e.target.value);
    setTurma(e.target.value);
  }


  const handleEtapaChange = (e) => {
    console.log('ensinoTurma changed:', e.target.value);
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
    <>
      <Header />
      <div className={style.filtro}>
        <label>
          <select className={style.button} name="ensino" value={Turma} onChange={handleTurmaChange}>
            <option value="">EF1</option>
            <option value="3%25E.F">3º Ano</option>
            <option value="4%25E.F">4º Ano</option>
            <option value="5%25E.F">5º Ano</option >
          </select>
        </label>




        <label>
          <select className={style.button} name="ensino" value={Turma} onChange={handleTurmaChange}>
            <option value="">EF2</option>
            <option value="6%25A%25">6º Ano A</option>
            <option value="6%25B%25">6º Ano B</option>
            <option value="7%25A%25">7º Ano A</option>
            <option value="7%25B%25">7º Ano B</option>
            <option value="8%25A%25">8º Ano A</option><option value="8%25B%25">8º Ano B</option>
            <option value="9%25A%25">9º Ano A</option>
            <option value="9%25B%25">9º Ano B</option>
          </select>
        </label>


        <label>
          <select className={style.button} name="ensino" value={Turma} onChange={handleTurmaChange}>
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

        <label>
          <select className={style.button} name="etapa" onChange={handleTipoprovaChange} value={tipoprova}>
            <option value="">Tipo de Prova</option>
            <option value="SARESP">SARESP</option>
            <option value="DESBRAVA">DESBRAVENEM</option>
          </select>
        </label>


        <div className={style.ano}>
          <label>Ano</label>
          <input className={style.input} value={ano} type='number' onChange={handleAnoChange} name="ano" />
        </div>






        <button className={style.button} onClick={getFilter} disabled={!Turma || !etapa || !ano || !tipoprova}>Filtrar</button>




      </div>


      <h1 className={style.text}>Avalia Externa</h1>

      <div className={style.table} id='descricao' ref={descricaoRef} />

      <div className={style.footer}>

        <Footer />
      </div>


    </>
  );
};


export default Home;