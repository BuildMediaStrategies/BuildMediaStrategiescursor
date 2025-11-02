export interface SpeedResults {
  userLoadTime: number; // seconds
  userMobileScore: number; // 0-100
  ourLoadTime: number; // seconds
  ourMobileScore: number; // 0-100
}

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export function generateSpeedResults(url: string): SpeedResults {
  // Seed-like variability from URL for a stable-ish feel
  let hash = 0;
  for (let i = 0; i < url.length; i++) hash = (hash * 31 + url.charCodeAt(i)) >>> 0;

  const rand = () => {
    // pseudo-random based on hash
    hash ^= hash << 13;
    hash ^= hash >>> 17;
    hash ^= hash << 5;
    return ((hash >>> 0) % 1000) / 1000; // 0..0.999
  };

  const userLoadTime = Math.round((2 + rand() * 5) * 100) / 100; // 2.00 - 7.00 s
  const baseScore = 30 + rand() * 40; // 30 - 70
  const noise = (rand() - 0.5) * 6; // +/- 3 points noise
  const userMobileScore = Math.round(clamp(baseScore + noise, 30, 70));

  const ourLoadTime = 0.8;
  const ourMobileScore = 98;

  return { userLoadTime, userMobileScore, ourLoadTime, ourMobileScore };
}

