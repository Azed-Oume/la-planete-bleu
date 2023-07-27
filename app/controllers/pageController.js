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
      res.render('a-propos');
    } catch(error) {
      console.error(error);
      res.status(500),render('tu as une erreur');
    }
  },
  async contact(req, res){
    try {
      res.render('contact');
    } catch(error) {
      console.error(error);
      res.status(500),render('tu as une erreur');
    }
  },
  async nosServices(req, res){
    try {
      res.render('nos-services');
    } catch(error) {
      console.error(error);
      res.status(500),render('tu as une erreur');
    }
  },
  async lesPromos(req, res){
    try {
      res.render('les-promos');
    } catch(error) {
      console.error(error);
      res.status(500),render('tu as une erreur');
    }
  },
  async monCompte(req, res){
    try {
      res.render('mon-compte');
    } catch(error) {
      console.error(error);
      res.status(500),render('tu as une erreur');
    }
  },
  async planDuSite(req, res){
    try {
      res.render('plan-du-site');
    } catch(error) {
      console.error(error);
      res.status(500),render('tu as une erreur');
    }
  },

  }

export default pageController;




// Nos Services
// Les Promos
//  Mon Compte
//  Contact
// Plan Su Site