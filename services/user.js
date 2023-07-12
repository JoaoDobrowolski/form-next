let users = [];

export function register(body) {
  const user = users.find(({ email }) => email === body.email);
  if (user) throw new Error('User already registered');

  users.push(body);
  return body;
}

export function login(body) {
  const user = users.find(({ email }) => email === body.email);
  if (!user) throw new Error('User not found');
  if (user.password !== body.password) throw new Error('Incorrect password');

  return user;
}