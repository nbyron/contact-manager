const OperationUtility = require('lib/operation');
const ContactModel = require('lib/contactModel');

exports.handleRequest = function(event, context, responseCallback) {
  // const eventString = JSON.stringify(event);
  // console.log('processing: ' + eventString);

  const httpMethod = event.httpMethod;
  const resource = event.resource;
  const pathParameters = event.pathParameters;
  let body = null;
  if(event.body) {
    body = event.body;
  }

  const accountId = pathParameters.accountId;
  let contactId = null;
  if(pathParameters.contactId) {
    contactId = pathParameters.contactId;
  }

  const operation = OperationUtility.getOperation(resource, httpMethod);
  switch(operation) {
    case OperationUtility.GET_CONTACTS_OP:
      break;
    case OperationUtility.GET_CONTACT_OP:
      handleGetContact(accountId, contactId, responseCallback);
      break;
    case OperationUtility.POST_CONTACT_OP:
      break;
    case OperationUtility.PUT_CONTACT_OP:
      break;
    case OperationUtility.DELETE_CONTACT_OP:
      break;
    default:
      console.log("hit default");
      break;
  }
}

handleGetContact = function(accountId, contactId, responseCallback) {
  ContactModel.getContact(accountId, contactId, function(data) {
    const responseBody = JSON.stringify(data)
    responseCallback(null, buildResponse(200, responseBody));
  });
}

buildResponse = function(statusCode, body) {
  return { 'statusCode': statusCode, 'body': body };
}
