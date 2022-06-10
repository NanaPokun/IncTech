import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Reusable components/Footer'
import Navbar from '../Reusable components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>IncTech | Home</title>
        <meta name='keywords' content='incdot'/>
      </Head>
      <div>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem unde veritatis reiciendis fuga, in quaerat accusamus laboriosam, temporibus porro eaque nam earum modi distinctio, amet error quis consequuntur obcaecati asperiores!</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem unde veritatis reiciendis fuga, in quaerat accusamus laboriosam, temporibus porro eaque nam earum modi distinctio, amet error quis consequuntur obcaecati asperiores!</p>
        <Link href="/service">
          <a className={styles.btn}>Browse Our Services</a>
        </Link>
      </div>
    </>
    
  )
}
