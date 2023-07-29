import React from 'react';
import ErrorPage from '../errorPage/ErrorPage';
const Resume = ({result}) => {
  if(JSON.stringify(result) === '') {
    return <h3><ErrorPage/></h3>
  }
  const  handlePrint = () => alert('Print Successful');
  return (
    <div>
       <button onClick={handlePrint}>Print Page</button>
       <main className='container'>
         <p>Hello!</p>
       </main>
    </div>
  );
}

export default Resume;
