const productsModel = `
    create table if not exists products(
        id serial primary key,
        name varchar(64),
        price numeric(10,2),
        count smallint not null default 1
    );
`;

module.exports = productsModel;