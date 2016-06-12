import _ from 'lodash';

export class General {

  /**
   * Test
   * @returns {*}
   */
  static first () {
    return _.uniq([1, 1]);
  }
}
