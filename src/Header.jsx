
import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
function Header() {
  return (
    <>
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://www.wemakescholars.com/images/background-design/education-loan-emi-cal.png'
              height='30'
              alt=''
              loading='lazy'
            />
           EMI Calculator
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      </>
  )
}

export default Header