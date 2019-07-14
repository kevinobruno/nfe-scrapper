module.exports = {
  dialect: 'postgres',
  host: 'postgres',
  database: 'nfc_scrapper',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
