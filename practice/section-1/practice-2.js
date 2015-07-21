/*function collect_same_elements(collection_a, collection_b) {
  var same_elements = [];
  var count = 0;
  for(var i = 0; i < collection_a.length; i++) {
    for(var j = 0; j < collection_b.length; j++) {
      for(var k = 0; k < collection_b[j].length; k++) {
        if(collection_a[i] === collection_b[j][k]) {
          same_elements[count++] = collection_a[i];
        }
      }
    }
  }
  return same_elements;
}*/

function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(function(item) {
    for(var i = 0; i < collection_b.length; i++) {
      return collection_b[i].indexOf(item) !== -1;
    }
  })
}
