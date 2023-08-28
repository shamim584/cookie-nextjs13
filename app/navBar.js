import styles from './page.module.css'
import Link from 'next/link'

export function NavBar() {

    function showHandleClick() {

        // const cookieStore = cookies()
        // const theme = cookieStore.get('theme')

        // console.log('theme')
    }


    return (
        <div className={styles.grid}>
            <Link
                href="/cookie-store"
                className={styles.card}
            >
                <h2>
                    Setting Cookies <span>-&gt; </span>
                </h2>
            </Link>

            <Link
                href="/cookie-show"
                className={styles.card}
            >
                <h2>
                    Reading Cookies <span>-&gt; </span>
                </h2>
            </Link>

            <Link
                href="/json-jesponse"
                className={styles.card}
            >
                <h2>
                    JSON Response <span>-&gt; </span>
                </h2>
            </Link>

        </div>




    )
}

