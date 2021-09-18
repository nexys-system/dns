import dns from "dns";

/**
 *
 * @param hostname
 * @see https://nodejs.org/api/dns.html
 * @returns {address: ip, family: IP version, ie IPv4}
 */
export const getIPFromHostName = (
  hostname: string
): Promise<{ address: string; family: number }> =>
  new Promise((resolve, reject) => {
    dns.lookup(hostname, (err, address, family) => {
      if (err) {
        reject(err);
      }

      resolve({ address, family });
    });
  });
