function objectify(str) {
  return {
    key: str.charAt(0),
    count: 1
  };
}

function count_same_elements(collection) {
  var temp = collection.map(function(val) {
    return objectify(val);
  });

  var result = [];
  temp.forEach(function(val) {
    var exist_items = result.filter(function(item) {
      return item.key === val.key;
    });

    if(exist_items.length === 0) {
      result.push(val);
    }
    else {
      exist_items[0].count++;
    }
  });

  return result;
}

function create_updated_collection(collection_a, object_b) {
  var collection_c = count_same_elements(collection_a);
  collection_c.forEach(function(val) {
    object_b.value.forEach(function(item) {
      if (val.key === item) {
        val.count = val.count - (val.count - (val.count % 3)) / 3;
      }
    });
  });
  return collection_c;
}
