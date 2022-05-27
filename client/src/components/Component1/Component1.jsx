import React from 'react'
import './Component1.scss'

import reverse from 'lodash/reverse'

import CatImg from './images/cat.jpg'

const Component1 = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const arrReverse = reverse(arr)
    console.log(arrReverse)
    return (
        <>
            <div className='block1'>
                <span>Component - 1!</span>

                <span>{arrReverse}</span>

                <div className='block1__subtitle'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur dolore doloremque eligendi fugit iure quibusdam quo. Blanditiis ducimus, eius exercitationem fugiat nam quae ratione rem suscipit. Accusamus animi consequatur cumque, ex explicabo nemo. Autem blanditiis, corporis culpa delectus dolore doloremque ex excepturi expedita id labore magnam nulla placeat praesentium quas quia quidem quis, reprehenderit sit ut velit veniam veritatis voluptate voluptatum. A aliquid amet at autem corporis culpa, deserunt dicta distinctio dolorem ex fugit impedit ipsa laboriosam modi neque nihil numquam odio possimus quam, quisquam, ratione reiciendis rem repellat reprehenderit sunt tempora temporibus tenetur vel vero voluptatibus. Repellendus, voluptate.</span>
                </div>

                <div className='block1__subtitle2'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur dolore doloremque eligendi fugit iure quibusdam quo. Blanditiis ducimus, eius exercitationem fugiat nam quae ratione rem suscipit. Accusamus animi consequatur cumque, ex explicabo nemo. Autem blanditiis, corporis culpa delectus dolore doloremque ex excepturi expedita id labore magnam nulla placeat praesentium quas quia quidem quis, reprehenderit sit ut velit veniam veritatis voluptate voluptatum. A aliquid amet at autem corporis culpa, deserunt dicta distinctio dolorem ex fugit impedit ipsa laboriosam modi neque nihil numquam odio possimus quam, quisquam, ratione reiciendis rem repellat reprehenderit sunt tempora temporibus tenetur vel vero voluptatibus. Repellendus, voluptate.</span>
                </div>
            </div>

            <img src={CatImg}/>
        </>
    )
}

export { Component1 }