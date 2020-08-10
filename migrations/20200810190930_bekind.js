exports.up = function(knex) {
  return knex.schema.createTable("addresses", (table) => {
    table.increments().index();

    table.test("name");

    table.text("ad");

    table.text("word");

    table.text("city");

    table.float("postal_code");
  });
};

exports.down = function(knex, Promise) {};
