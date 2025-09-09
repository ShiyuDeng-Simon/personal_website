import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false);
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [linkHovered, setLinkHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  
  // Handle scroll event for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Custom cursor animation
  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
      return;
    }
    
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;
    
    const mouseMoveEvent = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const mouseEnterEvent = () => {
      cursorDot.style.opacity = '1';
      cursorOutline.style.opacity = '1';
    };
    
    const mouseLeaveEvent = () => {
      cursorDot.style.opacity = '0';
      cursorOutline.style.opacity = '0';
    };
    
    // Handle link and button hover effects
    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, .project-card').forEach(element => {
        element.addEventListener('mouseenter', () => {
          if (element.classList.contains('project-card')) {
            setLinkHovered(true);
          } else if (element.tagName.toLowerCase() === 'button' || element.classList.contains('btn')) {
            setButtonHovered(true);
          } else {
            setLinkHovered(true);
          }
        });
        
        element.addEventListener('mouseleave', () => {
          setLinkHovered(false);
          setButtonHovered(false);
        });
      });
    };
    
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);
    
    // Delay setting up event listeners for elements that might not exist immediately
    setTimeout(handleLinkHoverEvents, 500);
    
    return () => {
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);
  
  // Smooth cursor animation using requestAnimationFrame
  useEffect(() => {
    // Only enable on non-touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
      return;
    }
    
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;
    
    // Skip if elements aren't available yet
    if (!cursorDot || !cursorOutline) return;
    
    // Animation values for cursor
    let posX = mousePosition.x;
    let posY = mousePosition.y;
    let outlineX = mousePosition.x;
    let outlineY = mousePosition.y;
    
    const animate = (time) => {
      if (previousTimeRef.current === undefined) {
        previousTimeRef.current = time;
      }
      
      // Calculate smooth movement
      posX += (mousePosition.x - posX) * 0.2;
      posY += (mousePosition.y - posY) * 0.2;
      cursorDot.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      
      outlineX += (mousePosition.x - outlineX) * 0.15;
      outlineY += (mousePosition.y - outlineY) * 0.15;
      cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
      
      // Cursor effects
      if (linkHovered) {
        cursorDot.style.transform = `translate3d(${posX}px, ${posY}px, 0) scale(1.5)`;
        cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) scale(1.5)`;
        cursorOutline.style.backgroundColor = 'rgba(67, 97, 238, 0.1)';
      } else if (buttonHovered) {
        cursorDot.style.transform = `translate3d(${posX}px, ${posY}px, 0) scale(1.5)`;
        cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) scale(2)`;
        cursorOutline.style.backgroundColor = 'rgba(67, 97, 238, 0.2)';
      } else {
        cursorDot.style.transform = `translate3d(${posX}px, ${posY}px, 0) scale(1)`;
        cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) scale(1)`;
        cursorOutline.style.backgroundColor = 'transparent';
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePosition, linkHovered, buttonHovered]);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
      {/* Custom Cursor Elements */}
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorOutlineRef} className="cursor-outline"></div>
    </>
  )
}

export default App
