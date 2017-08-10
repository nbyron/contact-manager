rm -rf contact-service.zip
zip -r contact-service.zip ./node_modules
zip -r contact-service.zip ./lib
zip -r contact-service.zip ./contactHandler.js
aws lambda update-function-code --function-name contact-service --zip-file fileb://contact-service.zip
