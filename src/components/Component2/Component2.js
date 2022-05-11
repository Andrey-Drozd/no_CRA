import React from 'react'
import styles from "./Component2.module"

const Component2 = () => {
    return (
        <>
            <div className={styles.hello}>Component - 2!</div>

            <button>push me</button>
        </>
    )
}

export { Component2 }