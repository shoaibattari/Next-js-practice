'use client';

import { useRouter } from 'next/navigation';


import styles from '/app/page.module.css'
export default function About() {
const router = useRouter();
  return (
      <main className={styles.main}>
      <p>-----------------------------------------------------------------------</p>
  <h3>THIS IS ABOUT PAGE</h3>
  <p>-----------------------------------------------------------------------</p>
  
  <button type="button" onClick={()=> router.push('./')}>
    Go To Main Page

  </button>
  <button type="button" onClick={()=> router.push('./home')}>
    Go To Home Page
  </button>

<button type="button" onClick={()=> router.push('./user')}>
  Go To User Page
</button>

<button type="button" onClick={()=> router.push('./home/contactUs')}>
  Go To Contact Us Page
</button>
  
  </main>)
  }
