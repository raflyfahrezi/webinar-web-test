import React from 'react'
import Head from 'next/head'
import Styles from '../../styles/Home.module.css'

const social = ({ data }) => {
    return (
        <div className={Styles.container}>
            <Head>
                <title>Social Media</title>
            </Head>
            <div className={Styles.main}>
                <h1 className={Styles.title}>Social Media Server</h1>
                <ul>
                    {data.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.link} target='_blank'>
                                    {item.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const data = await fetch(
        'https://project-dummy-521bb-default-rtdb.firebaseio.com/socialMedia.json'
    )
    const parsed = await data.json()

    return {
        props: {
            data: parsed,
        },
    }
}

export default social
