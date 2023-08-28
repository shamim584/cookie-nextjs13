import { cookies } from 'next/headers'

export default function Page() {
  async function setCookie(params: FormData) {
    "use server"
    cookies().set('theme', 'dark')
    cookies().set('language', 'en')
  }

  async function removeCookie(params: FormData) {
    "use server"
    cookies().delete('theme')
    cookies().delete('language')
  }


  return (
    <>
      <div className="result">
        <div className="flex justify-center">
          <form action={setCookie}>
            <button type="submit" className={`m-4 bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}> Set Cookie</button>
          </form>

          <form action={removeCookie}>
            <button type="submit" className={`m-4 bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}>Remove Cookie</button>
          </form>
        </div>
      </div>

      <h1>

      </h1>
    </>
  )
}