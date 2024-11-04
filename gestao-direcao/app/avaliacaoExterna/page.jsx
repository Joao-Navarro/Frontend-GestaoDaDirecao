'use client';

import Link from 'next/link';
import { FaUsers, FaSearch, FaUserPlus } from 'react-icons/fa';
import styles from './page.module.css';  // Importando o CSS Module

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Bem-vindo à Aplicação CRUD</h1>

      <div className={styles.links}>
        {/* Link para Listar Usuários */}
        <Link href="/avaliacaoExterna/users">
          <div className={styles.linkItem}>
            <FaUsers size={80} className={styles.icon} />
            <p>Listar Usuários</p>
          </div>
        </Link>


        {/* Link para Criar Novo Usuário */}
        <Link href="/avaliacaoExterna/users/create">
          <div className={styles.linkItem}>
            <FaUserPlus size={80} className={styles.icon} />
            <p>Criar novo usuário</p>
          </div>
        </Link>
      </div>
    </div>
  );
}