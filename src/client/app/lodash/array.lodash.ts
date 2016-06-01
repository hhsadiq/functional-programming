import * as _ from 'lodash';

export class Array {
  /**
   * Creates an array of elements split into groups the length of size.
   * If array can’t be split evenly, the final chunk will
   * be the remaining elements.
   */
  static chunk() {
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    console.log(array);
    console.log(_.chunk(array, 2));
    console.log(_.chunk(array, 3));
  }

  /**
   * Creates an array with all falsey values removed.
   * The values false, null, 0, "", undefined, and NaN are falsey.
   */
  static compact() {
    let array = [0, 1, false, 2, '', 3, null, 'undefined'];
    console.log(array);
    console.log(_.compact(array));
  }

  /**
   * Creates a new array concatenating array with any additional
   * arrays and/or values.
   */
  static concat() {
    var array = [1, 34, 43];
    //var other = _.concat(array, [3], [4, 3, 5], 34);
    var other = _.concat(array, [3], [4, 3, 5]);
    console.log(other);
    console.log(array);
  }

  /**
   * Creates an array of unique array values not included in the
   * other given arrays using SameValueZero for equality comparisons.
   * The order of result values is determined by the order they
   * occur in the first array.
   */
  static difference() {
    let array = ['ali', 'hassaan', 'ahmed', null];
    let values = [null, 'salman', 'ahmed'];
    console.log(array);
    console.log(values);
    console.log(_.difference(array, values));
  }

  /**
   * This method is like _.difference except that it accepts iteratee which is
   * invoked for each element of array and values to generate the criterion by
   * which they're compared. Result values are chosen from the first array.
   * The iteratee is invoked with one argument: (value).
   */
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

  /**
   * This method is like _.difference except that it accepts comparator which is
   * invoked to compare elements of array to values. Result values are chosen
   * from the first array. The comparator is invoked with two arguments:
   * (arrVal, othVal).
   */
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

  /**
   * Creates a slice of array with n elements dropped from the beginning.
   */
  static drop() {
    let array = [4, 5, 6, 34, 2];
    console.log(array);
    console.log(_.drop(array));
    console.log(_.drop(array, 2));
    console.log(_.drop(array, 0));
    console.log(_.drop(array, -1));
    console.log(_.drop(array, 9));
  }

  /**
   * Creates a slice of array with n elements dropped from the end.
   */
  static dropRight() {
    let array = [4, 5, 6, 34, 2];
    console.log(array);
    console.log(_.dropRight(array));
    console.log(_.dropRight(array, 2));
    console.log(_.dropRight(array, 0));
    console.log(_.dropRight(array, -1));
    console.log(_.dropRight(array, 9));
  }
}
