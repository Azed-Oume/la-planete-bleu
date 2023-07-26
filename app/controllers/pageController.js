// import Product from "../models/product.js";

// import { send } from "node-dev/lib/ipc";

const pageController = {

  async acceuil(req, res) {
    try {
      res.render('acceuil');
    } catch(error) {
      console.error(error);
      res.status(500).render('error');
    }
  },
  async apropos(req, res){
    try {
      res.render('a-propos')
    } catch(error) {
      console.error(error);
      res.status(500),render('tu as une erreur');
    }
  }
  };

export default pageController;




// Nos Services
// Les Promos
//  Mon Compte
//  Contact
// Plan Su Site