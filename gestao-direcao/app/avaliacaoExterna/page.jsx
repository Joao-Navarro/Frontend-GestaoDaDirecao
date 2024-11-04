'use client';

import Link from 'next/link';
import { SiGoogleclassroom } from "react-icons/si";
import { MdNoteAdd } from "react-icons/md";
import styles from './page.module.css';  // Importando o CSS Module
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (

    
    <div className={styles.container}>
      <Header/>
      <h1 className={styles.h1}>Bem-vindo a Sessão Avaliação Externa </h1>

      <div className={styles.links}>
        {/* Link para Listar Usuários */}
        <div className={styles.linkItem}>
        <Link href="/avaliacaoExterna/users">
            <SiGoogleclassroom  size={250} className={styles.icon} />
            <p>Listar Uma Turma</p>
        </Link>
        </div>



        {/* Link para Criar Novo Usuário */}
        <div className={styles.linkItem}>
        <Link href="/avaliacaoExterna/users/create">
           <MdNoteAdd size={250} className={styles.icon} />
            <p>Lançar uma Nota</p>
        </Link>
        </div>

      </div>
      <Footer/>
    </div>
  );
}