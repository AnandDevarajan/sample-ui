import React from 'react';
import { Container } from 'reactstrap';
const signup = () => {
  return (
    <div className='row'>
      <div className='col-sm-3'>
        <Container fluid>
          <h1 className='text-center text-success'>
            Account <span className='text-dark'>SignIn</span>
          </h1>
          <form>
            <div className='form-group'>
              <label className='text-dark'>Email</label>
              <input type='email' name='email' />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input type='password' name='password' />
            </div>
            <input type='submit' className='btn btn-success btn-block' />
          </form>
        </Container>
      </div>
    </div>
  );
};

export default signup;
