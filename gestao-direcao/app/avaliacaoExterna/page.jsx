
"use client"
import { useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
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




      <Header />

      <div className={styles.body}>
        
        <h1 className={styles.titulo}>AVALIAÇÕES EXTERNAS</h1>

        <div className={styles.button}>

            <label>

              <select className={styles.teste} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
                <option value=""> Ensino Fundamental 1</option>
                <option value1="fundamental1">3ºano</option>
                <option value2="fundamental1">4ºano</option>

                <option value3="fundamental1">5ºano</option>

              </select>
            </label>
            
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


            </label>

            <label>
              <select className={styles.teste} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
                <option value="">Ensino Médio</option>
                <option value1="fundamental2">1ºano A </option>
                <option value1="fundamental2">1ºano B </option>
                <option value2="fundamental2">2ºano </option>
                <option value3="fundamental2">3ºano </option>
              </select>
            </label>

            <label>
              <select className={styles.teste} name="etapa" onChange={handleFilterChange} value={filter.etapa}>
                <option value="">Etapa</option>

                <option value1="etapa">1 etapa </option>
                <option value2="etapa">2 etapa </option>
                <option value3="etapa">3 etapa </option>
              </select>
            </label> 

            <select className={styles.teste} name="Tipo de prova" onChange={handleFilterChange} value={filter.prova}>
              <option value="">Tipo de prova</option>
              <option value1="prova 1">Desbrava Enem</option>
              <option value2="prova 2">Saresp</option>
              <option value3="prova 3">Canguru</option>
              </select>


          <div className={styles.teste}>
            <label>
              Ano:
              <input className={styles.input} type="number" name="ano" />
            </label>
            
            </div>

       
          <button className={styles.teste} onClick={handleFilter}>Filtrar</button>
         
        </div>
        
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Aluno</th>
              <th className={styles.th}>RM</th>

            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td className={styles.td}>{student.aluno}</td>
                <td className={styles.td}>{student.rm}</td>

              </tr>
            ))}
          </tbody>
        </table>



      <Footer />

    </>

  );

};
export default Home;
