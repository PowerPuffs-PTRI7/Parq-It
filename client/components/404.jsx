import React from "react";

function FourOhhhFour() {
  return (<>
    <div style={{
      background: 'url("https://codesmith-iteration-project.s3.us-west-1.amazonaws.com/josh-redd-eKodsnuRPeQ-unsplash.jpg")',
      height: 'calc(100vh - 95px)', width: 'calc(100vw - 12px)', display: 'flex', backgroundSize: 'cover'
    }}>
    <h1 style={{color:'white', marginLeft: '10%', marginTop: '10%'}}>404: Bad route</h1>
    </div>
  </>);
}

export default FourOhhhFour;