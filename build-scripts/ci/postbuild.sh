#!/bin/bash

##############################################
# POST BUILD SCRIPT
# Do any post-build cleanup here
# This is to be run directly on build server

set -x;
##############################################

# Need CSRF token and API key
KEY=$(cat /var/lib/jenkins/secrets/rocketloans-ci-api-key);
CRUMB=$(curl -s "http://rocketloans-ci-dev:$KEY@127.0.0.1:8080/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,\":\",//crumb)");

curl -H $CRUMB -X POST http://rocketloans-ci-dev:$KEY@127.0.0.1:8080/job/ui-react-common/build;
