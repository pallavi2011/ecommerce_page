import React from 'react'

const Filters = ({color, setColor}) => {
  return (
    <div className='container m-2'>
    <h5><label>COLOR</label></h5>
    <select class="form-select" aria-label="Default select example" onChange={(e) =>{
      const selectedColor = e.target.value
      setColor(selectedColor)
    }}>
  <option value="all">Choose a color</option>
  <option value="black">Black</option>
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="white">White</option>
  <option value="purple">Purple</option>
</select>

    {/* <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="black" onChange={e => handleColor(e)}/>
  <label class="form-check-label" for="black">
    Black
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="red" onChange={e => handleColor(e)}/>
  <label class="form-check-label" for="red">
    Red
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="green" onChange={e => handleColor(e)}/>
  <label class="form-check-label" for="green">
    Green
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="white" onChange={e => handleColor(e)}/>
  <label class="form-check-label" for="white">
    White
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="purple" onChange={e => handleColor(e)}/>
  <label class="form-check-label" for="purple">
    Purple
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="all" onChange={e => handleColor(e)}/>
  <label class="form-check-label" for="all">
    All
  </label>
</div> */}

    </div>
  )
}

export default Filters