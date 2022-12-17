module.exports = class Subscription {
  constructor() {}

  /**
   *
   * @param {*} user_id
   * @param {*} options
   * @returns
   */

  static async create(user_id, options) {
    return {};
  }

  /**
   *
   * @param {*} id
   * @returns
   */

  static async delete(id = this.id) {
    return {};
  }

  /**
   *
   * @param {*} id
   * @returns
   */

  static async getOneById(id = this.id) {
    return {};
  }

  /**
   *
   * @param {*} id
   * @returns
   */

  static async getAll(options = {}) {
    return {};
  }
};
