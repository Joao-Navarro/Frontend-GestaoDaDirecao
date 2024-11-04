"use client";
import React, { useState } from 'react';
import style from "./page.module.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const studentsData = [
  { aluno: 'João', rm: '123', etapa: '3', ano: '2023', nota: '8.5', ensino: '1°A' },
  { aluno: 'Maria', rm: '456', etapa: '4', ano: '2024', nota: '9.0', ensino: '1°B' },
  { aluno: 'Pedro', rm: '789', etapa: '5', ano: '2025', nota: '7.0', ensino: '2°' },
  { aluno: 'Ana', rm: '101', etapa: '1', ano: '2026', nota: '6.5', ensino: '3°EM' },
  { aluno: 'Lucas', rm: '202', etapa: '2', ano: '2027', nota: '9.5', ensino: '4°' },
];

const Home = () => {
  const [ensinoTurma, setEnsinoTurma] = useState(''); // add state for each select
  const [etapa, setEtapa] = useState('');
  const [ano, setAno] = useState('');

  const getFilter = async () => {
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
        table.border = '1'; // add a border to the table

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
          <select className={style.button} name="ensino" value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
            <option value="">EF1</option>
            <option value="1%25E.F">1º Ano</option>
            <option value="2%25E.F">2º Ano</option>
            <option value="3%25E.F">3º Ano</option>
            <option value="4%25E.F">4º Ano</option>
            <option value="5%25E.F">5º Ano</option >
          </select>


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
            <option value="">Selecione</option>
            <option value="1S">1</option>
            <option value="2S">2</option>
            <option value="3S">3</option>
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

      <h1 className={style.text}>Avalia Sesi</h1>

      {/* <div className="info">
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style.th}>Aluno</th>
              <th className={style.th}>RM</th>
              <th className={style.th}>ETAPA</th>
              <th className={style.th}>ANO</th>
              <th className={style.th}>NOTA</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td className={style.td}>{student.aluno}</td>
                <td className={style.td}>{student.rm}</td>
                <td className={style.td}>{student.etapa}</td>
                <td className={style.td}>{student.ano}</td>
                <td className={style.td}>{student.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={style.botao}>
          <button className={style.button} onClick={() => alert('Ação não implementada!')}>Editar</button>
          <button className={style.button} onClick={() => alert('Ação não implementada!')}>Salvar</button>
        </div>
      </div> */}

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