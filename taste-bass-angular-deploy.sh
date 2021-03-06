#!/bin/bash
PROJECT_NAME=TasteBassAngular
TOMCAT_APP_NAME=TasteBass
EC2_ALIAS=tastebass
URL=http://ec2-3-22-185-67.us-east-2.compute.amazonaws.com:8080/

cd $PROJECT_NAME
echo 'Building Angular application...' && ng build --prod --deploy-url $URL/$TOMCAT_APP_NAME/ > /dev/null && echo 'Angular Application successfully built'

cd dist/$PROJECT_NAME

echo 'Attempting to create new directory on ec2 for tomcat webapp... ' && ssh $EC2_ALIAS "cd apache-tomcat-9.0.46/webapps; mkdir $TOMCAT_APP_NAME" 2> /dev/null || echo 'Not creating another directory... directory already exists'

echo 'Deploying to Tomcat on EC2...' && scp * $EC2_ALIAS:/home/ec2-user/apache-tomcat-9.0.46/webapps/$TOMCAT_APP_NAME/ && echo 'Deployment successful!'