import { validateIPv4, validateIPv6 } from "../common/validate";

export const serverName = "ip.sb";

export async function getMyIPv4(options?: RequestInit): Promise<string> {
  const api = "https://api-ipv4.ip.sb/geoip";
  const response = await fetch(api, options);
  const data = await response.json();
  const ip = data.ip;
  if (!validateIPv4(ip)) {
    throw new Error(`Invalid IPv4: ${ip}`);
  }

  return ip;
}

export async function getMyIPv6(options?: RequestInit): Promise<string> {
  const api = "https://api-ipv6.ip.sb/geoip";
  const response = await fetch(api, options);
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
