import React, { useEffect } from 'react'

const AboutPage = () => {

const clickear = () => {
    console.log ("click");
}
useEffect(() => {

window.addEventListener("click", () => {
        console.log("click")
    })
    return () => {
        window.removeEventListener("click", () => {
            console.log("click")
        })
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
