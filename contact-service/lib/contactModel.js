const DynamoDBModel = require('dynamodb-model');
const contactSchema = new DynamoDBModel.Schema({
  accountId: {
    type: String,
    key: 'hash'
  },
  contactId: {
    type: String,
    key: 'range'
  },
  firstName: String,
  lastName: String,
  emailAddress: String,
  birthdayDay: String,
  birthdayMonth: String,
  updatedAt: String,
  createdAt: String
});
const contactTable = new DynamoDBModel.Model('Contacts', contactSchema);

exports.getContact = function(accountId, contactId, callback) {
  const key = getKey(accountId, contactId);
  contactTable.getItem(key, function(err, item, response) {
    if (err) callback(err);
    callback(item);
  });
}

getKey = function(accountId, contactId) {
  return { 'accountId': accountId , 'contactId': contactId };
}
