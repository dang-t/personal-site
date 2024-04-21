import { GetLanyardData } from "@hooks/lanyard"
import { PiQuestion } from "react-icons/pi"
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

type Song = {
   artist: string
   name: string
   imageURL: string
   url: string
}

export default function Music() {
   const lanyard = GetLanyardData();
   const { data } = useSWR("/recent-tracks");

   return <>
      {lanyard === undefined ? null :
         <>
            {/* music */}
            <h2 className="text-white text-lg mt-4 mb-2">status</h2>
            {
               !lanyard.listening_to_spotify
                  ?
                  <div className="text-white/80 w-full px-3 p-2 mt-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-[1px] rounded-lg duration-200">
                     Not listening to anything at the moment
                  </div>
                  :
                  <div className="flex gap-2 w-full px-3 p-2 mt-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-[1px] rounded-lg duration-200">
                     <Link
                        className="relative bg-white/10 backdrop-blur-[1px] w-20 h-20 rounded-lg"
                        href={`https://open.spotify.com/track/${lanyard.spotify?.track_id}`}
                        target="_blank"
                     >
                        {lanyard.spotify?.album_art_url === null || lanyard.spotify?.album_art_url === undefined
                           ?
                           <PiQuestion className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white/30" />
                           :
                           <Image
                              className="w-20 h-20 min-w-[80px] rounded-lg"
                              src={lanyard.spotify?.album_art_url}
                              alt=""
                              width={100}
                              height={100}
                              priority
                              unoptimized
                           />
                        }
                     </Link>
                     <section className="flex flex-col grow overflow-hidden">
                        {lanyard.spotify?.song === undefined ? null :
                           <div className="text-white/80">{lanyard.spotify.song}</div>
                        }
                        {lanyard.spotify?.album === undefined ? null :
                           <div className="text-sm text-white/50">{lanyard.spotify.album}</div>
                        }
                        {lanyard.spotify?.artist === undefined ? null :
                           <div className="text-sm text-white/50">{lanyard.spotify.artist}</div>
                        }
                     </section>
                  </div>
            }
            {/* recently played */}
            <h2 className="text-white text-lg mt-4 mb-2">recent</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-10">
               {data === undefined ? null :
                  <>
                     {
                        data.map((song: Song) => (
                           <div key={`${song.artist}-${song.name}`} className="relative bg-white/5 hover:bg-white/10 backdrop-blur-[1px] aspect-square w-full p-3 rounded-lg duration-200 group">
                              <Image
                                 className="w-full aspect-square min-w-[80px] rounded-lg group-hover:opacity-20 group-hover:scale-105 duration-200"
                                 src={song.imageURL}
                                 alt=""
                                 width={100}
                                 height={100}
                                 priority
                                 unoptimized
                              />
                              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full h-full p-3 overflow-hidden opacity-0 group-hover:opacity-100 duration-200">
                                 <div className="text-center text-lg sm:text-base text-white/80">{song.name}</div>
                                 <div className="text-center text-base sm:text-sm text-white/50">{song.artist}</div>
                              </div>
                           </div>
                        ))
                     }
                  </>
               }
            </div>
         </>
      }
   </>
}