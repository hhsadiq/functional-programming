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
}
