"use client"
import { useState } from 'react';
import style from "./page.module.css"
import Header from '@/components/Header';
import Footer from '@/components/Footer';

<header/>
const studentsData = [
  { aluno: 'João', rm: '123', },
  { aluno: 'Maria', rm: '456',},
  { aluno: 'Pedro', rm: '789',},
  { aluno: 'Ana', rm: '101',},
  { aluno: 'Lucas', rm: '202',},
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

      <div className={style.filtro}>
        <label>
          <select className={style.button} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
            <option value="fundamental1">Ensino Fundamental 1</option>
            <option value2="fundamental1">1°</option>
            <option value3="fundamental1">2°</option>
            <option value4="fundamental1">3°</option>
            <option value5="fundamental1">4°</option>
            <option value6="fundamental1">5°</option>
          </select>
        </label>
        <label>
          <select className={style.button} name="etapa" onChange={handleFilterChange} value={filter.etapa}>
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
        <label>
          <select className={style.button} name="ano" onChange={handleFilterChange} value={filter.ano}>
            <option value="">Ensino Medio</option>
            <option value2="medio">1ºA</option>
            <option value3="medio">1ºB</option>
            <option value4="medio">2º</option>
            <option value5="medio">3º</option>
          </select>
        </label>

        <label>
          <select className={style.button} name="ano" onChange={handleFilterChange} value={filter.ano}>
            <option value="">Etapa</option>
            <option value2="etapa">1º</option>
            <option value3="etapa">2º</option>
            <option value4="etapa">3º</option>
          </select>
        </label>

        <div className={style.ano}>
        
        <label>Ano</label>
        
          <input className={style.input} type="number"/>
        
        </div>

        <button className={style.button} onClick={handleFilter}>Filtrar</button>
       
        </div>
       
        
        <h1 className={style.text}>Curso Técnico</h1>
        
      

      <div className="info">
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

      </div>

            <Footer/>

    </>
    
  );

};

export default Home;