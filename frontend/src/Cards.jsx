import React, { useState } from 'react';
import logo from "./images/Dribbble New 2023.png";
import cards from "./data/cards.json"
import { IoChevronBackOutline } from "react-icons/io5";
import CreateAccount from "./CreateAccount";

const Cards = () => {
  const [currentPage,setCurrentPage]=useState('cards')
  const [selectedOption, setSelectedOption] = useState(null);
  const [showGuidelines, setShowGuidelines] = useState(null); // Use null to represent none selected

  const backToCreateAcc=()=>{
    setCurrentPage('create');
  };
  if(currentPage==='create'){
    return <CreateAccount/>
  }
  const handleCheckboxChange = (option) => {
    if(selectedOption==option){
      setSelectedOption(null);
      setShowGuidelines(null);
    }
    else{
    setSelectedOption(option);
    setShowGuidelines(option); }
    
      // Set the option as showGuidelines to display the associated guidelines
  };

  return (
    <div className="container">
      <div className="logo-img newlogo">
        <img src={logo} alt="" />
        
        <IoChevronBackOutline onClick={backToCreateAcc} className='back-btn' />
      </div>
      <div className="card-content">
        <h1>What brings you to Dribble?</h1>
        <p>Select the options that describe you. Don't worry, you can explore the other options later. </p>
        <div className="big-container">
          { cards.map((data)=>(
          <div className="container-box">
            <div className="image-box">
              <img className={showGuidelines === `option${data.key}` ? 'shift-up' : ''} src={data.photos} alt={data.altdes} />
              <h3 className={showGuidelines === `option${data.key}` ? 'shift-up' : ''}>{data.description}</h3>
              <div className='check-btn'>
                <input
                  className="checkbox"
                  name='SelectionCheckbox1'
                  id='SelectionCheckbox1'
                  type="checkbox"
                  checked={selectedOption ===` option${data.key}`}
                  onChange={() => handleCheckboxChange(`option${data.key}`)}
                />
              </div>
              {showGuidelines === `option${data.key}` && <p className='guidelines shift-up'>{data.detail}.</p>}
            </div>
          </div>
        ) )}
          
        </div>
        <button className={`btn fin-btn ${selectedOption ? 'active' : 'inactive'}`} disabled={!selectedOption}>Finish</button>

      </div>
    </div>
  );
}

export default Cards;