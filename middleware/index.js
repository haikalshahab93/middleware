const applyHelmet = require('./helmet');
const applyBodyParser = require('./bodyParser');
const applyMorgan = require('./morgan');
const applyAuth = require('./auth');

module.exports = (app) => {
  // security middleware
  // applyCors(app);
  applyHelmet(app);
  // 
  // tambahan middleware
  applyBodyParser(app);
  // applyCookiesParser(app);
  // 
  applyMorgan(app);
  applyAuth(app);
}
