'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './editUser.module.css';

export default function EditUserPage({ params }) {
  const [user, setUser] = useState({ rm: '', etapa: '', ano: '', tipoprova: '', notaExt: ''  });
  const router = useRouter();

  useEffect(() => {
fetchUser();
}, []);

 const fetchUser = async () => {
   const res = await fetch(`http://localhost:3001/avalia/${params.rm}/${params.ano}/${params.tipoprova}`);
   const data = await res.json();
   setUser(data);
 };

 const updateUser = async (e) => {
   e.preventDefault();

   await fetch(`http://localhost:3001/avalia/${params.rm}/${params.ano}/${params.tipoprova}`, {
     method: 'PUT',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(user),
   });



 };

 return (
   <div className={styles.container}>
     <h1>Editar Usuário</h1>
     <form onSubmit={updateUser} className={styles.form}>
     <input
         type="text"
         placeholder="RM"
         value={user.rm}
         onChange={(e) => setUser({ ...user, rm: e.target.value })}
         className={styles.input}
       />
     <input
         type="text"
         placeholder="Ano"
         value={user.ano}
         onChange={(e) => setUser({ ...user, ano: e.target.value })}
         className={styles.input}
       />
     <input
         type="text"
         placeholder="Tipo de Prova"
         value={user.tipoprova}
         onChange={(e) => setUser({ ...user, tipoprova: e.target.value })}
         className={styles.input}
       />
       <input
         type="text"
         placeholder="Nota"
         value={user.notaExt}
         onChange={(e) => setUser({ ...user, notaExt: e.target.value })}
         className={styles.input}
       />
      
       <button type="submit" className={styles.button}>Salvar</button>
     </form>
   </div>
 );
}