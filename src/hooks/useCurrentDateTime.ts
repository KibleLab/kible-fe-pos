import { useState, useEffect, useMemo } from 'react';

type DateTimeOptions = {
  interval?: number;
  showTime?: boolean;
};

export const useCurrentDateTime = (options: DateTimeOptions = {}) => {
  const { interval = 1000, showTime = false } = options;

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, interval);
    return () => clearInterval(id);
  }, [interval]);

  const formattedDate = useMemo(() => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    if (showTime) {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${seconds}`;
    }

    return `${year}년 ${month}월 ${day}일`;
  }, [date, showTime]);

  return formattedDate;
};
