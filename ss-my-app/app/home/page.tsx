'use client'
import styles from '..//page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <p>-----------------------------------------------------------------------</p>
      <h2>THIS IS HOME PAGE</h2>
      <p>-----------------------------------------------------------------------</p>


      <button type="button" className="btn" onClick={() => router.push('./')}>
        Go To Main Page
      </button>

      <button type="button" onClick={() => router.push('./user')}>
        Go To User Page
      </button>

      <button type="button" onClick={() => router.push('./home/about')}>
        Go To About Page
      </button>

      <button type="button" onClick={() => router.push('./home/contactUs')}>
        Go To Contact Us Page
      </button>
    </main>
  )
}
