function create_updated_collection(collection_a, object_b) {
  collection_a.forEach(function(val) {
    for(var i = 0; i < object_b.value.length; i++) {
      if(val.key === object_b.value[i]) {
        val.count = val.count - (val.count - (val.count % 3)) / 3;
      }
      }
    });
  return collection_a;
}
