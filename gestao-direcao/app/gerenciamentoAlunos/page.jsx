
'use client'

import Link from 'next/link'
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import styles from './page.module.css';
 
export default function HomePage() {
  return (
    <div className={styles.container}> 
      <h1>GERENCIAMENTO DE ALUNOS</h1>
      
      <div className={styles.links}>

      <div className={styles.linkItem}>
        <Link href="gerenciamentoAlunos/users">  
            <HiOutlinePlusCircle size={150} className={styles.icon} />
            <p>ADICIONAR</p>
        </Link>
        </div>
  

        <div className={styles.linkItem}>
        <Link href="gerenciamentoAlunos/users/create">
            <HiOutlineUserGroup size={150} className={styles.icon} />
            <p>LISTAR ALUNOS</p> 
        </Link>
        </div>


      </div>
    </div>
  );
}