export const formatTemp = (value: number) => `${Math.round(value)}°`;

export const formatLocalTime = (offsetSeconds: number) => {
  const targetMs = Date.now() + offsetSeconds * 1000;
  const date = new Date(targetMs);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours < 12 ? '오전' : '오후';
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  const minuteLabel = String(minutes).padStart(2, '0');
  return `${year}년 ${month}월 ${day}일 ${period} ${hour12}:${minuteLabel}`;
};
