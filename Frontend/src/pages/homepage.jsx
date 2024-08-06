import { useEffect, useRef, useState } from 'react';
import TitleScreen from "../components/home/titlescreen";
import MainCategory from "../components/home/maincategory";

export default function HomePage() {
    const mainCategoryRef = useRef(null);
    const [showMain, setShowMain] = useState(false);
    const touchStartY = useRef(0)
    

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                setShowMain(true);
            }
            
        };

     
        const handleTouchStart = (e) => {
          touchStartY.current = e.touches[0].clientY;
      };

      const handleTouchEnd = (e) => {
          const touchEndY = e.changedTouches[0].clientY;
          if (touchStartY.current > touchEndY) {
              setShowMain(true);
          }
      };
        
        window.addEventListener('keydown', handleKeyDown);
    
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
         
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        
        };
    }, []);

    useEffect(() => {
        if (showMain && mainCategoryRef.current) {
            mainCategoryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [showMain]);

    return (
        <>
            <TitleScreen />
            <div ref={mainCategoryRef} style={{ display: showMain ? 'block' : 'none' }}>
                <MainCategory />
            </div>
        </>
    );
}