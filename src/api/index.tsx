export async function fetchStatData() {
  const response = await fetch('/api/debug/stat');
  const data = await response.json();
  const result = data?.data;
  return result || [];
}

