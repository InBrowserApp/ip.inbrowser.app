import IPSB from "./ip.sb";

interface GetMyIPProvider {
  ipv4?: () => Promise<string>;
  ipv6?: () => Promise<string>;
  name: string;
}

export const getMyIPProviders: GetMyIPProvider[] = [IPSB];

export const getMyIPv4 = async (): Promise<string> => {
  const ipv4Functions = getMyIPProviders
    .filter((provider) => provider.ipv4)
    .map((provider) => provider.ipv4) as (() => Promise<string>)[];
  const response = await Promise.any(ipv4Functions.map((func) => func()));
  return response;
};

export const getMyIPv6 = async (): Promise<string> => {
  const ipv6Functions = getMyIPProviders
    .filter((provider) => provider.ipv6)
    .map((provider) => provider.ipv6) as (() => Promise<string>)[];
  const response = await Promise.any(ipv6Functions.map((func) => func()));
  return response;
};
