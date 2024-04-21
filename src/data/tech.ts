import { IconType } from "react-icons"
import { BiLogoTypescript, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoPython } from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb"

type TechData = {
   name: string,
   icon: IconType
}

export const Tech: TechData[] = [
   {
      name: "Typescript",
      icon: BiLogoTypescript
   },
   {
      name: "Javascript",
      icon: BiLogoJavascript
   },
   {
      name: "React",
      icon: BiLogoReact
   },
   {
      name: "Next.js",
      icon: TbBrandNextjs
   },
   {
      name: "Tailwind",
      icon: BiLogoTailwindCss
   },
   {
      name: "Python",
      icon: BiLogoPython
   }
]