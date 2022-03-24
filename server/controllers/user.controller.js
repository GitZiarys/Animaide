exports.allAccess = (req, res) => {
    res.status(200).send("Contenu réservé aux utilisateurs d'Animaide.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("Contenu réservé aux utilisateurs inscrits d'Animaide.");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Contenu réservé aux administrateurs d'Animaide.");
  };