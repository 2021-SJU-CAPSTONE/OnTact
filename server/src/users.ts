const user = {};

export const create = socket => {
  const id = Math.ceil(Math.random() * 1000000);
  user[id] = socket;
  return id;
};
export const get = (id: number) => {
  return user[id];
};

export const remove = (id: number) => {
  delete user[id];
};
