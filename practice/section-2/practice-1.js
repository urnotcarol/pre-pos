function objectify(str) {
  return {
    key: str.charAt(0),
    count: 1
  };
}

function count_same_elements(collection) {
  var result = [];
  var temp = collection.map(function(val) {
    return objectify(val);
  });

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
