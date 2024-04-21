import { useEffect, useState } from "react";
import Header from "@components/Header";

export default function PageLayout({ children }: { children: React.ReactNode }) {
   const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

   useEffect(() => {
      document.addEventListener("mousemove", (e: MouseEvent) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
      })
   }, []);

   return (
      <>
         <section id="background">
            <div id="bg-gradient"></div>
            <div id="mouse-radial-gradient" style={{
               left: mousePosition.x - 300,
               top: mousePosition.y - 300
            }}></div>
            <div id="dot-grid"></div>
         </section>
         <section id="foreground">
            <Header />
            <main className="w-full">
               {children}
            </main>
         </section >
      </>
   )
}