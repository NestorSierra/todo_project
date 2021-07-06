const users = [{ _id: 1, username: "user1", password: "12345", name: "user1" }];

export function getUsers() {
  return users.filter((t) => t);
}

export function getUser(userId) {
  return users.filter((t) => t.id === userId);
}

export function loginUser(user) {
  let userInDb = users.find(
    (t) => t.username === user.username && t.password === user.password
  );

  return userInDb;
}

export function saveUser(user) {
  let userInDb = users.find((t) => t._id === user._id) || {};
  userInDb.name = user.name;
  userInDb.username = user.username;
  userInDb.password = user.password;

  if (!userInDb._id) {
    userInDb._id = getNextId();
    users.push(userInDb);
  }

  console.log(users);
  return userInDb;
}

function getNextId() {
  let id = Math.max.apply(
    Math,
    users.map((t) => t._id)
  );
  id = id + 1;
  return id;
}
