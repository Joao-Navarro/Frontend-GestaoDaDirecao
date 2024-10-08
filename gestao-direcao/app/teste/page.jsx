'use client'
import React, { useState } from 'react';

const Home = () => {
    const [filtro, setFiltro] = useState(1);
    const [error, setError] = useState(null);
    const [ensinoTurma, setEnsinoTurma] = useState(''); // add state for each select
    const [etapa, setEtapa] = useState('');
    const [ano, setAno] = useState('');

    const getFilter = async () => {
        if (ensinoTurma && etapa && ano) {
            const url = `http://localhost:3001/${ensinoTurma}/${etapa}/${ano}`;
            console.log(`Constructed URL: ${url}`);
            console.log('Current state:', ensinoTurma, etapa, ano);

            try {
                const response = await fetch(url);
                console.log(response);
                const resData = await response.json();
                console.log(resData);

                // Create a table element
                const table = document.createElement('table');
                table.border = '1'; // add a border to the table

                // Create a header row
                const headerRow = table.insertRow(0);
                const headers = Object.keys(resData[0]);
                headers.forEach((header, index) => {
                    const th = document.createElement('th');
                    if (header === 'NomeAluno') {
                        th.innerHTML = 'Nome do Aluno';
                    } else {
                        th.innerHTML = header.replace('1Etapa', '1ª Etapa ').replace('AR', 'Artes').replace('CCE', 'CCE').replace('CH', 'Ciências Humanas').replace('CN', 'Ciências Naturais').replace('EF', 'Educação Física').replace('LI', 'Língua Inglesa').replace('LP', 'Língua Portuguesa').replace('MAT', 'Matemática').replace('PF', 'Pensamento Filosófico').replace('PR', 'Pensamento Religioso').replace('PSC', 'Psicologia').replace('ROB', 'Robótica');
                    }
                    headerRow.appendChild(th);
                });

                // Create rows for each data item
                // Create rows for each data item
                resData.forEach((item) => {
                    const row = table.insertRow();
                    headers.forEach((header) => {
                        const cell = row.insertCell();
                        if (item[header] === null) {
                            cell.innerHTML = "Não informado";
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
        console.log('EnsinoTurma changed:', e.target.value);
        setEnsinoTurma(e.target.value);
    }

    const handleEtapaChange = (e) => {
        console.log('Etapa changed:', e.target.value);
        setEtapa(e.target.value);
    }

    const handleAnoChange = (e) => {
        console.log('Ano changed:', e.target.value);
        setAno(e.target.value);
    }

    return (
        <div>
            <select value={ensinoTurma} onChange={handleEnsinoTurmaChange}>
                <option value="">EF1</option>
                <option value="notasEF1/1%25E.F">1º Ano</option>
                <option value="notasEF1/2%25E.F">2º Ano</option>
                <option value="notasEF1/3%25E.F">3º Ano</option>
                <option value="notasEF1/4%25E.F">4º Ano</option>
                <option value="notasEF1/5%25E.F">5º Ano</option>
            </select>


            <select value={etapa} onChange={handleEtapaChange}>
                <option value="">Selecione</option>
                <option value="%251etapa">1</option>
                <option value="%252etapa">2</option>
                <option value="%253etapa">3</option>
            </select>

            <select value={ano} onChange={handleAnoChange}>
                <option value="">Selecione</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
            </select>

            <button onClick={getFilter} disabled={!ensinoTurma || !etapa || !ano}>
                Get Filter
            </button>

            <div id="descricao"></div>
        </div>
    );
}

export default Home;