export default function formatToHoursAndMinutes(totalMinutes) {
  function padToTwoDigits(num) {
    return num.toString().padStart(2, '0');
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)} hours`;
}
