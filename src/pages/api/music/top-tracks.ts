import { NextApiRequest, NextApiResponse } from "next";
import { TopTracks } from "@/types/api.types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let data = await fetch("https://ws.audioscrobbler.com/2.0/?" + new URLSearchParams({
        api_key: String(process.env.NEXT_PUBLIC_LASTFM),
        user: "danquo19",
        method: "user.gettoptracks",
        format: "json",
        period: "overall",
        limit: "10",
    }))
        .then(res => res.json())
        .then(data => { return data["toptracks"]["track"] })
        .catch((error: Error) => {
            console.log(error);
            res.status(400).json({
                message: "failed to load data",
            });
        });


    let tracks: TopTracks = data.map((track: any) => ({
        artist: track["artist"]["name"],
        title: track["name"],
        image: track["image"][3]["#text"],
        streams: track["playcount"],
        url: `https://open.spotify.com/search/artist:${track["artist"]["name"]}%20track:${track["name"]}`
    }))


    res.status(200).json(tracks)
}