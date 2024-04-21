import { Tech } from "@data/tech"
import { Projects } from "@data/projects"
import { PiGlobe, PiLinkSimpleHorizontalBold } from "react-icons/pi"
import { Works } from "@data/works"
import Link from "next/link"
import Image from "next/image"

export default function Index() {
   return <>
      {/* based */}
      <div className="flex items-center mt-2">
         <PiGlobe className="text-white/60 w-5 h-5" />
         <span className="text-white/60 text-sm ml-1.5">based in Virginia, United States</span>
      </div>
      {/* about */}
      <div className="w-full p-3 mt-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-[1px] rounded-lg duration-200">
         <span className="block text-white/80">Hi, I'm Dang.</span>
         <span className="block text-white/50 my-2">Currently a computer science student focused on full-stack software development.</span>
         <span className="block text-white/50">I like to build unreadable spaghetti code.</span>
      </div>
      {/* projects */}
      <h2 className="text-white text-lg mt-5 mb-3">public projects</h2>
      <div className="flex flex-col">
         {Projects.map((projectData, index) => (
            <div key={`project${index}`} className="flex">
               <section>
                  <div className="flex items-center">
                     <span className="text-white/60">{projectData.name}</span>
                     <Link className="ml-2 text-white/60 hover:text-white duration-100" href={projectData.repo} target="_blank">
                        <PiLinkSimpleHorizontalBold />
                     </Link>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                     {projectData.tech.map(tech => (
                        <div key={`${projectData.name}-tech-${tech}`} className="text-sm text-white/50 w-fit px-3 py-0.5 bg-white/5 border-[1px] border-white/5 rounded-full">{tech}</div>
                     ))}
                  </div>
               </section>
            </div>
         ))}
      </div>
      {/* works */}
      < h2 className="text-white text-lg mt-5 mb-3" > public works</h2>
      <div className="flex flex-col">
         {Works.map((workData, index) => (
            <div key={`work${index}`} className="flex flex-col-reverse md:flex-row">
               <Image
                  className="mt-2 md:mt-0 w-[150px] h-[100px] rounded-lg mr-4 border-[1px] border-white/15"
                  src={`/images/works/${workData.imageUUID}.jpg`}
                  alt={workData.imageUUID}
                  width={100}
                  height={100}
                  unoptimized
                  priority
               />
               <section>
                  <div className="flex items-center">
                     <span className="text-white/60">{workData.name}</span>
                     <Link className="ml-2 text-white/60 hover:text-white duration-100" href={workData.url} target="_blank">
                        <PiLinkSimpleHorizontalBold />
                     </Link>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                     {workData.tech.map(tech => (
                        <div key={`${workData.name}-tech-${tech}`} className="text-sm text-white/50 w-fit px-3 py-0.5 bg-white/5 border-[1px] border-white/5 rounded-full">{tech}</div>
                     ))}
                  </div>
               </section>
            </div>
         ))}
      </div>
      {/* tech */}
      <h2 className="text-white text-lg mt-5 mb-3">tech stack</h2>
      <div className="flex flex-wrap gap-1.5 pb-10">
         {Tech.map((techStack, index) => (
            <div key={`techstack-${index}`} className="flex items-center gap-1 text-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-[1px] w-fit px-2 pr-2.5 py-1 rounded duration-200">
               <techStack.icon className="w-5 h-5" />
               <span className="text-white/80">{techStack.name}</span>
            </div>
         ))}
      </div >
   </>
}