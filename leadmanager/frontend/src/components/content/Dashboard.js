import React, { useEffect } from "react";
import Form from "./Form";
import Leads from "./Leads";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";

const Dashboard = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container">
      <Form />
      <Leads />
    </div>
  );
};

export default connect(null, { loadUser })(
  Dashboard
);
