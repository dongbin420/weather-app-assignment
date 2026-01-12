export const formatHour = (dtSec: number, timezoneOffsetSec: number): string => {
  const ms = (dtSec + timezoneOffsetSec) * 1000;
  const d = new Date(ms);
  const hour24 = d.getUTCHours();
  const isAM = hour24 < 12;
  const period = isAM ? '오전' : '오후';
  let hour12 = hour24 % 12;
  if (hour12 === 0) hour12 = 12;

  return `${period} ${hour12}시`;
};
