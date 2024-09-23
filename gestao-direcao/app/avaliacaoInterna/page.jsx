"use client"
import { useState } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import styles from './page.module.css';




const studentsData = [
  { aluno: 'João', rm: '123' },
  { aluno: 'Maria', rm: '456',},
  { aluno: 'Pedro', rm: '789' },
  { aluno: 'Ana', rm: '101'},
  { aluno: 'Lucas', rm: '202',}
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





      <div className={style.body}>
        
        <h1 className={styles.titulo}>AVALIAÇÕES INTERNAS</h1>

        <div className={styles.button}>

          <div className={styles.botao1}>
            <label>

              <select className={styles.teste} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
                <option value=""> Ensino Fundamental 1</option>
                <option value1="fundamental1">3ºano</option>
                <option value2="fundamental1">4ºano</option>

                <option value3="fundamental1">5ºano</option>

              </select>
            </label></div>
          <div className={styles.botao2}>
            <label>



              <select className={styles.teste} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
                <option value="">Ensino Fundamental 2</option>
                <option value1="fundamental2">6ºano</option>
                <option value2="fundamental2">7ºano A</option>
                <option value3="fundamental2">7ºano B</option>
                <option value4="fundamental2">8ºano A</option>
                <option value5="fundamental2">8ºano B</option>
                <option value6="fundamental2">9ºano A</option>
                <option value7="fundamental2">9ºano B</option>

              </select>


            </label></div>

          <div className={styles.botao3}>
            <label>
              <select className={styles.teste} name="ensino" onChange={handleFilterChange} value={filter.ano}>
                <option value="">Ensino Médio</option>
                <option value1="fundamental2">1ºano A</option>
                <option value1="fundamental2">1ºano B</option>
                <option value2="fundamental2">2ºano </option>
                <option value3="fundamental2">3ºano </option>
              </select>
            </label></div>

          <div className={styles.botao4} >
            <label>
              <select className={styles.teste} name="etapa" onChange={handleFilterChange} value={filter.ano}>
                <option value="">Etapa</option>

                <option value1="etapa">1 etapa </option>
                <option value2="etapa">2 etapa </option>
                <option value3="etapa">3 etapa </option>
              </select>
            </label> </div>

          <div className={styles.botao1}>
            <label>
              Ano:
              <input className={styles.input} type="number" name="ano" />
            </label>
            
            </div>

       
          <button onClick={handleFilter}>Filtrar</button>
         
        </div>
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style.th}>Aluno</th>
              <th className={style.th}>RM</th>

            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td className={style.td}>{student.aluno}</td>
                <td className={style.td}>{student.rm}</td>

              </tr>
            ))}
          </tbody>
        </table>


      </div>


    </>

  );

};
export default Home;