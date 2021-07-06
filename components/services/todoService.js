import * as StatusApi from "./todoStatusService";
import * as UserApi from "./userService";

const todos = [
  {
    _id: 1,
    name: "Todo 1",
    status: { _id: 1, name: "TODO :'(" },
    user: { _id: 1, username: "user1", password: "12345", name: "user1" },
  },
  {
    _id: 2,
    name: "Todo 2",
    status: { _id: 1, name: "TODO :'(" },
    user: { _id: 1, username: "user1", password: "12345", name: "user1" },
  },
];

export function getTodos() {
  console.log(todos);
  return todos;
}

export function getTodoByUser(userId) {
  return todos.filter((t) => t.user._id === userId);
}

export function getTodoByStatusId(statusId) {
  return todos.filter((t) => t.status._id === statusId);
}

export function getTodoByUserIdStatusId(userId, statusId) {
  return todos.filter(
    (t) => t.user._id === userId && t.status._id === statusId
  );
}

export function getTodo(id) {
  return todos.find((t) => t._id === id);
}

export function saveTodo(todo) {
  let todoInDb = todos.find((m) => m._id === todo._id) || {};
  todoInDb.name = todo.name;
  todoInDb.status = StatusApi.getStatusById(todo.statusId);
  todoInDb.user = UserApi.getUser(todo.userId);

  if (!todoInDb._id) {
    todoInDb._id = getNextId();
    todos.push(todoInDb);
  }

  return todoInDb;
}

export function deleteTodo(id) {
  let todoInDb = todos.find((m) => m._id === id);
  todos.splice(todos.indexOf(todoInDb), 1);
  return todoInDb;
}

function getNextId() {
  let id = Math.max.apply(
    Math,
    todos.map((t) => t._id)
  );
  id = id + 1;
  return id;
}
