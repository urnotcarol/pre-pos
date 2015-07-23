function create_updated_collection(collection_a, object_b) {
  collection_a.forEach(function(val) {
    object_b.value.forEach(function(item) {
      if (val.key === item) {
        val.count--;
      }
    });
  });
  return collection_a;
}
