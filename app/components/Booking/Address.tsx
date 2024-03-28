import React from 'react'

function Address() {
  return (
    <div className='mt-5'>
        <div >
            <label className='text-gray-400'>Where From?</label>
            <select className='flex gap-3'>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
            </select>
        </div>
        <div className='mt-3' >
            <label className='text-gray-400'>Where To?</label>
            <select className='flex gap-3'>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
            </select>
        </div>
    </div>
  )
}

export default Address
