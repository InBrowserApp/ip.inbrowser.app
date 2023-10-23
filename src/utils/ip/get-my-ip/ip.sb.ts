export const serverName = "ip.sb";

export async function getMyIPv4(): Promise<string> {
  const api = "https://api-ipv4.ip.sb/geoip";
  const response = await fetch(api);
  const data = await response.json();
  return data.ip;
}

export async function getMyIPv6(): Promise<string> {
  const api = "https://api-ipv6.ip.sb/geoip";
  const response = await fetch(api);
  const data = await response.json();
  return data.ip;
}

export const getMyIP = {
  ipv4: getMyIPv4,
  ipv6: getMyIPv6,
  name: serverName,
};

export default getMyIP;
