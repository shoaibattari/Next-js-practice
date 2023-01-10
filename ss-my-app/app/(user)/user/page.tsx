'use client'
import React from 'react'
import styles from '../../page.module.css'
import { useRouter } from 'next/navigation';



export default function user() {
  const router = useRouter();

  return (
    <main className={styles.main}>

      <p>-----------------------------------------------------------------------</p>
      <h3>THIS IS USER PAGE</h3>
      <p>-----------------------------------------------------------------------</p>

      <button type="button" onClick={() => router.push('./')}>
        Go To Main Page

      </button>

      <button type="button" onClick={() => router.push('./home')}>
        Go To Home Page
      </button>

      <button type="button" onClick={() => router.push('./home/about')}>
        Go To User Page
      </button>

      <button type="button" onClick={() => router.push('./home/contactUs')}>
        Go To Contact Us Page
      </button>

    </main>)
}
