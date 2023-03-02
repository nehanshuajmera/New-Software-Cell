import React from 'react'
import SinglePerson from './SinglePerson'

export default function Team() {
  return (
    <div>
        <h1 style={{textAlign:"center",fontWeight:"bold"}}>Our Team</h1>
        <div className='team-page'>
        <SinglePerson img={"https://media.licdn.com/dms/image/C5603AQE0uBYYtCyioQ/profile-displayphoto-shrink_800_800/0/1657018039923?e=1683158400&v=beta&t=af7alcs8FsInsDVOD6DTCVZv3cjfwX9OMi2Lmkw0TfE"} name={"Dr. Pankaj Malik"} designation={"Head of Software Cell"} lnd={"https://www.linkedin.com/in/dr-pankaj-malik-583718184/"} mail={"#"}/>        
        <SinglePerson img={"https://media.licdn.com/dms/image/D4D03AQF7GpWeMMk6rQ/profile-displayphoto-shrink_800_800/0/1664336348364?e=1683158400&v=beta&t=rDZz89VgbplFU-RDUWgI_r6DHGD14mgWaHWMv1hI4gg"} name={"Vishal Sharma"} designation={"Team Leader"} lnd={"https://www.linkedin.com/in/sharma39vishal/"} mail={"mailto:sharma39vishal@gmail.com"}/>
        </div>
        <h2 style={{textAlign:"center"}}> <i class="fa-solid fa-code"></i> Core Members</h2>
    <div className='team-page'>
        <SinglePerson img={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} name={"Dishka Jain"} designation={"FrontEnd Developer"} lnd={""} mail={"mailto:"}/>
        <SinglePerson img={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} name={"Kalash Jain"} designation={"FrontEnd Developer"} lnd={""} mail={"mailto:"}/>
        <SinglePerson img={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} name={"Mukta Gupta "} designation={"FrontEnd Developer"} lnd={""} mail={"mailto:"}/>
        <SinglePerson img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUFL4eB4QrYQtcjZBjPoke_tJ0Y0jB8hvvw&usqp=CAU"} name={"Pratyush Gupta"} designation={"FrontEnd Developer"} lnd={""} mail={"mailto:"}/>
        <SinglePerson img={"https://cdn.dribbble.com/users/2364329/screenshots/5930135/aa.jpg?compress=1&resize=400x300&vertical=top"} name={"Nehanshu Ajmera"} designation={"FrontEnd Developer"} lnd={""} mail={"mailto:"}/>
        <SinglePerson img={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} name={" Shyam Patidar"} designation={"FrontEnd Developer"} lnd={""} mail={"mailto:"}/>
        <SinglePerson img={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} name={"Arnav Bahadur"} designation={"FrontEnd Developer"} lnd={""} mail={"mailto:"}/>
        <SinglePerson img={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} name={"Amankant Sahu"} designation={"FrontEnd Developer"} lnd={""} mail={"mailto:"}/>
    </div>
    <div className='team-page'>
        <SinglePerson img={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} name={"Chahat Nagar"} designation={"BackEnd Developer"} lnd={""} mail={"mailto:"}/>
        <SinglePerson img={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} name={"Husain Rampurawala"} designation={"BackEnd Developer"} lnd={""} mail={"mailto:"}/>
        <SinglePerson img={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} name={"Aman Malviya"} designation={"BackEnd Developer"} lnd={""} mail={"mailto:"}/>
    </div>
    <div className='team-page'>
        <SinglePerson img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUFL4eB4QrYQtcjZBjPoke_tJ0Y0jB8hvvw&usqp=CAU"} name={"Pratyush Gupta"} designation={"Graphic Designer"} lnd={""} mail={"mailto:"}/>
        <SinglePerson img={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} name={"Shyam Patidar"} designation={"Graphic Designer"} lnd={""} mail={"mailto:"}/>
    </div>
    <div className='team-page'>
        <SinglePerson img={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} name={"Chhavi Sharma"} designation={"Content Writer"} lnd={""} mail={"mailto:"}/>
        {/* <SinglePerson img={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} name={"Shyam Patidar"} designation={"Graphic Designer"} lnd={""} mail={"mailto:"}/> */}
    </div>

    </div>
  )
}
