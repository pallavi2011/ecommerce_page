import React from 'react'

const Sort = ({price, setPrice}) => {

  const handlePrice = e =>{
      if(e.target.id == "lowhigh"){
        setPrice("lowhigh")
      }
      else if(e.target.id == "highlow"){
        setPrice("highlow")
      }
  }
  return (
      <div className='container m-2'>
      <h5><label>SORT BY</label></h5>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="lowhigh" onChange = {e => handlePrice(e)}/>
  <label class="form-check-label" for="lowhigh">
    Price Low to High
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="highlow" onChange = {e => handlePrice(e)}/>
  <label class="form-check-label" for="highlow">
    Price High to Low
  </label>
</div>
  </div>
  )
}

export default Sort