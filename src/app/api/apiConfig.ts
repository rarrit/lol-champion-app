import { getLatestVersionUrl } from "./champions";

// 챔피언 최신 버전
export const CHAMPION_VERSION_URL = "https://ddragon.leagueoflegends.com/api/versions.json";
// 전체 챔피언
export const CHAMPION_URL = async () => {
  const latestVersion = await getLatestVersionUrl();
  const allCampion: string = await `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`;
  return allCampion;
}