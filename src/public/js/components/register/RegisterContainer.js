const { connect } = require("react-redux");
const Register = require("./Register");
const Paths = require("../../config/paths");
const RegisterRequest = require("./RegisterRequest");
const { ShowAlert } = require("../alert/alertActions");
const { SetUser } = require("../login/loginActions");
const User = require("../login/User");

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: async (event, history) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      const confirmation = event.target.confirmation.value;

      if (password !== confirmation) {
        const title = "Invalid password";
        const message = "Password does not match confirmation";
        return dispatch(ShowAlert(title, message));
      }

      const registerRequest = RegisterRequest(email, password);

      try {
        const response = await fetch(Paths.api.register, registerRequest);
        const json = await response.json();
        if (!response.ok) {
          throw new Error(json.error);
        } else {
          dispatch(SetUser(User(json)));
          history.push(Paths.inbox);
        }
      } catch (error) {
        const title = "Error";
        return dispatch(ShowAlert(title, error.message));
      }
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Register);
