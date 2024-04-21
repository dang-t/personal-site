import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
   const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=danquo19&api_key=${process.env.NEXT_PUBLIC_LASTFM}&format=json`
   )
   const data = await response.json()
   // Remove Replayed Songs
   let sorted: object[] = [];
   let savedSongs: string[] = [];
   (data['recenttracks']['track'] as Array<object>).forEach((song: any) => {
      if (savedSongs.indexOf((song['artist']['#text'] + ":" + song['name'])) === -1) {
         savedSongs.push((song['artist']['#text'] + ":" + song['name']))
         sorted.push({
            artist: song['artist']['#text'],
            name: song['name'],
            imageURL: song['image'][3]['#text'],
            url: song['url']
         })
      }
   });
   res.status(200).json(sorted.slice(0, 12))
}