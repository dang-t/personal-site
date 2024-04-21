import { useLanyardWS } from "use-lanyard";

export function GetLanyardData() {
   const data = useLanyardWS("170987556765171714");
   return data;
}