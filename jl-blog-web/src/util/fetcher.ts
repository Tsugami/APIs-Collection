export const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Falhou em carregar');
  }
  return response.json();
};
