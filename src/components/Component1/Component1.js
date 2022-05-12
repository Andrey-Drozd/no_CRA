import React from 'react'
import './Component1.scss'

import catImg from './images/cat.jpg'

const Component1 = () => {
    return (
        <>
            <div className='block1'>
                <span>Component - 1!</span>

                <div className='block1__subtitle'>
                    <span>Subtitle</span>
                </div>
            </div>

            <img src={catImg}/>
        </>
    )
}

export { Component1 }