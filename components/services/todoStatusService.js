export const status = [
  { _id: 1, name: "TODO :'(" },
  { _id: 2, name: "Completed" },
];

export function getStatus() {
  return status.filter((t) => t);
}

export function getStatusById(statusId) {
  return status.filter((t) => t._id === statusId);
}
