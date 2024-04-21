import Link from "next/link";
import { FaGithub, FaSpotify } from "react-icons/fa";
import { PiMusicNotesFill } from "react-icons/pi"
import { useRouter } from "next/router";

export default function Header() {
   const router = useRouter();

   return (
      <header className="text-lg flex items-center gap-2.5 w-full text-white">
         <div>
            <Link href="/">danquo</Link>
            {router.pathname === "/music" ? <span className="inline-block ml-2 text-white/50">/ music</span> : null}
         </div>
         <Link className="ml-auto border-[1px] border-white/15 hover:border-white/25 bg-white/5 hover:bg-white/10 backdrop-blur-md px-2 py-1 rounded-md duration-100" href="/music">
            <PiMusicNotesFill className="text-white w-5 h-5" />
         </Link>
         <Link className="border-[1px] border-white/15 hover:border-white/25 bg-white/5 hover:bg-white/10 backdrop-blur-md px-2 py-1 rounded-md duration-100" href="https://github.com/danquox" target="_blank">
            <FaGithub className="text-white w-5 h-5" />
         </Link>
         <Link className="border-[1px] border-white/15 hover:border-white/25 bg-white/5 hover:bg-white/10 backdrop-blur-md px-2 py-1 rounded-md duration-100" href="https://open.spotify.com/user/e5xari4q28t7lwxla8rggf832?si=e9173c5d38b342f2" target="_blank">
            <FaSpotify className="text-white w-5 h-5" />
         </Link>
      </header>
   )
}