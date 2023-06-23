import React from 'react'
import styles from "./style.module.css"

function InformationArea() {
    return (
        <div className={styles.informationArea}>
            <input type="text" name="" id="" placeholder='Search location' className={styles.searchbar} />
            <h1 className={styles.city}>Rome</h1>

            <div className={styles.group}>
                <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="" />
                <h1>Clear</h1>
            </div>

            <h1 className={styles.temp}>5 C</h1>

            <div className={styles.boxContainer}>

                <div className={styles.box}>
                    <p>Humanity</p>
                    <h1>12%</h1>
                </div>

                <div className={styles.box}>
                    <p>Wind</p>
                    <h1>5km/h</h1>
                </div>

                <div className={styles.box}>
                    <p>Feels like</p>
                    <h1>4 C</h1>
                </div>

            </div>

        </div>

    )
}

export default InformationArea