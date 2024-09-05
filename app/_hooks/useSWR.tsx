"use client"
import _useSWR from "swr";

export default function useSWR(path: string) {
    const { data } = _useSWR(path, (url: string) => fetch(url).then((res) => res.json()));
    return [data]
}