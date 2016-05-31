import * as _ from 'lodash';

export class Array {
  static chunk() {
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    console.log(array);
    console.log(_.chunk(array, 2));
    console.log(_.chunk(array, 3));
  }
  static compact() {
    let array = [0, 1, false, 2, '', 3, null, 'undefined'];
    console.log(array);
    console.log(_.compact(array));
  }
  static concat() {
    var array = [1, 34, 43];
    var other = _.concat(array, [3], [4, 3, 5], 34);
    console.log(other);
    console.log(array);
  }
}
