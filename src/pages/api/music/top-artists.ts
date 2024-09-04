import { NextApiRequest, NextApiResponse } from "next";
import { TopArtists } from "@/types/api.types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let data = await fetch("https://ws.audioscrobbler.com/2.0/?" + new URLSearchParams({
        api_key: String(process.env.NEXT_PUBLIC_LASTFM),
        user: "danquo19",
        method: "user.gettopartists",
        format: "json",
        period: "overall",
        limit: "10",
    }))
        .then(res => res.json())
        .then(data => { return data["topartists"]["artist"] })
        .catch((error: Error) => {
            console.log(error);
            res.status(400).json({
                message: "failed to load data",
            });
        });


    let artists: TopArtists = data.map((artist: any) => ({
        name: artist["name"],
        streams: artist["playcount"],
        image: artist["image"][3]["#text"],
        url: `https://open.spotify.com/search/artist:${artist["name"]}`
    }))


    res.status(200).json(artists)
}