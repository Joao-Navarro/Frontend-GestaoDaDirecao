"use client"

import Link from "next/link";

import Image from "next/image";

import styles from "./page.module.css";

import Header from "@/components/Header";


function Home() {

  return (

    <>


      <Header />


      <div className={styles.body}>

        <div className={styles.card}>

          <Link href="/avaliacaoInterna" ><Image className={styles.imginterna} src="/INTERNA.png" alt="avaliação interna" width={300} height={300} /></Link>

          <h3>Avaliação Interna - CE 242</h3>

        </div>

        <div className={styles.card}>

          <Link href="/avaliacaoExterna" ><Image className={styles.imginterna} src="/EXTERNA.png" alt="avaliação externa" width={300} height={300} /></Link>

          <h3>DESBRAVENEM E SARESP</h3>

        </div>

        <div className={styles.card}>

          <Link href="/cursoTecnico" ><Image className={styles.imginterna} src="/SENAI.png" alt="curso tecnico" width={300} height={300} /></Link>

          <h3>Curso Técnico</h3>

        </div>


        <div className={styles.card}>

          <Link href="/avaliaSesi" ><Image className={styles.imginterna} src="/AVALIA.png" alt="avalia sesi" width={300} height={300} /></Link>

          <h3>Avalia Sesi</h3>

        </div>

        <div className={styles.cards}>
          
          <Link href="/quadroGeral" ><Image className={styles.imginterna} src="/GERAL.png" alt="Quadro Geral" width={300} height={300} /></Link>
          
          <h3>Quadro Geral</h3>
          
          </div>

          <div className={styles.cards}>
          
          <Link href="/gerenciamentoAlunos" ><Image className={styles.imginterna} src="/GERENCIAMENTO.png" alt="Gerenciamento de alunos" width={300} height={300} /></Link>
          
          <h3>Gerenciar Alunos</h3>
          
          </div>


        
      </div>


    </>

  )

}

export default Home
