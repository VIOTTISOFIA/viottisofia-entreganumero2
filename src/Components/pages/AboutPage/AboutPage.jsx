import React, { useEffect } from 'react'

const AboutPage = () => {

useEffect(() => {

    const clickear = () => {
    console.log("click");
    }

window.addEventListener("click", clickear)

return () => {
        window.removeEventListener("click", clickear)
        }
    }, [])

return (
    <div className='container'>
        <h1 className='main-title'>About Nati</h1>
        <p>Este es el componente Sobre mi</p>
    </div>
    )
}
export default AboutPage
