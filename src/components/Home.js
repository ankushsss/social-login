"use client"

// import React from 'react'
import '../style/home.css'
import { useState, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BiSolidLike } from "react-icons/bi";
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
function Home() {
   
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState([]);

    const [fileName, setFileName] = useState("");
    const hiddenFileInput = useRef(null);

    const handleFile = (file) => {
        setFileName(file.name);
    };
    console.log('kdss',selected)

    const handleImgClick = (event) => {
        hiddenFileInput.current.click();
    };

    const handleImgChange = (event) => {
        const fileUploaded = event.target.files[0];
        handleFile(fileUploaded);
    };

    const customStylesRating = {
        fontSize: 50,
      };

  return (
    <>
         <div className="container">
            <div className="form-box">
                <h3 className='form-headline'>Edit your Review Link</h3>
                <p className='form-para'>This is the link your coustomers will visit to leave you a review.
                Customize the page by changing texts and images.</p>
                <div className="form-box-form">
                    <form action="">
                        <label className='input-label' htmlFor="">Edit Review Link URL</label>
                        <div className="form-inputbox">
                        <input type="text" placeholder='http://go.simpleycollectivereview.com/ample-' />
                        <p className='input-support-1'>15/40</p>
                        <p className='input-support-2'>Edit</p>
                        </div>
                        
                        <label className='input-label' htmlFor="">Edit the link preview title</label>
                        <div className="form-inputbox">
                        <input type="text" placeholder='Do you want to leave us a review?' />
                        <p className='input-support-2'>Edit</p>
                        </div>

                        <label className='input-label' htmlFor="">Choose the initial page</label>
                        <div className="form-inputbox form-dropdown-box">
                        <p className='dropdown-support-text'>1</p>
                        
                        <div className="dropdown">
                            <div
                            onClick={(e) => {
                                setIsActive(!isActive);
                            }}
                            className="dropdown-btn"
                            >
                            {
                                selected.length === 0
                                ?
                                <div className="default-item">
                                Start filter enabled
                                <AiFillStar style={{fontSize:'25px'}}/>
                                </div>
                                :
                                <div className="default-item">
                                {selected.map((item,index)=>{
                                    return item;
                                })}
                                </div>
                            }
                            <span
                                className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
                            />
                            </div>
                            <div
                            className="dropdown-content"
                            style={{ display: isActive ? "block" : "none" }}
                            >
                            <div
                                onClick={(e) => {
                                setIsSelected([e.target.textContent,<AiFillStar style={{fontSize:'25px'}} />]);
                                setIsActive(!isActive);
                                }}
                                className="item"
                            >
                            Start filter enabled
                            <AiFillStar style={{fontSize:'25px'}} />
                            </div>
                            <div
                                className="item"
                                onClick={(e) => {
                                setIsSelected([e.target.textContent,<BiSolidLike style={{fontSize:'25px'}} />]);
                                setIsActive(!isActive);
                                }}
                            >
                            Start filter disabled
                            <BiSolidLike style={{fontSize:'25px'}} />
                            </div>
                            </div>
                        </div>

                        </div>
                    </form>
                </div>
            </div>
            <div className="home-box">
                <button className='edit-button'>
                 <IoMdMenu style={{fontSize:'22px'}} />
                 <p className='edit-btn-text'>Edit</p>
                </button>

                <div className="home-box-detail">
                    <div className='home-box-detail-1'>
                   
                    <Avatar src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243831-stock-photo-letter-s-logo.jpg"/>
                    <button className="edit-icon">
                      <MdEdit style={{fontSize:'20px'}} onClick={handleImgClick}/>
                    </button>
                    <input
                        type="file"
                        onChange={handleImgChange}
                        ref={hiddenFileInput}
                        style={{ display: "none" }} // Make the file input element invisible
                    />
                    </div>
                    <div className='home-box-detail-2'>
                        <h1 className='home-box-detail-heading'>How was your <br /> experience with Amp <br /> Mortgages?</h1>
                        <button className="edit-icon">
                        <MdEdit style={{fontSize:'20px'}}/>
                        </button>
                    </div>
                    <div className='home-box-detail-3'>
                    <Rating
                     sx={{
                        '& .MuiRating-iconEmpty': {
                          color: 'black', 
                        },
                      }}
                     style={customStylesRating} name="no-value" value={null} />
                        <button className="edit-icon">
                        <MdEdit style={{fontSize:'20px'}}/>
                        </button>
                    </div>
                </div>

            </div>
         </div>
    </>
  )
}

export default Home