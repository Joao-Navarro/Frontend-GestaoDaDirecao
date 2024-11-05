'use client'
import Link from 'next/link'
import { MdGroupAdd } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import styles from './page.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className={styles.container}>

      <Header />

      <h1>Bem-vindo a Sessão de gerenciamento de alunos</h1>

      <div className={styles.links}>

        <div className={styles.linkItem}>
          <Link href="gerenciamentoAlunos/users">
            <MdGroupAdd size={250} className={styles.icon} />
            <p>Listar Alunos</p>
          </Link>
        </div>


        <div className={styles.linkItem}>
          <Link href="gerenciamentoAlunos/users/create">
            <MdGroups size={250} className={styles.icon} />
            <p>Adicionar Alunos</p>
          </Link>
        </div>
      </div>
    </div>
  );
}