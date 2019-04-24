import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Our Band T-Shirt Company</h2>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>This is the background story of a couple of cool dudes starting something out of their garage</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>About</h2>
            <h5>If you don't want a section like this in the site, that's cool</h5>

            
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Tour Dates</h2>
              <h5>I can link a google calendar here with your events, whatever you want we can get creative</h5>

            

             


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
