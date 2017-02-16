# [Mongo installation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

	$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
	$ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
	$ sudo apt-get update
	$ sudo apt-get install -y mongodb-org
	$ sudo service mongod start


check installation:

	$ nano /var/log/mongodb/mongod.log

the last string should be "...waiting for connections on port..."

# Installation

	$ git clone https://github.com/locust135/react-views-try/
	$ cd react-views-try/
	$ npm i

# Start server

	$ npm start

# Start server[dev]

	$ gulp
