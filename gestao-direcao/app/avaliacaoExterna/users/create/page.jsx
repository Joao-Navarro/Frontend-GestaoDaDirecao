'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './createUser.module.css';

export default function CreateUserPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const router = useRouter();

  const createUser = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:3001/avalia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, age: age ? parseInt(age) : null }),
    });

    router.push('/users');
  };

  return (
    <div className={styles.container}>
      <h1>Criar Novo Usuário</h1>
      <form onSubmit={createUser} className={styles.form}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Criar</button>
      </form>
    </div>
  );
}