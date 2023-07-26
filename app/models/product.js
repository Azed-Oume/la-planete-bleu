// on importe la classe la mère et la liste des types fournis par sequelize
import { Model, DataTypes } from 'sequelize';
// on importe notre client connecté à la base de données
import sequelize from "../database.js";

// on définit le modèle qui étend la classe mère et hérite donc de ses méthodes

class Product extends Model {}

Product.init({
title: {
    type: DataTypes.TEXT, // on configure un type
    allowNull: false, // on peut configurer des contraintes qui se mettront
    },
description: {
    type: DataTypes.TEXT, // on configure un type
    allowNull: false, // on peut configurer des contraintes qui se mettront
    }
  },
 { // dans le 2ème objet on dit dans quelle bdd devront persister les infos
  sequelize, // pour cela on indique le client connecté à la bdd
  modelName: 'Product', // on donne un nom au modèle, cela pourra servir plus tard
  tableName: 'product', // on peut demander à sequelize de ranger les infos liées à ce modèle dans la table de notre choix
});

export default Product;