export const loader = defineServerLoader(async event => {
  const { id } = getQuery<{ id: string }>(event);
  // This composable accepts an h3 event handler, you can use any logic that you
  // want here, including database calls, etc.
  return { id };
});
