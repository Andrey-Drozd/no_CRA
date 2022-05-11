import React from 'react'
import styles from "./Component1.module"

import catImg from './images/cat.jpg'

const Component1 = () => {
    return (
        <>
            <div className={styles.component1}>Component - 1!</div>

            <img src={catImg}/>
        </>
    )
}

export { Component1 }