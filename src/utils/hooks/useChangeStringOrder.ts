const generateRandomString = (length: number) => {
  let text = '';
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ%$&#!';

  for (let i = 0; i < length; i++) {
    text += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );
  }
  return text;
};

const useChangeStringOrder = (string: string, fx: (text: string) => void) => {
  const intervals: any[] = [];
  for (let i = 0; i < 3; i++) {
    intervals.push(
      setTimeout(() => fx(generateRandomString(string.length)), 100 * i)
    );
  }

  setTimeout(() => {
    intervals.forEach((interval) => clearInterval(interval));
    fx(string);
  }, 100 * 3);
};

export default useChangeStringOrder;
