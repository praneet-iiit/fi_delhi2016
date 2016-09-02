oauth2-example-client
===================

Oauth2 authentication example for FI-WARE GE applications

- Software requirements:

	+ nodejs
	+ npm

- Install the dependencies:

	npm install

- Configure OAuth2 credentials in config.js file (you will find theme in your IDM account)

	rename the file config.js.template to config.js
	Go to https://account.lab.fiware.org with your fi-lab account and register your application.
	On creation of application provide the application URL and callback URL
	After you register the application under Oauth2 drop down you will see the client ID and Client secret
	Copy and paste those two to the config.js file as config.client_id and config.client_secret respectively.
	Also paste your callbacl URL here.

- Start example server

	sudo node server

- Connect to http://localhost to try the example

* Connect to http://localhost/logout to delete session cookies once you have logout in IDM portal
