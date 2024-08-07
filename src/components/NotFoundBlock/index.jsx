import React from 'react'
import styles from './index.module.scss'

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            (｡•́︿•̀｡)
            <h1>
                Ничего не найдено!
            </h1>
            <p className={styles.description}>
                Данная страница отсутвует в интернет-магазине
            </p>
        </div>
    )
}

export default NotFoundBlock;
