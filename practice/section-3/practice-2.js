function create_updated_collection(collection_a, object_b) {
  collection_a.forEach(function(val) {
    object_b.value.forEach(function(item) {
      if (val.key === item) {
        val.count = val.count - (val.count - (val.count % 3)) / 3;
      }
    });
  });
  return collection_a;
}