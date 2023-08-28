'use client'
import styles from './page.module.css'

export function CookieStoreBtn() {

    function handleClick() {
        var cookie = "language";

        document.cookie = cookie
    }


    return (
        <a
            className={styles.card}
            rel="noopener noreferrer"
            onClick={handleClick}

        >
            <h2>
                Cookie Store <span>-&gt; </span>
            </h2>
        </a>
    )
}

