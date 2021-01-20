import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Styles from '../styles/Home.module.css'

const index = () => {
    return (
        <div className={Styles.container}>
            <Head>
                <title>Farhan Rafly Fahrezi</title>
            </Head>
            <div className={Styles.main}>
                <h1 className={Styles.title}>Farhan Rafly Fahrezi S</h1>
                <ul>
                    <li>
                        <LinkComponent href='/about'>About Me</LinkComponent>
                    </li>
                    <li>
                        <LinkComponent href='/social'>
                            Social Media
                        </LinkComponent>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const LinkComponent = ({ href, children }) => {
    return (
        <Link href={href} passHref>
            <a>{children}</a>
        </Link>
    )
}

export default index
