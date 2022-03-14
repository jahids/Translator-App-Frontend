import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [language, setlanguage] = useState([])
 const userInput = useRef();
 


 


useEffect(()=>{
 
  fetch(`https://libretranslate.com/languages`,{
  headers: { 'accept': 'application/json' }

  
 })
 .then((response) => response.json())

 .then((data) => setlanguage(data))
 
},[])



 
  return (
    <div className="App">
    <button  >click me trnslate</button>
      <section id="contact">
        <div className="section-content">
          <h1 className="section-header"> <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Translate</span> your text</h1>
          <h3>Write and click <b>TRANSLATE</b></h3>
        </div>
        <div className="contact-section">
          <div className="container">
            <form className='d-flex' >
              <div className="col-md-6 form-line">
                <div className="form-group">

                  <label for="from"> From</label>

                  <select name="from">
                    <option value="en">english</option>
                   
                  </select> </div>
                <div className="form-group">

                  <textarea ref={userInput}  className="form-control" id="original" placeholder="Enter Your Text"></textarea>
               
                </div>
              </div>
              <div  className="col-md-6 flex ">
                <div className="form-group">
                  <label for="from"> From</label>

                  <select  name="from">
                   {
                     language.map(singleLnaguage=> <option value={singleLnaguage.code} > {singleLnaguage.name}</option>)
                   }
                   
                  </select> </div>
                <div className="form-group">

                  <textarea className="form-control" id="translated" placeholder="Translated text will be here"></textarea>
                </div>
                <div>

                  <button type="button" className="btn btn-default submit"><i className="fa fa-globe" aria-hidden="true"></i>   translate</button>
                </div>

              </div>
            </form>
          </div></div>
      </section>
    </div>
  );
}

export default App;
