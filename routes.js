var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const express = require('express')
const mysql = require('mysql');
const app = express()



app.use(express.json())

var con = mysql.createConnection({
    host: "mysql-juliette.alwaysdata.net",
    user: "juliette",
    password: "Juliette0608!",
    database: "juliette_collectme"
});


///// Objets /////
// Get All Objets
app.get('/allFigurines', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const user = req.headers.user
        con.query("SELECT * FROM objet WHERE id_user = ?",[user], function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

///// Get Objet By Categorie /////
// Get Objet By Categorie
app.get('/allObjet/categorie', (req,res) => {
    con.connect(function (err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE id_categorie =" + categorie + " AND id_user = " + user
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    })
})

// Get Objet By Categorie & Titre
app.get('/allObjet/categorie/titre', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const titre = req.headers.titre
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND titre = '" + titre + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Titre & Auteur
app.get('/allObjet/categorie/titre/auteur', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const titre = req.headers.titre
        const auteur = req.headers.auteur
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND titre = '" + titre + "' AND auteur = '" + auteur + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Titre & Auteur & Editeur
app.get('/allObjet/categorie/titre/auteur/editeur', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const titre = req.headers.titre
        const auteur = req.headers.auteur
        const editeur = req.headers.editeur
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND titre = '" + titre + "' AND auteur = '" + auteur + "' AND editeur = '" + editeur + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Titre & Auteur & Editeur & Etat
app.get('/allObjet/categorie/titre/auteur/editeur/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const titre = req.headers.titre
        const auteur = req.headers.auteur
        const editeur = req.headers.editeur
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND titre = '" + titre + "' AND auteur = '" + auteur + "' AND editeur = '" + editeur + "' AND etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Titre & Etat
app.get('/allObjet/categorie/titre/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const titre = req.headers.titre
        const auteur = req.headers.auteur
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND titre = '" + titre + "' AND auteur = '" + auteur + "' AND etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Titre & Editeur
app.get('/allObjet/categorie/titre/editeur', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const titre = req.headers.titre
        const editeur = req.headers.editeur
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND titre = '" + titre + "' ANDD editeur = '" + editeur + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Titre & Editeur & Etat
app.get('/allObjet/categorie/titre/editeur/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const titre = req.headers.titre
        const editeur = req.headers.editeur
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND titre = '" + titre + "' AND editeur = '" + editeur + "' AND etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Titre & Etat
app.get('/allObjet/categorie/titre/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const titre = req.headers.titre
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND titre = '" + titre + "' AND etat = '" + etat + "' AND id_user + '" + user + "="
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Auteur
app.get('/allObjet/categorie/auteur', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const auteur = req.headers.auteur
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND auteur = '" + auteur + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Auteur & Editeur
app.get('/allObjet/categorie/auteur/editeur', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const auteur = req.headers.auteur
        const editeur = req.headers.editeur
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND auteur = '" + auteur + "' AND editeur = '" + editeur + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Auteur & Editeur & Etat
app.get('/allObjet/categorie/auteur/editeur/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const auteur = req.headers.auteur
        const editeur = req.headers.editeur
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND auteur = '" + auteur + "' AND editeur = '" + editeur + "' AND etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Auteur & Etat
app.get('/allObjet/categorie/auteur/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const auteur = req.headers.auteur
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND auteur = '" + auteur + "' AND etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Editeur
app.get('/allObjet/categorie/editeur', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const editeur = req.headers.editeur
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND editeur = '" + editeur + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Editeur & Etat
app.get('/allObjet/categorie/editeur/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const editeur = req.headers.editeur
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND editeur = '" + editeur + "' AND etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Categorie & Etat
app.get('/allObjet/categorie/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const categorie = req.headers.categorie
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE categorie = '" + categorie + "' AND etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

///// Get Objet By Titre /////
// Get Objet By Titre
app.get('/allObjet/titre', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const titre = req.headers.titre
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE titre = '" + titre + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Titre & Auteur
app.get('/allObjet/titre/auteur', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const titre = req.headers.titre
        const auteur = req.headers.auteur
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE titre = '" + titre + "' AND auteur = '" + auteur + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Titre & Auteur & Editeur
app.get('/allObjet/titre/auteur/editeur', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const titre = req.headers.titre
        const auteur = req.headers.auteur
        const editeur = req.headers.editeur
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE titre = '" + titre + "' AND auteur = '" + auteur + "' AND editeur = '" + editeur + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Titre & Auteur & Editeur & Etat
app.get('/allObjet/titre/auteur/editeur/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const titre = req.headers.titre
        const auteur = req.headers.auteur
        const editeur = req.headers.editeur
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE titre = '" + titre + "' AND auteur = '" + auteur + "' AND editeur = '" + editeur + "' AND etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Titre & Editeur
app.get('/allObjet/titre/editeur', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const titre = req.headers.titre
        const editeur = req.headers.editeur
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE titre = '" + titre + "' AND editeur = '" + editeur + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Titre & Editeur & Etat
app.get('/allObjet/titre/editeur/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const titre = req.headers.titre
        const editeur = req.headers.editeur
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE titre = '" + titre + "' AND editeur = '" + editeur + "' AND etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Titre & Etat
app.get('/allObjet/titre/etat', (req,res) =>{
     con.connect(function(err) {
        if (err) throw err;
        const titre = req.headers.titre
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE titre = '" + titre + "' AND etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

///// Get Objet By Auteur
// Get Objet By Auteur
app.get('/allObjet/auteur', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const auteur = req.headers.auteur
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE auteur = '" + auteur + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Auteur & Editeur
app.get('/allObjet/auteur/editeur', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const auteur = req.headers.auteur
        const editeur = req.headers.editeur
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE auteur = '" + auteur + "' AND editeur = '" + editeur + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Auteur & Editeur & Etat
app.get('/allObjet/auteur/editeur/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const auteur = req.headers.auteur
        const editeur = req.headers.editeur
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE auteur = '" + auteur + "' AND editeur = '" + editeur + "' AND etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Auteur & Etat
app.get('/allObjet/auteur/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const auteur = req.headers.auteur
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE auteur = '" + auteur + "' AND etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

///// Get Objet By Editeur /////
// Get Objet By Editeur
app.get('/allObjet/editeur', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const editeur = req.headers.editeur
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE editeur = '" + editeur + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

// Get Objet By Editeur & Etat
app.get('/allObjet/editeur/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const editeur = req.headers.editeur
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE editeur = '" + editeur + "' AND etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})

///// Get Objet By Etat /////
app.get('/allObjet/etat', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const etat = req.headers.etat
        const user = req.headers.user
        var sql = "SELECT * FROM objet WHERE etat = '" + etat + "' AND id_user = '" + user + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
})




///// Delete Objet ////
app.delete('/deleteObjet', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const id = req.headers.id
        var sql = "DELETE FROM objet WHERE id_objet = '" + id + "'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json("Delete");
        });
    });
})



///// Update Objet ////
app.post('/updateObjet', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const id = req.headers.id
        const titre = req.headers.titre
        const note = req.headers.note
        const image = req.headers.image
        const auteur = req.headers.auteur
        const editeur = req.headers.editeur
        const prix = req.headers.prix
        const etat = req.headers.etat
        const devise= req.headers.devise
        var sql = "UPDATE objet SET titre = '" + titre + "', notes = '" + note + "', id_image = '" + image + "', auteur = '" + auteur + "', editeur = '" + editeur + "', prix = '" + prix + "', etat = '" + etat + "', devise = '" + devise + "' WHERE id_objet = " + id
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json("Update");
        });
    });
})



///// Create Objet ////
app.post('/createObjet', (req,res) =>{
    con.connect(function(err) {
        if (err) throw err;
        const titre = req.headers.titre
        const note = req.headers.note
        const image = req.headers.image
        const auteur = req.headers.auteur
        const editeur = req.headers.editeur
        const prix = req.headers.prix
        const etat = req.headers.etat
        const devise = req.headers.devise
        const user = req.headers.user
        const categorie = req.headers.categorie
        const id_user = "(SELECT id_user FROM user WHERE pseudo = '" + user + "')"
        const id_categorie = "(SELECT id_categorie FROM categorie WHERE nom = '" + categorie + "')"
        var sql = "INSERT INTO objet(titre, notes, auteur, editeur, prix, etat, devise, id_user, id_categorie) VALUES ('" +titre+ "', '" +note+ "', '" +auteur+ "', '" +editeur+ "', '" +prix+ "', '" +etat+ "', '" +devise+ "', " +id_user+ ", " +id_categorie+ ")"
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json("Objet Create");
        });
    });
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})