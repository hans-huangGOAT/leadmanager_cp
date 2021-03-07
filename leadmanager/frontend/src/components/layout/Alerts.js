import React, { useEffect, useRef } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alerts = ({ alert, message, error }) => {
  Alerts.propTypes = {
    alert: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
  };

  const flag = useRef(false);

  useEffect(() => {
    if (flag.current) {
      if (message.msg) {
        alert.success(message.msg);
      }
      if (error.msg.name) {
        alert.error(
          `name: ${error.msg.name.join()}`
        );
      }
      if (error.msg.email) {
        alert.error(
          `email: ${error.msg.email.join()}`
        );
      }
      if (error.msg.message) {
        alert.error(
          `message: ${error.msg.message.join()}`
        );
      }
    } else {
      flag.current = true;
    }
  }, [message, error]);

  return <></>;
};

const mapStateToProps = (state) => ({
  message: state.messages,
  error: state.errors,
});

export default connect(mapStateToProps)(
  withAlert()(Alerts)
);
