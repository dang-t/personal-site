import { TopArtists } from "../../_types";

export async function GET() {
    let data;
    try {
        data = await fetch("https://ws.audioscrobbler.com/2.0/?" + new URLSearchParams({
            api_key: String(process.env.NEXT_PUBLIC_LASTFM),
            user: "danquo19",
            method: "user.gettopartists",
            format: "json",
            period: "overall",
            limit: "10",
        }))
            .then(res => res.json())
            .then(data => {
                return data["topartists"]["artist"]
            });
    } catch (error) {
        console.log(error as Error);
        return new Response("Failed to retrieve data", {
            status: 400
        })
    }


    let artists: TopArtists = data.map((artist: any) => ({
        name: artist["name"],
        streams: artist["playcount"],
        image: artist["image"][3]["#text"],
        url: `https://open.spotify.com/search/artist:${artist["name"]}`
    }))


    return Response.json(artists, {
        status: 200
    })
}