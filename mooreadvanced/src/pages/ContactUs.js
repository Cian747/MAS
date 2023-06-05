import Header from '../components/Header';

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className='contact'>
        <div className='contact-wrapper'>
          <div className='description-text'>
            <h1>Have any questions for us?</h1>
            <p>
              We at <em>Moore Advanced Solutions</em> believe in equiping
              organizations with resource and tools needed in pursuit of
              success...
            </p>
          </div>
          <form className='contact-form'>
            <div className='row'>
              <div className='input-group'>
                <label for='name'>Your Name</label>
                <input
                  type='text'
                  placeholder='Ex. John...'
                  id='name'
                  name='name'
                />
              </div>
              <div className='input-group'>
                <label for='email'>Your Email</label>
                <input
                  type='email'
                  placeholder='info@mail.com'
                  id='email'
                  name='email'
                />
              </div>
            </div>
            <div className='row'>
              <div className='input-group'>
                <label for='phone'>Phone Number</label>
                <input
                  type='text'
                  placeholder='(081)890-8918'
                  id='phone'
                  name='phone'
                />
              </div>
              <div className='input-group'>
                <label for='subject'>Your Subject</label>
                <input placeholder='Subject' id='subject' name='subject' />
              </div>
            </div>
            <div className='row'>
              <div className='input-group'>
                <label for='message'>Your Email</label>
                <textarea
                  rows={10}
                  placeholder='Message...'
                  id='message'
                  name='message'
                ></textarea>
              </div>
            </div>
            <button type='button'>Send a message</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
