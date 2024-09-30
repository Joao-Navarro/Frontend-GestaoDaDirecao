"use client";
import { useState } from 'react';
import style from "./page.module.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const studentsData = [
  { aluno: 'João', rm: '123', etapa: '3', ano: '2023', nota: '8.5', ensino: '5°' },
  { aluno: 'Maria', rm: '456', etapa: '4', ano: '2024', nota: '9.0', ensino: '6°' },
  { aluno: 'Pedro', rm: '789', etapa: '5', ano: '2025', nota: '7.0', ensino: '7°A' },
  { aluno: 'Ana', rm: '101', etapa: '1', ano: '2026', nota: '6.5', ensino: '3°' },
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
      case '1ºA':
      case '1ºB':
      case '2º':
      case '3º':
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
      <Footer />
    </>
  );
};

export default Home;
