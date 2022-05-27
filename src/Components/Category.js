import React from 'react'

const Category = ({category, setCategory}) => {

  const handleCategory = e => {
      setCategory(e.target.value)
  }

  return (
    <div className='container m-2'>
   <h5><label>CATEGORY</label></h5>
   <div class="d-grid gap-2">
   <button class="btn btn-outline-success" type="button" value="all" onClick={e => handleCategory(e)}>All</button>
  <button class="btn btn-outline-success" type="button" value="men" onClick={e => handleCategory(e)}>Men</button>
  <button class="btn btn-outline-success" type="button" value="women" onClick={e => handleCategory(e)}>Women</button>
  <button class="btn btn-outline-success" type="button" value="children" onClick={e => handleCategory(e)}>Children</button>

</div>
   {/* <div class="list-group">
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="solid" onChange={e => handleStyle(e)}/>
    Solid
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="long_sleeve"/>
    Long Sleeve
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="printed"/>
    Printed
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="short_sleeve"/>
    Short Sleeve
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="sleeveless"/>
    Sleeveless
  </label>
</div> */}
   </div>
  )
}

export default Category