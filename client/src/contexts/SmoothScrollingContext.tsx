import React from 'react'

type SmoothScrollingContextType = {
    scrollToSection : (sectionId: string) => void
}

export const SmoothScrollingContext = React.createContext<SmoothScrollingContextType>({
    scrollToSection: () => {}
})

export const SmoothScrollingProvider = ({ children }: { children: React.ReactNode}) => {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            console.log(section)
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <SmoothScrollingContext.Provider value={{ scrollToSection }}>
            {children}
        </SmoothScrollingContext.Provider>
    )

    
}