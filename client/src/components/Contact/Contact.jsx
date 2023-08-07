import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className='contact pb-5 pt-5' id='contact'>
      <div className='container'>
        <h2 className='text-white mb-3'>Contact Us</h2>
        <form>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group mb-2'>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='Name'
                ></input>
              </div>
              <div className='form-group mb-2'>
                <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='Email'
                ></input>
              </div>
              <div className='form-group mb-2'>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='Subject'
                ></input>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group mb-2'>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='5'
                  placeholder='Write your message'
                ></textarea>
              </div>
            </div>
          </div>

          <button type='submit' className='btn btn-light mb-2'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
