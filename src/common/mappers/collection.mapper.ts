export const mapToCollection = <A, B>(collection: A[], mapFn: (A) => B): B[] => {
  console.log('collection', collection);
  console.log('mapFn', mapFn);
  return Array.isArray(collection) ? collection.map(mapFn) : [];
}
