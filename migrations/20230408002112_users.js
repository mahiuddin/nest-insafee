/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
      .createTable('users', function (table) {
        table.increments('id');
        table.string('firstName', 255).notNullable();
        table.string('lastName', 255);
        table.string('email', 255).unique().notNullable();
        table.string('password', 255).unique().notNullable();
      })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };