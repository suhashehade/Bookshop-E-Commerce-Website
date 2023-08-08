import React from "react";
import "./Footer.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className='footer p-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='d-flex'>
              <img
                alt=''
                width='40%'
                height='60%'
                src={require("../../assets/images/logo_light.png")}
              />
              <h6 className='mt-5 text-white'>Knowledge Journey</h6>
            </div>
          </div>
          <div className='col-md-4'>
            <h3>Contact</h3>
            <ul className='list-unstyled'>
              <div className='d-flex'>
                <li className='m-2'>
                  <span className='contact-ball d-flex justify-content-center align-items-center'>
                    <Icon icon='ic:outline-email' color='white' />
                  </span>
                </li>
                <li className='m-2'>
                  <span className='contact-ball d-flex justify-content-center align-items-center'>
                    <Icon icon='ic:baseline-phone' color='white' />
                  </span>
                </li>
                <li className='m-2'>
                  <span className='contact-ball d-flex justify-content-center align-items-center'>
                    <Icon icon='ri:facebook-fill' color='white' />
                  </span>
                </li>
              </div>
            </ul>
          </div>
          <div className='col-md-4'>
            <h3 className='mb-4'>Important links</h3>
            <ul className='list-unstyled'>
              <li>
                <Link to='#' className='link-item'>
                  Support
                </Link>
              </li>
              <li>
                <Link to='#' className='link-item'>
                  Cancel Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=''>
          <p className='text-center mt-1'>
            Developed By Eng. Suha Shehadeh. Copyright&copy;2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
