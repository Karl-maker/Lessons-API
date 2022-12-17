module.exports = class Lesson {
  constructor(user_id = "") {
    this.user_id = user_id;
  }

  static async create(options) {
    return {};
  }

  /**
   * @desc Get one lesson by its id
   * @param { String } id
   * @param { Object } options
   * @returns Object of lesson
   */

  static async getOneById(id = this.id, options = {}) {
    return {};
  }

  /**
   * @desc Get all lessons
   * @param {*} options
   * @returns Array of objects
   */

  static async getAll(options = {}) {
    return [];
  }

  /**
   * @desc Delete lesson
   * @param {*} id
   * @returns Returns Bool to show if it was successful or not
   */

  static async delete(id = this.id) {
    return {};
  }

  /**
   * @desc Update lesson
   * @param {*} id
   * @param {*} options
   * @returns Object of updated lesson
   */

  static async update(id = this.id, options = {}) {
    return {};
  }
};
