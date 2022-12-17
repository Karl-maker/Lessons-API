module.exports = class Course {
  constructor() {}

  /**
   * @desc Get all courses
   * @param {*} options
   * @returns Array of courses
   */

  static async getAll(options = {}) {
    return [];
  }

  /**
   * @desc Get on by id
   * @param {*} id
   * @param {*} options
   * @returns Object
   */

  static async getOneById(id = this.id, options = {}) {
    return {};
  }

  /**
   * @desc Update
   * @param {*} id
   * @param {*} options
   * @returns Object of updated course
   */

  static async update(id = this.id, options = {}) {
    return {};
  }

  /**
   *
   * @param {*} options
   * @returns
   */

  static async create(options) {
    return {};
  }

  static async delete(id = this.id) {
    return {};
  }
};
