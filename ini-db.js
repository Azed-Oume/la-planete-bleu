import Product from './app/models/product.js';
import sequelize from './app/database.js' ;


//  cette partie éxécute la migration !
try {
    await sequelize.drop();
    await sequelize.sync();
}catch(error) {
    console.error(error);
}
// cette partie éxécute le seeding !
try {/*
     await Product.bulkCreate(
        [
        {title: 'DVD', description: 'Regardez vos films "\préférés"'},
        {title: 'Blu-ray', description: 'La HD c\'est cool'}
        ])
    */
    await Product.create({title: 'DVD', description: 'Regardez vos films préférés'})
    await Product.create({title: 'Blu-ray', description: 'La HD c\'est cool'});
    await Product.create({title: 'CD', description: 'Le CD c\'est FINI'});
    console.log('Les produits ont été ajoutés avec succès !');
} catch (error) {
    console.error('Une erreur s\'est produite lors de l\'ajout des produits :', error);
}
