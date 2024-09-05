"use client"
import { useLanyard as _useLanyard } from "use-lanyard";

export default function useLanyard() {
    const { data } = _useLanyard("170987556765171714");
    return [data]
}