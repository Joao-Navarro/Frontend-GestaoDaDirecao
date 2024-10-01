"use client";
import { useState } from 'react';
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
            <option value5="fundamental2">6°</option>
            <option value6="fundamental2">7°A</option>
            <option value7="fundamental2">7°B</option>
            <option value8="fundamental2">8°A</option>
            <option value9="fundamental2">8°B</option>
            <option value10="fundamental2">9°A</option>
            <option value11="fundamental2">9°B</option>
          </select>
        </label>
        <label>
          <select className={style.button} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
            <option value12="">Ensino Medio</option>
            <option value13="medio">1°A</option>
            <option value14="medio">1°B</option>
            <option value15="medio">2°EM</option>
            <option value16="medio">3°EM</option>
          </select>
        </label>


        <label>
          <select className={style.button} name="etapa" onChange={handleFilterChange} value={filter.etapa}>
            <option value="">Etapa</option>
            <option value1="etapa">1</option>
            <option value2="etapa">2</option>
            <option value3="etapa">3</option>
          </select>
        </label>


        <div className={style.ano}>
       
        <label>Ano</label>
       
        <input className={style.input} value={filter.ano} type='number' onChange={handleFilterChange} name="ano" />
       
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
              <th className={style.th}>LP</th>
              <th className={style.th}>MAT</th>
              <th className={style.th}>CN</th>
              <th className={style.th}>CH</th>
              <th className={style.th}>ART</th>
              <th className={style.th}>ING</th>
              <th className={style.th}>ROB</th>
              <th className={style.th}>EF</th>
              <th className={style.th}>PF</th>
              <th className={style.th}>CCE</th>
              <th className={style.th}>PROG</th>
              <th className={style.th}>PSC</th>
              <th className={style.th}>EIXO</th>
              <th className={style.th}>GEO</th>
              <th className={style.th}>HIST</th>
              <th className={style.th}>BIO</th>
              <th className={style.th}>QUIM</th>
              <th className={style.th}>FISICA</th>
              <th className={style.th}>EMP</th>
              <th className={style.th}>TPT</th>
              <th className={style.th}>SOCIO</th>
              <th className={style.th}>FILO</th>
              <th className={style.th}>TA</th>
              <th className={style.th}>TAB</th>
              <th className={style.th}>TAQ</th>

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
                <td className={style.td}>{student.art}</td>
                <td className={style.td}>{student.ing}</td>
                <td className={style.td}>{student.rob}</td>
                <td className={style.td}>{student.edfisica}</td>
                <td className={style.td}>{student.praticasfilosoficas}</td>
                <td className={style.td}>{student.cce}</td>
                <td className={style.td}>{student.prog}</td>
                <td className={style.td}>{student.psc}</td>
                <td className={style.td}>{student.eixo}</td>
                <td className={style.td}>{student.geo}</td>
                <td className={style.td}>{student.hist}</td>
                <td className={style.td}>{student.bio}</td>
                <td className={style.td}>{student.quim}</td>
                <td className={style.td}>{student.fisica}</td>
                <td className={style.td}>{student.emp}</td>
                <td className={style.td}>{student.tpt}</td>
                <td className={style.td}>{student.socio}</td>
                <td className={style.td}>{student.filo}</td>
                <td className={style.td}>{student.ta}</td>
                <td className={style.td}>{student.tab}</td>
                <td className={style.td}>{student.taq}</td>
              
              </tr>
            ))}
          </tbody>
        </table>


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
