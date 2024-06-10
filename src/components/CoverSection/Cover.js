import React from 'react';
import image from '../../assets/download.jpeg';
import './Cover.css'
function Cover() {
  return (
    <div className='container'>
      <div className="row text-center mx-1">
        <div className="col-12 rounded-4  position-relative divv">
          <div class="position-absolute top-100 start-0  translate-middle bg-primary margin-dp ">
            <img src={image} className='img-custom' alt="Not Found" />
          </div>
        </div>
      </div>
      <div className='row  profile-info'>
        <div className='col-md-3 '></div>
        <div className='col-md-3  '>
          <h5>Stacey Williams O'neill</h5>
          <p><span className='text-danger text-sm'>@flygirl </span> | Airline and travel expert </p>
        </div>
        <div className='col-md-1 '></div>
        <div className='col-md-5  d-flex gap-1 justify-content-end align-items-center'>
          <button type="button" class="btn btn-light rounded-4"><b>About Stacey</b></button>
          <button type="button" class="btn btn-light rounded-4"><b>Travel Portfolio</b></button>
          <button type="button" class="btn btn-light rounded-4"><b>Buckit list</b></button>
        </div>
      </div>
    </div>
  );
}

export default Cover;
