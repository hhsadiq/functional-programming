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
    //var other = _.concat(array, [3], [4, 3, 5], 34);
    var other = _.concat(array, [3], [4, 3, 5]);
    console.log(other);
    console.log(array);
  }

  static difference() {
    let array = ['ali', 'hassaan', 'ahmed', null];
    let values = [null, 'salman', 'ahmed'];
    console.log(array);
    console.log(values);
    console.log(_.difference(array, values));
  }

  static differenceBy() {
    //it makes two new arrays according to criteria of iteratee function, compares them
    //just like difference, and return result form original array.
    let array = ['ali', 'hassaan', 'ahmed'];
    let values = ['salman', 'ahmed'];
    console.log(array);
    console.log(values);
    console.log(_.differenceBy(array, values, n => n[0]));
    console.log(_.differenceBy(array, values, n => n.slice(-1)));
  }

  static differenceWith() {
    //it takes comparator function which gets values from array and values
    //if comparator returns true, the corresponding value from array will be
    //dropped
    let array = [4, 5, 6, 34, 2];
    let values = [8, 36, 2, 16];
    console.log(array);
    console.log(values);
    //exclude all values from array whose square is present in values.
    console.log(_.differenceWith(array, values, (arr:any, val:any) => arr*arr === val));
  }
}
