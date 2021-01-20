import React from 'react'
import Head from 'next/head'
import Styles from '../styles/Home.module.css'

const about = () => {
    return (
        <div className={Styles.container}>
            <Head>
                <title>About Me</title>
            </Head>
            <div className={Styles.main}>
                <h1 className={Styles.title}>About Me</h1>
                <p>
                    Nama saya farhan rafly fahrezi dan saya seorang mahasiswa di
                    UNIKOM
                </p>
            </div>
        </div>
    )
}

export default about
