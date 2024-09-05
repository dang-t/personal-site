import { TopTracks } from "../../_types";

export async function GET() {
    let data;
    try {
        data = await fetch("https://ws.audioscrobbler.com/2.0/?" + new URLSearchParams({
            api_key: String(process.env.NEXT_PUBLIC_LASTFM),
            user: "danquo19",
            method: "user.gettoptracks",
            format: "json",
            period: "overall",
            limit: "10",
        }))
            .then(res => res.json())
            .then(data => { return data["toptracks"]["track"] })
    } catch (error) {
        console.log(error as Error);
        return new Response("Failed to retrieve data", {
            status: 400
        })
    }


    let tracks: TopTracks = data.map((track: any) => ({
        artist: track["artist"]["name"],
        title: track["name"],
        image: track["image"][3]["#text"],
        streams: track["playcount"],
        url: `https://open.spotify.com/search/artist:${track["artist"]["name"]}%20track:${track["name"]}`
    }))


    return Response.json(tracks, {
        status: 200
    })
}