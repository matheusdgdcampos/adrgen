export function generateDate() {
  const dayOfMonth = new Date().getDate();
  const monthOfYear = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  return `${year}-${monthOfYear}-${dayOfMonth}`;
}