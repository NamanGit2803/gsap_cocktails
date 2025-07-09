import React from "react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useEffect, useRef } from "react"
import { useMediaQuery } from "react-responsive"
import Cocktails from "@/components/Cocktails"
import About from "@/components/About"

gsap.registerPlugin(ScrollTrigger, SplitText)

const home = () => {

  const videoRef = useRef()

  const isMobile = useMediaQuery({ maxWidth: 768 })

  useEffect(() => {
    const heroSplit = new SplitText('.title', {
      type: 'chars, words',
    })

    const paragraphSplit = new SplitText('.subtitle', {
      type: 'lines',
    })

    // gradient 
    heroSplit.chars.forEach((char, index) => char.classList.add('text-gradient'))

    // animate title 
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06
    })

    // animate paragraph line 
    gsap.from(paragraphSplit.lines, {
      yPercent: 100,
      duration: 1.8,
      opacity: 0,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
      .to('.right-leaf', { y: 200 }, 0)
      .to('.left-leaf', { y: 200 }, 0)

    const startValue = isMobile ? 'top 50%' : 'center 60%'
    const endValue = isMobile ? '120% top' : 'bottom top'

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };



  }, [])


  return (
    <>
      {/* hero sextion  */}
      <section id="hero" className="noisy">
        {/* title  */}
        <h1 className="title">MOJITO</h1>

        {/* left leaf  */}
        <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />

        {/* right leaf  */}
        <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on your menu is a blend of premium ingredients, creative flair, and timeless recipes -designed to delight your senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>

      {/* videos  */}
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </div>

      {/* cocktails section  */}
      <Cocktails />

      {/* about section  */}
      <About/>
    </>
  )

}

export default home