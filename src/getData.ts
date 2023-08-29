export const getData = async (): Promise<string> => {
  const res = await fetch("https://test-api.austinshelby.com/time");
  const json = await res.json();
  return json.time;
};
