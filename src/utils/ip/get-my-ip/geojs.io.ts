import { validateIPv4, validateIPv6 } from "../common/validate";

export const serverName = "geojs.io";

export async function getMyIPv4(): Promise<string> {
  const api = "https://ipv4.geojs.io/v1/ip.json";
  const response = await fetch(api);
  const data = await response.json();
  const ip = data.ip;
  if (!validateIPv4(ip)) {
    throw new Error(`Invalid IPv4: ${ip}`);
  }

  return ip;
}

export async function getMyIPv6(): Promise<string> {
  const api = "https://ipv6.geojs.io/v1/ip.json";
  const response = await fetch(api);
  const data = await response.json();
  const ip = data.ip;
  if (!validateIPv6(ip)) {
    throw new Error(`Invalid IPv4: ${ip}`);
  }

  return ip;
}

export const getMyIP = {
  ipv4: getMyIPv4,
  ipv6: getMyIPv6,
  name: serverName,
};

export default getMyIP;
