import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Post() {
    const Navigate=useNavigate()

    const event = async (e) => {
        alert("This may take Some Time Please Wait")
        e.preventDefault()
        let view=e.target
        console.log(view)
        let formData = new FormData(view)
        console.log(formData)
        await fetch('https://shweta-instaclone-project.onrender.com/createPost', {
            method: 'POST',
           
            body: formData
        })
            .then(res => res.json())
            .then((d) => {
                alert("post successful")
                console.log(d);
            })
            .catch((e) => { console.log(e.message) }).finally(()=>Navigate('/view'))

    }
  return (
    <div className='posting-container'>
            <form onSubmit={(e)=>event(e)} className="form-class">

                <div className='name-class'>

                    <label htmlFor="name-id" style={{marginTop:'20px',marginLeft:'10px'}}>Name :</label>

                    <input type="text" name='name' id='name-id' placeholder='Please Enter Your Name' required/>

                </div>
                <div className='location-class'>

                    <label htmlFor="location-id" style={{marginTop:'20px',marginLeft:'10px'}}>Location :</label>

                    <input type="text" name='location' id='location-id' placeholder='Please Enter Your location' required/>

                </div>
                <div className='img-class'>

                    <label htmlFor="description-id" style={{marginTop:'20px',marginLeft:'10px'}}>Description :</label>

                    <input type="text" name='description' id='description-id' placeholder='Please Enter description' required/>

                </div>
                <div className='posting-class'>

                    <label htmlFor="Post-id" style={{marginTop:'20px',marginLeft:'10px'}}>Image :</label>

                    <input type="file" name='PostImage' id='Post-id' required />

                </div>

                <button type='submit' id='btn-sub'>Upload</button>
            </form>
        </div>
  )
}
