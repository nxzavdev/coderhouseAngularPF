export function generateId(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTVWXYZ0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function generateStudentId(length: number) {
  let result = 'ST-';
  const characters = 'ABCDEFGHIJKLMNOPQRSTVWXYZ0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
