import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'

const Navbar = () => {


    useEffect(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        })

        navTween.fromTo("nav",{
            backgroundColor:'transparent',
        },{
            backgroundColor:'#00000050',
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })



    }, [])




    return (
        <nav className='nav'>
            <div className='div'>
                {/* logo  */}
                <a href="/" className='a flex items-center gap-4 justify-center'>
                    <img src="/images/logo.png" alt="logo" />
                    <p className='p'>Velvet Pour</p>
                </a>

                {/* other links */}
                <ul className='ul'>
                    <li><a href="/cocktails">Cocktails</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/art">The Art</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar