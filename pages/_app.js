import { StrictMode } from 'react'
import AppWrapper from '../components/AppWrapper'
import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import aos from 'aos'
import 'aos/dist/aos.css'
import "../styles/globals.css";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    aos.init({
      duration: 1000,
      once: true,
    });
    const aosAnimation = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('aos-animate');
        } else {
          entry.target.classList.remove('aos-animate');
        }
      });
    });
    aosAnimation.forEach(aosObject => {
      observer.observe(aosObject);
    });

  }, [])
  return <StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>
}

export default MyApp
