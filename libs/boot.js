module.exports = async app => {
  try {
    await app.db.sync();
    app.listen(app.get("port"), () => {
      console.log(`NTask - porta ${app.get("port")}`);
    });
  } catch (error) {
    console.error("Erro ao sincronizar o banco de dados:", error);
  }
};
