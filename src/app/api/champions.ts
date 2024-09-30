import { ChampionInfo } from "../types/Champion"
import { CHAMPION_URL, CHAMPION_VERSION_URL } from "./apiConfig";
import { RIOT_API_KEY } from "./apiKey";


export const getLatestVersionUrl = async (): Promise< string | undefined> => {
  try{
    const res = await fetch(CHAMPION_VERSION_URL);
    const version: string[] = await res.json();
    const latestVersion: string = version[0];

    return latestVersion;
  }catch(error){
    console.log("최신 버전 가져오기 에러", error);
    throw error;
  }
}

export const getChampions = async (): Promise<{ [key: string]: ChampionInfo }> => {
  try {
    const url: string = await CHAMPION_URL();
    const res = await fetch(url, {
      headers: {
        'X-Riot-Token': `${RIOT_API_KEY}`,
      },
    });
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('챔피언 데이터 가져오기 오류:', error);
    throw error; // 오류를 다시 던져 호출자에게 알림
  }
};