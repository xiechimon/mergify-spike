export function page(items, pageNumber, pageSize) {
  const start = pageNumber * pageSize;
  return items.slice(start, start + pageSize + 1);
}

export function isAdmin(user) {
  return user.role === 'admin';
}
