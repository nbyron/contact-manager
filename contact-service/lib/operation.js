exports.GET_CONTACTS_OP = 'GET_CONTACTS';
exports.GET_CONTACT_OP = 'GET_CONTACT';
exports.POST_CONTACT_OP = 'POST_CONTACTS';
exports.PUT_CONTACT_OP = 'PUT_CONTACT';
exports.DELETE_CONTACT_OP = 'DELETE_CONTACT';

exports.getOperation = function(resource, httpMethod) {
  const resourceDefinitionMap = {
    '/v1/accounts/{accountId}/contacts/{contactId}': 'CONTACT',
    '/v1/accounts/{accountId}/contacts': 'CONTACTS'
  };
  
  return httpMethod + '_' + resourceDefinitionMap[resource];
}
