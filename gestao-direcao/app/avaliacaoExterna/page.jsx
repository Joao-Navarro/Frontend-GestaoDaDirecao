// "use client"
// import { useState } from 'react';
// import style from "./page.module.css"
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// <header/>
// const studentsData = [
//   { aluno: 'João', rm: '123',nota:'4', },
//   { aluno: 'Maria', rm: '456',nota:'7',},
//   { aluno: 'Pedro', rm: '789', nota:'9',},
//   { aluno: 'Ana', rm: '101',nota:'6',},
//   { aluno: 'Lucas', rm: '202',nota:'8',},
// ];

// const Home = () => {
//   const [filter, setFilter] = useState({
//     ensino: '',
//     etapa: '',
//     ano: '',
//   });

//   const [filteredStudents, setFilteredStudents] = useState(studentsData);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilter((prevFilter) => ({
//       ...prevFilter,
//       [name]: value,
//     }));
//   };

//   const handleFilter = () => {
//     // Simulação de filtro baseado nos valores. Adapte conforme necessário.
//     const newFilteredStudents = studentsData.filter((student) =>
//       (filter.ensino ? student.ensino === filter.ensino : true) &&
//       (filter.etapa ? student.etapa === filter.etapa : true) &&
//       (filter.ano ? student.ano === filter.ano : true)
//     );
//     setFilteredStudents(newFilteredStudents);
//   };

//   return (
//     <>

//         <Header/>

//       <div className={style.filtro}>
//         <label>
//           <select className={style.button} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
//             <option value="fundamental1">Ensino Fundamental 1</option>
//             <option value4="fundamental1">3°</option>
//             <option value5="fundamental1">4°</option>
//             <option value6="fundamental1">5°</option>
//           </select>
//         </label>
//         <label>
//           <select className={style.button} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
//             <option value="">Ensino Fundamental 2</option>
//             <option value2="fundamental2">6º</option>
//             <option value3="fundamental2">7°A</option>
//             <option value4="fundamental2">7°B</option>
//             <option value5="fundamental2">8°A</option>
//             <option value6="fundamental2">8°B</option>
//             <option value7="fundamental2">9ºA</option>
//             <option value8="fundamental2">9ºB</option>
//           </select>
//         </label>
//         <label>
//           <select className={style.button} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
//             <option value="">Ensino Medio</option>
//             <option value2="medio">1ºA</option>
//             <option value3="medio">1ºB</option>
//             <option value4="medio">2º</option>
//             <option value5="medio">3º</option>
//           </select>
//         </label>


//         <label>
//           <select className={style.button} name="Tipo de prova" onChange={handleFilterChange} value={filter.tipodeprova}>
//             <option value="">Tipo de Prova</option>
//             <option value2="medio">Saresp</option>
//             <option value3="medio">Canguru</option>
//             <option value4="medio">Desbrava ENEM</option>

//           </select>
//         </label>

//         <label>
//           <select className={style.button} name="etapa" onChange={handleFilterChange} value={filter.etapa}>
//             <option value="">Etapa</option>
//             <option value2="etapa">1º</option>
//             <option value3="etapa">2º</option>
//             <option value4="etapa">3º</option>
//           </select>
//         </label>

//         <div className={style.ano}>
        
//         <label>Ano</label>

//           <input className={style.input} type="number"/>
        
//         </div>
        
//         <button className={style.button} onClick={handleFilter}>Filtrar</button>
       
//         </div>
       
        
//         <h1 className={style.text}>Avaliação Externa</h1>
        
      

//       <div className="info">
//       <table className={style.table}>
//         <thead>
//           <tr>
//             <th className={style.th}>Aluno</th>
//             <th className={style.th}>RM</th>
//             <th className={style.th}>Nota</th>
           
//           </tr>
//         </thead>
//         <tbody>
//           {filteredStudents.map((student, index) => (
//             <tr key={index}>
//               <td className={style.td}>{student.aluno}</td>
//               <td className={style.td}>{student.rm}</td>
//               <td className={style.td}>{student.Nota}</td>
       
//             </tr>
//           ))}
//         </tbody>
//       </table> 

//       <div className={style.botao}>
//         <button className={style.button} onClick={() => alert('Ação não implementada!')}>Editar</button>
//         <button className={style.button} onClick={() => alert('Ação não implementada!')}>Salvar</button>
//       </div>

//       </div>

//             <Footer/>

//     </>
    
//   );

// };

// export default Home;



"use client";
import { useState } from 'react';
import style from "./page.module.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const studentsData = [
  { aluno: 'João', rm: '123', etapa: '3', ano: '2023', nota: '8.5', ensino: '1°A', tipodeprova: 'Saresp' },
  { aluno: 'Maria', rm: '456', etapa: '2', ano: '2024', nota: '9.0', ensino: '1°B', tipodeprova: 'Saresp' },
  { aluno: 'Pedro', rm: '789', etapa: '3', ano: '2025', nota: '7.0', ensino: '2°', tipodeprova: 'Canguru' },
  { aluno: 'Ana', rm: '101', etapa: '1', ano: '2026', nota: '6.5', ensino: '3°EM', tipodeprova: 'Desbrava ENEM' },
  { aluno: 'Lucas', rm: '202', etapa: '2', ano: '2027', nota: '9.5', ensino: '4°', tipodeprova: 'Saresp' },
];

const Home = () => {
  const [filter, setFilter] = useState({
    ensino: '',
    etapa: '',
    ano: '',
    tipodeprova: '',
  });

  const [filteredStudents, setFilteredStudents] = useState(studentsData);
  const [availableEtapas, setAvailableEtapas] = useState([]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));

    // Update available stages based on selected education
    if (name === 'ensino') {
      setFilter((prevFilter) => ({
        ...prevFilter,
        etapa: '', // Reset etapa when changing ensino
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
      (filter.ano ? student.ano === filter.ano : true) &&
      (filter.tipodeprova ? student.tipodeprova === filter.tipodeprova : true)
    );
    setFilteredStudents(newFilteredStudents);
  };

  return (
    <>
      <Header />
      <div className={style.filtro}>
        <label>
          <select className={style.button} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
            <option value=""> Ensino Fundamental 1</option>
            <option value="3°">3°</option>
            <option value="4°">4°</option>
            <option value="5°">5°</option>
          </select>
        </label>
        <label>
          <select className={style.button} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
            <option value="">Ensino Fundamental 2</option>
            <option value="6°">6°</option>
            <option value="7°A">7°A</option>
            <option value="7°B">7°B</option>
            <option value="8°A">8°A</option>
            <option value="8°B">8°B</option>
            <option value="9°A">9°A</option>
            <option value="9°B">9°B</option>
          </select>
        </label>
        <label>
          <select className={style.button} name="ensino" onChange={handleFilterChange} value={filter.ensino}>
            <option value="">Ensino Médio</option>
            <option value="1°A">1°A</option>
            <option value="1°B">1°B</option>
            <option value="2°EM">2°EM</option>
            <option value="3°EM">3°EM</option>
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


        <label>
          <select className={style.button} name="tipodeprova" onChange={handleFilterChange} value={filter.tipodeprova}>
            <option value="">Tipo de Prova</option>
            <option value="Saresp">Saresp</option>
            <option value="Canguru">Canguru</option>
            <option value="Desbrava ENEM">Desbrava ENEM</option>
          </select>
        </label>

        <div className={style.ano}>
          <label>Ano</label>
          <input className={style.input} value={filter.ano} type='number' onChange={handleFilterChange} name="ano" />
        </div>

        <button className={style.button} onClick={handleFilter}>Filtrar</button>
      </div>

      <h1 className={style.text}>Avaliação Externa</h1>

      <div className="info">
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style.th}>Aluno</th>
              <th className={style.th}>RM</th>
              <th className={style.th}>NOTA</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td className={style.td}>{student.aluno}</td>
                <td className={style.td}>{student.rm}</td>
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


