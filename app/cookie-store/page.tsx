'use client';

export default function Page() {

  const setCookie = () => {
    fetch('/cookie', {
      method: 'GET',
    })
    location.reload()
  };

  const removeCookie = () => {
    fetch('/cookie-remove', {
      method: 'GET',
    })
    location.reload()
  };

  return (
    <>
      <div className="result">
        <div className="flex justify-center">

          <button
            className={`m-4 bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
            onClick={setCookie}
          // onClick={() => {
          //   // cookies().set("token", "ABCDEF");
          //   fetch('/cookie', {
          //     method: 'GET',
          //   })
          // }}
          > Set Cookie
          </button>

          <button
            className={`m-4 bg-red-500 p-4 text-white rounded hover:bg-red-700 hover:shadow-xl`}
            onClick={removeCookie}
          > Remove Cookie
          </button>


        </div>
      </div>

      <h1>

      </h1>
    </>
  )
}