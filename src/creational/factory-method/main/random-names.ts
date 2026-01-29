export function getRandomName(): string {
  const names = ['João', 'Maria', 'Alex', 'Ana', 'Pedro'];

  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}
