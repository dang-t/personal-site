import { NextApiRequest, NextApiResponse } from "next";
import { RecentTracks } from "@/types/api.types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let data = await fetch("https://ws.audioscrobbler.com/2.0/?" + new URLSearchParams({
        api_key: String(process.env.NEXT_PUBLIC_LASTFM),
        user: "danquo19",
        method: "user.getrecenttracks",
        format: "json",
    }))
        .then(res => res.json())
        .then(data => { return data["recenttracks"]["track"] })
        .catch((error: Error) => {
            console.log(error);
            res.status(400).json({
                message: "failed to load data",
            });
        });


    // remove replayed tracks from list
    let saved = new Set<string>();
    data = data.filter((track: any) => {
        if (saved.has(track["name"])) {
            return false;
        } else {
            saved.add(track["name"]);
            return true;
        }
    })


    // refactor first 12 tracks
    let tracks: RecentTracks = data.slice(0, 12).map((track: any) => ({
        artist: track["artist"]["#text"],
        title: track["name"],
        album: track["album"]["#text"],
        image: track["image"][3]["#text"],
        url: `https://open.spotify.com/search/artist:${track["artist"]["#text"]}%20track:${track["name"]}`
    }))


    res.status(200).json(tracks);
}