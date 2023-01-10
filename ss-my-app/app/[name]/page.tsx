import React from 'react'
import styles from '../page.module.css'


export default function name({ params }: {
    params: { name: string }
}) {
    return <div>

        <main className={styles.main}>
            <h3>
            My name is {params.name}.</h3>
                </main>
    </div>
}
