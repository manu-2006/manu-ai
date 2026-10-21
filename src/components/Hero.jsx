import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero-video/hero.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    // Keep the reel paused on page load; visitors can play it with the control.
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const toggleVideo = async (event) => {
    event.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      if (video.ended) video.currentTime = 0;
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Unable to play hero reel:', error);
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Hero reel background */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="absolute inset-0 z-0 h-full w-full object-cover md:left-auto md:right-[6%] md:w-auto md:aspect-[9/16]"
        aria-label="Hero background reel"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Subtle overlay keeps the text readable over video */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/75 via-black/30 to-black/25"
      />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          <h1
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Hi, I’m <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_#C9A96E]">Manu Kumar P</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
          >
            BCA graduate • Web Developer • Building practical digital products.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <a
              href="https://github.com/manu-2006"
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md inline-block"
              target="_blank"
              rel="noreferrer"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md inline-block"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Video playback control */}
        <button
          type="button"
          data-aos="zoom-in"
          data-aos-delay="600"
          onClick={toggleVideo}
          aria-label={isPlaying ? 'Pause hero reel' : 'Play hero reel'}
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
        >
          <span className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/30 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#C9A96E] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(201,169,110,0.6)]">
            {isPlaying ? (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white group-hover:text-black ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </span>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
            {isPlaying ? 'Pause Reel' : 'Play Reel'}
          </span>
        </button>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-[#C9A96E]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
