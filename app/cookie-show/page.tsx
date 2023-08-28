import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export default function Page() {
    const cookiesList = cookies()
    const hasCookie = cookiesList.getAll()

    return (
        <>
            <div className="result">
                <p><b>--My Cookie--</b></p>
                {
                    hasCookie.map((cookie) => (
                        <div key={cookie.name}>
                            <p>Name: {cookie.name}</p>
                            <p>Value: {cookie.value}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )

}

