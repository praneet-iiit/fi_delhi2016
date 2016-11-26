var config = {}

config.idmURL = 'https://account.lab.fiware.org';
config.client_id = '1ee970a4a37241e38fef59e61a12a3e4';
config.client_secret = '7293663224da4a4c99337388ab794096';
config.callbackURL = 'http://localhost:3128/login';

// Depending on Grant Type:
// Authorization Code Grant: code
// Implicit Grant: token
config.response_type = 'code';

module.exports = config;
