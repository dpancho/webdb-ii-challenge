
exports.up = function(knex) {
    return knex.schema.createTable('cars', function(table) {
        table.increments();

        table.string('VIN', 64).notNullable();
        table.string('Make', 64).notNullable();
        table.string('Model', 64).notNullable();
        table.integer('Milage', 64).notNullable();
        table.string('Transmission', 64);
        table.string('TitleStatus', 64);

        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
