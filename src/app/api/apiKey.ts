if(!process.env.NEXT_PUBLIC_RIOT_API_KEY) {
  throw new Error("API KEY 없음, 새로운 키를 발급받아야함.");
}

export const RIOT_API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY;