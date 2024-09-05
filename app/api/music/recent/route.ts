import { RecentTracks } from "../_types";

export async function GET() {
    let data;
    try {
        data = await fetch("https://ws.audioscrobbler.com/2.0/?" + new URLSearchParams({
            api_key: String(process.env.NEXT_PUBLIC_LASTFM),
            user: "danquo19",
            method: "user.getrecenttracks",
            format: "json",
        }))
            .then(res => res.json())
            .then(data => {
                return data["recenttracks"]["track"]
            });
    } catch (error) {
        console.log(error as Error);
        return new Response("Failed to retrieve data", {
            status: 400
        })
    }


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


    return Response.json(tracks, {
        status: 200
    });
}