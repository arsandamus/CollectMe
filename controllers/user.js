const bcrypt = require('bcrypt');

const User = require('../models/users');

//Fonction enregistrement des utilisateurs
exports.signup = (req, res, next) => {
    //cryptage du mot de passe
    //algorythme de cryptage réalisé 10 fois
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          pseudo: req.body.pseudo,
          password: hash
        });
        //enregistrement dans la bdd
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };
//Fonction connexion des utilisateurs
exports.login = (req, res, next) => {

};