import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'

export default function Home() {
  const [data, setData] = useState();

  const API_URL = 'https://www.bcferriesapi.ca/api/TSA/';

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setData(response);
      })
      .catch(err => {
        console.log(err);

      })

  }, [])
  return (
    <>
      <main className={`${styles.main} `}>
        <h1>ferries leaving twawwassen</h1>
        <h2>to: luke point (nanaimo)</h2>
        {
          data && data.DUK.sailings.map((s, index) => {
            return (
              <div key={index}>
                <div>vessel name: {s.vesselName}</div>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarFill} style={{ width: `${s.carFill}%` }}>progress bar</div>
                </div>
              </div>
            )
          })
        }
      </main>
    </>
  )
}
