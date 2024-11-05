module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        {title: "Fazer compras"},
        {title: "Consertar pc"},
        {title: "Fazer caminhada"},
        {title: "Pedalar"},
      ])
    }
  }
}