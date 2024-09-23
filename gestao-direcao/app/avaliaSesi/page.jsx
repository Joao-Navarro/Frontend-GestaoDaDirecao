"use client"
import { useState } from 'react';

import style from './page.module.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const studentsData = [
  { aluno: 'João', rm: '123', lp: 'A', mat: 'Matemática', cn: 'Biologia', ch: '10', ing: 'Inglês' },
  { aluno: 'Maria', rm: '456', lp: 'B', mat: 'História', cn: 'Química', ch: '15', ing: 'Espanhol' },
  { aluno: 'Pedro', rm: '789', lp: 'A', mat: 'Geografia', cn: 'Física', ch: '12', ing: 'Francês' },
  { aluno: 'Ana', rm: '101', lp: 'C', mat: 'Português', cn: 'Matemática', ch: '8', ing: 'Italiano' },
  { aluno: 'Lucas', rm: '202', lp: 'B', mat: 'Artes', cn: 'História', ch: '14', ing: 'Alemão' },
];
const Home = () => {
  const [filter, setFilter] = useState({
    ensino: '',
    etapa: '',
    ano: '',
  });


  const [filteredStudents, setFilteredStudents] = useState(studentsData);


  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };


  const handleFilter = () => {
    // Simulação de filtro baseado nos valores. Adapte conforme necessário.
    const newFilteredStudents = studentsData.filter((student) =>
      (filter.ensino ? student.ensino === filter.ensino : true) &&
      (filter.etapa ? student.etapa === filter.etapa : true) &&
      (filter.ano ? student.ano === filter.ano : true)
    );
    setFilteredStudents(newFilteredStudents);
  };


  return (
    <>
    
    <Header/>

      <div className={style.all}>
      
      <div className={style.filtro}>
        <label className={style.fund1}>
          <select className={style.test} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
            <option className={style.test} value="fundamental1">Ensino Fundamental 1</option>
            <option value2="fundamental1">1°</option>
            <option value3="fundamental1">2°</option>
            <option value4="fundamental1">3°</option>
            <option value5="fundamental1">4°</option>
            <option value6="fundamental1">5°</option>
          </select>
        </label>
        <label className={style.fund2}>
          <select className={style.test} name="etapa" onChange={handleFilterChange} value={filter.etapa}>
            <option value="">Ensino Fundamental 2</option>
            <option value2="fundamental2">6º</option>
            <option value3="fundamental2">7°A</option>
            <option value4="fundamental2">7°B</option>
            <option value5="fundamental2">8°A</option>
            <option value6="fundamental2">8°B</option>
            <option value7="fundamental2">9ºA</option>
            <option value8="fundamental2">9ºB</option>
          </select>
        </label>
        <label className={style.ensinoMedio}>
          <select className={style.test} name="ano" onChange={handleFilterChange} value={filter.ano}>
            <option value="">Ensino Medio</option>
            <option value2="medio">1ºA</option>
            <option value3="medio">1ºB</option>
            <option value4="medio">2º</option>
            <option value5="medio">3º</option>
          </select>
        </label>
        <label className={style.etapa}>
          <select className={style.test} name="etapa" onChange={handleFilterChange} value={filter.etapa}>
            <option value="">Etapa</option>
            <option value1="Etapa">1º ETAPA</option>
            <option value2="Etapa">2º ETAPA</option>
            <option value3="Etapa">3º ETAPA</option>
          </select>
        </label>

        <div className={style.ano}>
        <h1 className={style.test}>ANO:</h1>
        <input className={style.test} type="number"/>
        </div>

        <button className={style.test} onClick={handleFilter}>Filtrar</button>
        </div>
        </div>
      <h1 className={style.text}>AVALIA SESI</h1>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.th}>Aluno</th>
            <th className={style.th}>RM</th>
            <th className={style.th}>LP</th>
            <th className={style.th}>Mat</th>
            <th className={style.th}>CN</th>
            <th className={style.th}>CH</th>
            <th className={style.th}>ING</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td className={style.td}>{student.aluno}</td>
              <td className={style.td}>{student.rm}</td>
              <td className={style.td}>{student.lp}</td>
              <td className={style.td}>{student.mat}</td>
              <td className={style.td}>{student.cn}</td>
              <td className={style.td}>{student.ch}</td>
              <td className={style.td}>{student.ing}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer/>
     
    </>
  );


};


export default Home;



