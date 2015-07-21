function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var same_elements = [];
  var count = 0;
  for(var i = 0; i < collection_a.length; i++) {
    for(var j = 0; j < object_b.value.length; j++) {
      if(collection_a[i].key === object_b.value[j]) {
        same_elements[count] = collection_a[i].key;
        count++;
      }
    }
  }
  return same_elements;
}
