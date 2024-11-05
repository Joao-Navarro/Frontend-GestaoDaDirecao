"use client"

import Link from "next/link";

import Image from "next/image";

import styles from "./page.module.css";

import Header from "@/components/Header";

import Footer from '@/components/Footer';

function Home() {

  return (

    <>


      <Header />


      <div className={styles.body}>

        <div className={styles.card}>

          <Link href="/avaliacaoInterna" ><Image className={styles.imginterna} src="/INTERNA.png" alt="avaliação interna" width={300} height={300} /></Link>

          <h3>AVALIAÇÃO INTERNA</h3>

        </div>

        <div className={styles.card}>

          <Link href="/avaliacaoExterna" ><Image className={styles.imginterna} src="/EXTERNA.png" alt="avaliação externa" width={300} height={300} /></Link>

          <h3>AVALIAÇÃO EXTERNA</h3>

        </div>

        <div className={styles.card}>

          <Link href="/cursoTecnico" ><Image className={styles.imginterna} src="/SENAI.png" alt="curso tecnico" width={300} height={300} /></Link>

          <h3>CURSO TECNICO</h3>

        </div>


        <div className={styles.card}>

          <Link href="/avaliaSesi" ><Image className={styles.imginterna} src="/AVALIA.png" alt="avalia sesi" width={300} height={300} /></Link>

          <h3>AVALIA SESI</h3>

        </div>
        
      </div>


      <div className={styles.Button}>



      <Link href="/quadroGeral" ><button className={styles.ButtonGeral} type="submit">Quadro Geral</button></Link>



      <Link href="/gerenciamentoAlunos" ><button className={styles.ButtonAlunos} type="submit">Gerenciar Alunos</button></Link>

      </div>
  


      <Footer />

    </>

  )

}

export default Home
