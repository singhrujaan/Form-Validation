import React from 'react'
import { useSelector } from 'react-redux';
import image from '../assets/logo1.jpg'
const About = () => {
  const userInfo = useSelector((state) => state.form.value)

  return (
    <div className=' bg-sky-900 h-screen'>
      <div className='flex flex-col justify-center ml-24 h-screen  w-[90%] items-center text-white  bg-sky-700 space-y-12 p-16'>
        <h1 className='text-3xl font-bold'>User Info</h1>

        <div className='flex'>
          <img src={image} className='w-[220px] h-[200px] rounded-full' alt="" />
         <div>
            <p className='text-2xl'>Username: <span className='text-2xl'> &nbsp; {userInfo.username}</span> </p>
            <p className='text-2xl'>Email:<span className='text-2xl'> &nbsp; {userInfo.email}</span>  </p>
          </div> 
           
        </div>
        <p className='text-2xl'>Level: <span className='text-2xl'> &nbsp; {userInfo.level}</span>  </p>

       <div className='flex space-x-32'>
          <p className='text-2xl'>skill: <span className='text-2xl'> &nbsp; {userInfo.skill}</span>  </p>
          {userInfo.frontend && <p className='text-xl'>frontend Language: <span className='text-2xl'> &nbsp; {userInfo.frontend}</span>  </p>}
          <>{userInfo.backend && <p className='text-xl'>backend Language: <span className='text-2xl'> &nbsp; {userInfo.backend}</span>  </p>}</>
       </div>

        <div className='flex space-x-32'>
          <p className='text-2xl'>Work Experience: <span className='text-2xl'>{userInfo.workExp}</span>  </p>
          {userInfo.midLevel && <p className='text-xl'>MidLevel experience: <span className='text-2xl'> &nbsp; {userInfo.midLevel} years</span>  </p>}
          {userInfo.seniorLevel && <p className='text-xl'>SeniorLevel experience: <span className='text-2xl'> &nbsp; {userInfo.seniorLevel} years</span>  </p>}
        </div>

        <p className='text-2xl '>FacebookID: <span className='text-2xl'> &nbsp;<a className='underline' href={userInfo.url} target='_blank'>{userInfo.url}</a> </span>  </p>
      </div>
    </div>
  )
}

export default About