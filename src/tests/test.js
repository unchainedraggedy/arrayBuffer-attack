import Character, { Magician, Daemon } from "../class";

test('Проверка геттера для дурмана', () => {
  const character = new Character(100);
  character.stoned = true;
  expect(character.stoned).toBe(true);
});

test('Проверка сеттера для атаки', () => {
  const character = new Character(100);
  character.attack = 150;
  expect(character.attack).toBe(150);
});

test('Проверка геттера для дистанции', () => {
  const character = new Character(100);
  character.distance = 2;
  expect(character.distance).toBe(2);
});

test('Проверка атаки с дурманом у демона', () => {
  const daemon = new Daemon(100);
  daemon.distance = 3;
  daemon.stoned = true;
  expect(Math.round(daemon.attack)).toBe(72);
});

test('Проверка атаки с дурманом у мага на дистанции 3', () => {
  const magician = new Magician(100);
  magician.distance = 3;
  magician.stoned = true;
  expect(Math.round(magician.attack)).toBe(72);
});

test('Проверка, что атака не может быть отрицательной', () => {
  const magician = new Magician(30);
  magician.distance = 10;
  magician.stoned = true;
  expect(magician.attack).toBe(0);
});

test('Проверка, что дистанция не может быть меньше 1', () => {
  const magician = new Magician(100);
  expect(() => {
    magician.distance = 0;
  }).toThrow('расстояние должно быть хотя бы единицей');
});
