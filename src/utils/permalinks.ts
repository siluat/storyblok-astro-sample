import { trim } from "./utils";

export const trimSlash = (s: string) => trim(trim(s, "/"));
