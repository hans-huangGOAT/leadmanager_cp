import React, { useState } from "react";
import { connect } from "react-redux";
import { addLead } from "../../actions/leads";

const Form = ({ addLead }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addLead({ name, email, message });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="col-md-8 m-auto">
      <div className="card card-body mt-4">
        <h2>Add Lead</h2>
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name..."
              value={name}
              name="name"
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email..."
              value={email}
              name="email"
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Message</label>
            <input
              type="text"
              className="form-control"
              placeholder="Message..."
              value={message}
              name="message"
              onChange={(e) =>
                setMessage(e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary btn-sm"
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { addLead })(Form);
