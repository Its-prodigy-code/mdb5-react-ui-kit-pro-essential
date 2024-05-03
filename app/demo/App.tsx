import React from 'react';
import { MDBContainer, MDBCol, MDBRipple, MDBBtn } from 'mdb-react-ui-kit';

export default function RipplePage(): JSX.Element {
  return (
    <MDBContainer className='my-5'>
      <ul className='nav nav-pills mb-3'>
        <li className='nav-item'>
          <a className='nav-link active'>OVERVIEW</a>
        </li>
        <li className='nav-item'></li>
      </ul>

      <MDBCol md='10' className='mb-4'>
        <section id='section-introduction'>
          <h2 className='h1 font-weight-bold'>Ripple</h2>

          <h1 className='h6'>React Ripple - Bootstrap 5 & Material Design 2.0</h1>

          <p>descritpion</p>
        </section>

        <hr className='my-5' />

        <section id='section-basic-example'>
          <h2 className='mb-4'>Basic example</h2>

          <p>Tag of the ripple element is MDBBtn by default.</p>

          <section className='border p-4 text-center mb-4'>
            <MDBRipple rippleColor='light' size='lg'>
              Primary
            </MDBRipple>
          </section>

          <p>MDBRipple with image:</p>

          <section className='border p-4 text-center mb-4'>
            <MDBRipple rippleTag='span'>
              <img
                alt='example'
                className='img-fluid rounded'
                src='https://mdbootstrap.com/img/new/standard/city/043.jpg'
                style={{ maxWidth: '27rem' }}
              />
            </MDBRipple>
          </section>
        </section>

        <hr className='my-5' />

        <section id='section-colors'>
          <h2 className='mb-4'>Colors</h2>

          <p>
            By using <code>data-mdb-ripple-color</code> attribute you can change the color of the ripple.
          </p>

          <p>
            You can use the colors from the basic MDB palette, for example
            <code>data-mdb-ripple-color="primary"</code> or <code>data-mdb-ripple-color="danger"</code>:
          </p>

          <section className='border p-4 text-center mb-4'>
            <MDBRipple rippleColor='primary' color='light'>
              Primary
            </MDBRipple>
            <MDBRipple rippleColor='secondary' color='light'>
              Secondary
            </MDBRipple>
            <MDBRipple rippleColor='success' color='light'>
              Success
            </MDBRipple>
            <MDBRipple rippleColor='danger' color='light'>
              Danger
            </MDBRipple>
            <MDBRipple rippleColor='info' color='light'>
              Info
            </MDBRipple>
            <MDBRipple rippleColor='light' color='dark'>
              Light
            </MDBRipple>
            <MDBRipple rippleColor='dark' color='light'>
              Dark
            </MDBRipple>
          </section>

          <p>You can also use any CSS color name:</p>

          <section className='border p-4 text-center mb-4'>
            <MDBRipple rippleColor='red' color='light'>
              Red
            </MDBRipple>
            <MDBRipple rippleColor='green' color='light'>
              Green
            </MDBRipple>
            <MDBRipple rippleColor='blue' color='light'>
              Blue
            </MDBRipple>
            <MDBRipple rippleColor='yellow' color='light'>
              Yellow
            </MDBRipple>
            <MDBRipple rippleColor='orange' color='light'>
              Orange
            </MDBRipple>
            <MDBRipple rippleColor='purple' color='light'>
              Purple
            </MDBRipple>
            <MDBRipple rippleColor='aqua' color='light'>
              Aqua
            </MDBRipple>
          </section>

          <p>Or simply use the hex color code:</p>

          <section className='border p-4 text-center mb-4'>
            <MDBRipple rippleColor='#c953d6' color='light'>
              #c953d6
            </MDBRipple>
            <MDBRipple rippleColor='#44c6e3' color='light'>
              #44c6e3
            </MDBRipple>
            <MDBRipple rippleColor='#fcc834' color='light'>
              #fcc834
            </MDBRipple>
            <MDBRipple rippleColor='#386f06' color='light'>
              #386f06
            </MDBRipple>
            <MDBRipple rippleColor='#c1303a' color='light'>
              #c1303a
            </MDBRipple>
            <MDBRipple rippleColor='#a57c3e' color='light'>
              #a57c3e
            </MDBRipple>
            <MDBRipple rippleColor='#192ced' color='light'>
              #192ced
            </MDBRipple>
            <MDBRipple rippleColor='#525740' color='light'>
              #525740
            </MDBRipple>
          </section>
        </section>

        <hr className='my-5' />

        <section id='section-duration'>
          <h2 className='mb-4'>Duration</h2>

          <p>
            By using <code>data-mdb-ripple-duration</code> attribute you can modify the duration of the ripple.
          </p>

          <section className='border p-4 text-center mb-4'>
            <MDBRipple size='lg'>Default (500ms)</MDBRipple>
            <MDBRipple rippleDuration={1000} size='lg'>
              1s
            </MDBRipple>
            <MDBRipple rippleDuration={3000} size='lg'>
              3s
            </MDBRipple>
            <MDBRipple rippleDuration={5000} size='lg'>
              5s
            </MDBRipple>
            <MDBRipple rippleDuration={10000} size='lg'>
              10s
            </MDBRipple>
          </section>
        </section>

        <hr className='my-5' />

        <section id='section-centered'>
          <h2 className='mb-4'>Centered</h2>

          <p>
            If you add <code>data-mdb-ripple-centered="true"</code> attribute the ripple always starts in the center of
            the element instead of in the touched place.
          </p>

          <section className='border p-4 text-center mb-4'>
            <MDBRipple rippleCentered size='lg'>
              Centered ripple
            </MDBRipple>
          </section>
        </section>

        <hr className='my-5' />

        <section id='section-unbound'>
          <h2 className='mb-4'>Unbound</h2>

          <p>
            If you use <code>data-mdb-ripple-unbound="true"</code> attribute,the ripple won't be bonded to the given
            element and it will exceed its borders.
          </p>

          <section className='border p-4 text-center mb-4'>
            <MDBRipple rippleUnbound rippleColor='dark'>
              Unbound
            </MDBRipple>
          </section>
        </section>

        <hr className='my-5' />

        <section id='section-radius'>
          <h2 className='mb-4'>Radius</h2>

          <p>
            By using <code>data-mdb-ripple-radius</code> attribute you can modify the radius of the ripple. The numeric
            value is expressed in pixels, for example:
            <code>data-mdb-ripple-radius="10"</code>
          </p>

          <section className='border p-4 text-center mb-4'>
            <MDBRipple size='lg'>Default</MDBRipple>
            <MDBRipple rippleRadius={10} size='lg'>
              10
            </MDBRipple>
            <MDBRipple rippleRadius={25} size='lg'>
              25
            </MDBRipple>
            <MDBRipple rippleRadius={50} size='lg'>
              50
            </MDBRipple>
          </section>
        </section>
      </MDBCol>
    </MDBContainer>
  );
}
