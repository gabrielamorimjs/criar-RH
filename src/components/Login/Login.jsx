import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ReactModal from "react-modal";
import "./Login.scss";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="login-semimodal">
        <div className="login-box">
          <form noValidate>
            <i className="recourse-box">
              Entendenda melhor os recursos criativos da sua organização!
            </i>
            <TextField
              className="input-email"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              className="input-password"
              variant="outlined"
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              className="confirm-button"
              type="submit"
              variant="contained"
            >
              {" "}
              Entre{" "}
            </Button>
            <div className="or-class">ou</div>
            <Button
              onClick={this.handleOpenModal}
              className="sign-in-button"
              variant="contained"
            >
              Cadastra-se
            </Button>
            {this.handleOpenModal && (
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Minimal Modal Example"
              >
                <button onClick={this.handleCloseModal}>Close Modal</button>
              </ReactModal>
            )}
          </form>
        </div>
      </div>
    );
  }
}
