import _ from 'lodash';

export class Functions {
  /**
   *
   */
  static after () {
    var saves = ['profile', 'settings'];

    var done = _.after(saves.length, () => console.log('done saving!'));

    _.forEach(saves, type => this.asyncSave({ 'type': type, 'complete': done }));
    // → Logs 'done saving!' after the two async saves have completed.
  }

  /**
   *
   * @param input
   */
  static asyncSave(input) {
    console.log('saving ', input.type);
    input.complete();
  }

  static ary() {
    console.log(_.map(['6', '8', '10'], (val, index) => parseInt(val, index)));
    console.log(_.map(['6', '8', '10'], (val, index) => _.ary(parseInt, 1)(val, index)));
    console.log(_.map(['6', '8', '10'], _.ary(parseInt, 1)));
    // → [6, 8, 10]
  }
}
