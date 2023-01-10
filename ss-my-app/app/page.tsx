
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
    <main className={styles.main}>
      <b><p>App Create By: SHOAIB MEMON</p></b>
<br />
<h3>MY FIRST APP FOR NEXT.JS WITH ROUTING</h3>
<p>-----------------------------------------------------------------------</p>
<p><b>THIS IS MAIN PAGE</b></p>
<p>-----------------------------------------------------------------------</p>
<Link href="/home">Go To Home Page</Link>
{/* <br /> */}
<Link href="/home/about">Go To About Page</Link>
{/* <br /> */}
<Link href="/home/contactUs">Go To Contact Us Page</Link>
{/* <br /> */}
<Link href="/user">Go To User Page</Link>
<p>-----------------------------------------------------------------------</p>




</main></>)
}



// 