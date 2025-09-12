exports.up = knex => {
    return knex.schema.raw('CREATE SCHEMA journal_dsc')
};

exports.down = knex => {
    return knex.schema.dropSchema('journal_dsc', true)
};