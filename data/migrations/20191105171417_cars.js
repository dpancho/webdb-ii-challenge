
exports.up = function(knex) {
    return knex.schema.createTable('cars', function(table) {
        table.increments();

        table.string('VIN').notNullable();
        table.string('Make').notNullable();
        table.string('Model').notNullable();
        table.integer('Milage').notNullable();
        table.string('Transmission');
        table.string('TitleStatus');

        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
