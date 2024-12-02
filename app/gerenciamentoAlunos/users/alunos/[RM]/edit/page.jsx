'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa o useRouter
import styles from './page.module.css';
import Header from '@/components/Header';

export default function EditUserPage({ params }) {
    const router = useRouter(); // Inicializa o useRouter
    const [msgErro, setMsgErro] = useState('');
    const [user, setUser] = useState({
        etapa: '',
        ano: '',
        tipoprova: params.tipoprova || '',
        notaExt: '',
        rm: ''
    });

    useEffect(() => {
        fetchUser();
    }, [fetchUser]); // Adicione fetchUser como dependência


    const fetchUser = async () => {
        const res = await fetch(`http://localhost:3001/alunos/${params.RM}`);
        const data = await res.json();
        setUser(data);
    };

    const updateUser = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3001/alunos/${params.RM}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error('Erro ao atualizar usuário');
            }

            // Limpar os valores do formulário
            setUser({
                Ano: '',
                Turma: '',
                NomeAluno: '',
                RM: ''
            });

            // Redirecionar para outra página após a atualização
            router.push('/gerenciamentoAlunos/users'); // Substitua pelo caminho desejado
        } catch (error) {
            setMsgErro('Erro ao carregar tabela')
            setTimeout(() => setMsgErro(''), 3000)
        }
    };

    return (
        <>

            {msgErro && (
                <div className={styles.msgErro}>
                    {msgErro}
                </div>)}

            <Header />

            <div className={styles.container}>
                <h1 className={styles.text}>Editar Aluno</h1>
                <form onSubmit={updateUser} className={styles.form}>

                    <label for='NomeALuno'>Nome do Aluno</label>
                    <input
                        id='NomeALuno'
                        type="Text"
                        placeholder="Nome do Aluno"
                        value={user.NomeAluno}
                        onChange={(e) => setUser({ ...user, NomeAluno: e.target.value })}
                        className={styles.input}
                    />

                    <label for='Turma'></label>
                    <select
                        id='Turma'
                        className={styles.input}
                        value={user.Turma}
                        onChange={(e) => setUser({ ...user, Turma: e.target.value })}
                    >                            <option value="">Turma</option>
                        <option value="1EF">1º Ano</option>
                        <option value="2EF">2º Ano</option>
                        <option value="3EF">3º Ano</option>
                        <option value="4EF">4º Ano</option>
                        <option value="5EF">5º Ano</option >
                        <option value="6A">6º Ano A</option>
                        <option value="6B">6º Ano B</option>
                        <option value="7A">7º Ano A</option>
                        <option value="7B">7º Ano B</option>
                        <option value="8A">8º Ano A</option>
                        <option value="8B">8º Ano B</option>
                        <option value="9A">9º Ano A</option>
                        <option value="9B">9º Ano B</option>
                        <option value="1AEM">1º Ano A</option>
                        <option value="1BEM">1º Ano B</option>
                        <option value="2AEM">2º Ano A</option>
                        <option value="2BEM">2º Ano B</option>
                        <option value="3AEM">3º Ano A</option>
                        <option value="3BEM">3º Ano B</option>

                    </select>


                    <label for='Ano'>Ano</label>
                    <input
                        id='ANo'
                        type="Number"
                        placeholder="Ano"
                        value={user.Ano}
                        onChange={(e) => setUser({ ...user, Ano: e.target.value })}
                        className={styles.input}
                    />

                    <button type="submit" className={styles.button}>Salvar</button>
                </form>
            </div>

        </>
    );
}