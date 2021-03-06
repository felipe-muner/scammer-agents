import Head from 'next/head'
import AppNavbar from '../src/components/AppNavbar'
import { useCount, useDispatchCount } from '../src/context/Counter'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'


export default function Home() {

  const count = useCount()
  const dispatch = useDispatchCount()

  const handleIncrease = (event: React.MouseEvent<HTMLElement>) =>
    dispatch({
      type: 'INCREASE',
    })
  const handleDecrease = (event: React.MouseEvent<HTMLElement>) =>
    dispatch({
      type: 'DECREASE',
    })

  const myNumber = (event: React.MouseEvent<HTMLElement>) =>
    dispatch({
      type: 'INCREASE_BY',
      payload: 20
    })

  const [selected, setSelected] = useState<{ id: number, title: string, year: number } | null>(null);

  const showCompany = () => {
    switch (selected && selected.id) {
      case 1:
        return 'bar1';
      case 2:
        return 'bar2';
      case 3:
        return 'bar3';
      default:
        return 'foo';
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppNavbar setSelected={setSelected} />
      <main className={styles.main}>
        {showCompany()}
        <p>Counter: {count}</p>
        <Link href="/felipe">
          <a>felipe page!</a>
        </Link>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={myNumber}>myNumber</button>
      </main>

    </div>
  )
}
