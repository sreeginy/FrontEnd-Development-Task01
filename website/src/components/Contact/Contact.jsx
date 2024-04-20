import React from 'react';
import './contact.css';


const Contact = () => {
 
  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form
                id='contact-form'
                onSubmit=""
                noValidate
              >
            
                {/*---------- Row 1 ----------*/}

                <div className='row formRow inline'>
                 <div className='col'>
                    <label>
                      Firstname
                      <input
                        type='text'
                        name='firstname'
                        className='form-control formInput'
                      />
                    </label>
                  </div>

                  <div className='col'>
                    <label>
                      Lastname
                      <input
                        type='text'
                       name='lastname'
                       className='form-control formInput'
                     />
                   </label>
                 </div>
                </div>

                {/*---------- Row 2 ----------*/}

                <div className='row formRow inline'>
                 <div className='col'>
                    <label>
                      E-mail
                      <input
                        type='text'
                        name='email'
                        className='form-control formInput'
                      />
                    </label>
                  </div>

                  <div className='col'>
                    <label>
                      Phone no
                      <input
                        type='text'
                       name='phoneNo'
                       className='form-control formInput'
                     />
                   </label>
                 </div>
                </div>

{/*---------- Row 3 ----------*/}
            <div className='row formRow'>
                <div className='col'>
                  <label>
                         Select the option
                        <select
                          value=""
                          onChange=""
                          className='form-control formInput'
                        >
                          <option value="">Select the option</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                    </label>
                     </div>
                </div>


             {/*---------- Row 4 ----------*/}
             
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                    
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                 
                  </div>
                </div>

                <button
                  className='submit-btn btn btn-primary'
                  type='submit'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
