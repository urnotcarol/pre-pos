/*function collect_same_elements(collection_a, collection_b) {
  var same_elements = [];
  var count = 0;
  for(var i = 0; i < collection_a.length; i++) {
    for (var j = 0; j < collection_b.length; j++) {
      if(collection_a[i] === collection_b[j]) {
        same_elements[count++] = collection_a[i];
      }
    }
  }
  return same_elements;
}*/

function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(function(item) {
    return collection_b.indexOf(item) !== -1;
  })
}
