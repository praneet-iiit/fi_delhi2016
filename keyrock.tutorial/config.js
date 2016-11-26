var config = {}

config.idmURL = 'https://account.lab.fiware.org';
config.client_id = '';
config.client_secret = '';
config.callbackURL = 'http://localhost/login';

// Depending on Grant Type:
// Authorization Code Grant: code
// Implicit Grant: token
config.response_type = 'code';

module.exports = config;
