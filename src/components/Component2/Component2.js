import React from 'react'
import styles from "./HelloWorld.module"

const HelloWorld = () => {
    return (
        <>
            <div className={styles.hello}>Hello World!</div>

            <button>push me</button>
        </>
    )
}

export { HelloWorld }