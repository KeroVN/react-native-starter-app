export default class Arrays {

  static findFirst(array, predicate) {
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        return i;
      }
    }
    return -1;
  }

}
