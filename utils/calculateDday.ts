export const calculateDday = (date: string) => {
  const now = new Date();
  const target = new Date(date);
  const diff = Math.abs(target.getTime() - now.getTime());
  const isPassed = target.getTime() - now.getTime() < 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isPassed };
};
