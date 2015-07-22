// function create_updated_collection(collection_a, object_b) {
//   for(var i = 0; i < collection_a.length; i++) {
//     for(var j = 0; j < object_b.value.length; j++) {
//       if(collection_a[i].key === object_b.value[j]) {
//         collection_a[i].count--;
//       }
//     }
//   }
//   return collection_a;
// }

function create_updated_collection(collection_a, object_b) {
  collection_a.forEach(function(val) {
    for(var i = 0; i < object_b.value.length; i++) {
      if(val.key === object_b.value[i]) {
        val.count--;
      }
      }
    });
  return collection_a;
}
