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

  return <span>{`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`}</span>;
};

export default DdayIndicator;
