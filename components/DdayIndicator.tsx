"use client";

import { calculateDday } from "@/utils/calculateDday";
import { useEffect, useState } from "react";

const targetDateString = new Date("2023-09-02T00:00:00+09:00").toISOString();

const DdayIndicator = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [ddayTimer, setDdayTimer] = useState(calculateDday(targetDateString));

  const { days, hours, minutes, seconds } = ddayTimer;

  useEffect(() => {
    setIsHydrated(true);

    const timer = setInterval(() => {
      setDdayTimer(calculateDday(targetDateString));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isHydrated) return <span>...</span>;

  return (
    <div className="flex gap-4">
      <div>
        <span className="countdown text-2xl">
          <span style={{ "--value": days } as React.CSSProperties}></span>
        </span>
        일
      </div>
      <div>
        <span className="countdown text-2xl">
          <span style={{ "--value": hours } as React.CSSProperties}></span>
        </span>
        시간
      </div>
      <div>
        <span className="countdown text-2xl">
          <span style={{ "--value": minutes } as React.CSSProperties}></span>
        </span>
        분
      </div>
      <div>
        <span className="countdown text-2xl">
          <span style={{ "--value": seconds } as React.CSSProperties}></span>
        </span>
        초
      </div>
    </div>
  );
};

export default DdayIndicator;
