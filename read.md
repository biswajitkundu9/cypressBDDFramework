This document will give idea about entire framework

#For Installation Use the below command

    npm install

#Now run the below command

    npx cypress open

#Now 




Docker DB related Changes
=======================================
Using docker-compose up
=======================================
    Since you published port 3306 on your docker host, from that host itself you would connect to 127.0.0.1:3306

Using docker-compose run
=======================================
    In that case the port mapping section of the docker-compose.yml file is ignored. To have the port mapping section considered, you have to add the --service-ports option:

                docker-compose run --service-ports db

Additional note
=======================================
Beware that by default, the mysql client tries to connect using a unix socket when you tell it to connect to localhost. So do use 127.0.0.1 and not localhost:

                mysql -h 127.0.0.1 -P 3306 -u root


To Start the service using compose file
=======================================
                docker-compose up db -d


To Start the service using compose file
=======================================
                docker-compose down db