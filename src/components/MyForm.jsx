import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xjvagnza"
        method="POST"
      >
          <div className="form-group">
            <input className="form-control form-control-lg mt-4" required name="name" placeholder="Your Name." />
          </div>

          <div className="form-group">
            <input className="form-control form-control-lg mt-4" required type="email" name="email" placeholder="Your Email." />
          </div>

          <div className="form-group">
            <input className="form-control form-control-lg mt-4" required type="mobile" name="mobile" placeholder="Your Mobile Number." />
          </div>
          <div className="form-group">
            <textarea className="form-control form-control-lg mt-4" required name="message" placeholder="Your Message."></textarea>
          </div>
        {status === "SUCCESS" ? <p className="p-3 text-light" style={{backgroundColor: 'orangered'}}>
            Thank you for your enquiry I will get back to you as soon as possible <br/> <strong>Vahid Sediqi</strong>
            </p> : <button className="btn btn-outline-secondary">Submit</button>}
        {status === "ERROR" && <p className="text-danger">Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}











