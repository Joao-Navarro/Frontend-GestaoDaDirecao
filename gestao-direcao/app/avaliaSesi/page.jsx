"use client"
import { useState } from 'react';
import style from "./page.module.css"
import Header from '@/components/Header';
import Footer from '@/components/Footer';

<header/>
const studentsData = [
  { aluno: 'João', rm: '123', estapa: '1' },
  { aluno: 'Maria', rm: '456', estapa: '2'},
  { aluno: 'Pedro', rm: '789', estapa: '3'},
  { aluno: 'Ana', rm: '101', estapa: '1'},
  { aluno: 'Lucas', rm: '202', estapa: '2'},
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
            <option value1="fundamental1">3°</option>
            <option value2="fundamental1">4°</option>
            <option value3="fundamental1">5°</option>
          </select>
        </label>
        <label>
          <select className={style.button} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
            <option value4="">Ensino Fundamental 2</option>
            <option value5="fundamental2">6º</option>
            <option value6="fundamental2">7°A</option>
            <option value7="fundamental2">7°B</option>
            <option value8="fundamental2">8°A</option>
            <option value9="fundamental2">8°B</option>
            <option value10="fundamental2">9ºA</option>
            <option value11="fundamental2">9ºB</option>
          </select>
        </label>
        <label>
          <select className={style.button} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
            <option value12="">Ensino Medio</option>
            <option value13="medio">1ºA</option>
            <option value14="medio">1ºB</option>
            <option value15="medio">2º</option>
            <option value16="medio">3º</option>
          </select>
        </label>

        <label>
          <select className={style.button} name="etapa" onChange={handleFilterChange} value={filter.etapa}>
            <option value="">Etapa</option>
            <option value1="etapa">1º</option>
            <option value2="etapa">2º</option>
            <option value3="etapa">3º</option>
          </select>
        </label>

        <div className={style.ano}>
        
        <label>Ano</label>
        
          <input className={style.input} value={filter.ano} type='number'/>
        
        </div>

        <button className={style.button} onClick={handleFilter}>Filtrar</button>
       
        </div>
       
        
        <h1 className={style.text}>Avalia Sesi</h1>
        
      

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