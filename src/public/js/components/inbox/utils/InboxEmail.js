const formatTimestamp = require("../../../utils/formatTimestamp");

const InboxEmail = (incomingEmail) => {
  let maybeRecipients;
  const id = incomingEmail._id || "";
  const subject = incomingEmail.subject || "";
  const body = incomingEmail.message || "";
  const viewedAt = incomingEmail.viewedAt || "";
  const type = incomingEmail.type || "";
  const isImportant = incomingEmail.isImportant || false;
  let maybeTimestamp = incomingEmail.timestamp || "";

  try {
    maybeRecipients = incomingEmail.recipients.join(", ");
  } catch (error) {
    console.error(error.message);
    maybeRecipients = "";
  }

  try {
    maybeTimestamp = formatTimestamp(maybeTimestamp);
  } catch (error) {
    console.error(error.message);
    maybeTimestamp = "";
  }

  return {
    id,
    subject,
    isImportant,
    body,
    type,
    recipients: maybeRecipients,
    viewedAt,
    timestamp: maybeTimestamp,
  };
};

module.exports = InboxEmail;
