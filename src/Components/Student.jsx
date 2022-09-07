import React from 'react'
import './Compo.css'

const Student = () => {
  return (
    <div>
        <button className='btn-add'>
            Add New Details
        </button>
        <center>
        <table class="GeneratedTable">
        <thead>
            <tr>
            <th>SL. NO.</th>
            <th>FIRST</th>
            <th>LAST</th>
            <th>AGE</th>
            <th>CHANGE</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th>1</th>
            <td>Joe</td>
            <td>Schwartz</td>
            <td>30</td>
            <td className='edit'>Edit</td>
            </tr>
            <tr>
            <th>2</th>
            <td>Marty</td>
            <td>Barton</td>
            <td>29</td>
            <td className='edit'>Edit</td>
            </tr>
            <tr>
            <th>3</th>
            <td>Franklin</td>
            <td>Mccoy</td>
            <td>31</td>
            <td className='edit'>Edit</td>
            </tr>
            <tr>
            <th>4</th>
            <td>John</td>
            <td>Kennedy</td>
            <td>28</td>
            <td className='edit'>Edit</td>
            </tr>
        </tbody>
        </table>
        </center>
    </div>
  )
}
export default Student;