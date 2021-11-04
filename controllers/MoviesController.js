const MoviesModel = require("../models/Product");

exports.GetIndex = (req, res, next) => {
  //arrow functions
  MoviesModel.GetAll(function (products) {
    res.render("movies/index", {
      pageTitle: "Melvin Movies",
      prods: products,
      hasProducts: products.length > 0,
      MoviesActive: true,
    });
  });
};

exports.GetMovies = (req, res, next) => {
    //arrow functions
    ProductModel.GetAll(function (products) {
      res.render("movies/product-list", {
        pageTitle: "Products",
        prods: products,
        hasProducts: products.length > 0,
        MoviesActive: true,
      });
    });
  };

exports.GetAccion = (req, res, next) => {
  //arrow functions
  MoviesModel.GetAll(function (products) {
    res.render("Movies/Accion", {
      pageTitle: "Accion",
      prods: products,
      hasProducts: products.length > 0,
      AccionActive: true,
    });
  })
 
};

exports.GetComedia = (req, res, next) => {
    //arrow functions
    MoviesModel.GetAll(function (products) {
      res.render("Movies/Comedia", {
        pageTitle: "Comedia",
        prods: products,
        hasProducts: products.length > 0,
        ComediaActive: true,
      });
    })
   
};

  exports.GetDocumentales = (req, res, next) => {
    //arrow functions
    MoviesModel.GetAll(function (products) {
      res.render("Movies/Documentales", {
        
        pageTitle: "Documentales",
        prods: products,
        hasProducts: products.length > 0,
        DocumentalesActive: true,
      });
    })
   
};

  exports.GetSuspenso = (req, res, next) => {
    //arrow functions
    MoviesModel.GetAll(function (products) {
      res.render("Movies/Suspenso", {
        pageTitle: "Suspenso",
        prods: products,
        hasProducts: products.length > 0,
        SuspensoActive: true,
      });
    })
   
};

  exports.GetTerror = (req, res, next) => {
    //arrow functions
    MoviesModel.GetAll(function (products) {
      res.render("Movies/Terror", {
        pageTitle: "Terror",
        prods: products,
        hasProducts: products.length > 0,
        TerrorActive: true,
      });
    })  
};



