import { useState, useEffect } from "react";

/**
 * Returns live countdown values (days, hours, mins, secs)
 * @param {Date} target - Target date/time to count down to
 */
export function useCountdown(target) {
  const [diff, setDiff] = useState(() => target - new Date());

  useEffect(() => {
    const id = setInterval(() => setDiff(target - new Date()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const pad = (n) => String(Math.max(0, n)).padStart(2, "0");
  const d = Math.max(0, diff);

  return {
    days: pad(Math.floor(d / 86_400_000)),
    hours: pad(Math.floor((d % 86_400_000) / 3_600_000)),
    mins: pad(Math.floor((d % 3_600_000) / 60_000)),
    secs: pad(Math.floor((d % 60_000) / 1_000)),
  };
}
