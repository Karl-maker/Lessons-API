module.exports = class User {
  constuctor() {}

  static async getOneById(id = this.id) {
    return {};
  }

  static async getOneByEmail(email = this.email) {
    return {};
  }

  static async deleteById(id = this.id) {
    return {};
  }

  static async deleteByEmail(email = this.email) {
    return {};
  }

  static async updateById(id = this.id, options) {
    return {};
  }

  static async updateByEmail(email = this.email, options) {
    return {};
  }
};
