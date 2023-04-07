import React from 'react'

const index = ({data}) => {
  return (
    <div>
        <h2>this is server side randaring</h2>
        {data.users.map((user,index)=>(
            <article key={index}>
                <h2>{user.firstName}</h2>
                <h3>{user.email}</h3>
            </article>
        ))}
    </div>
  )
}


export const getServerSideProps=async()=>{
     const data = await(await fetch('https://dummyjson.com/users')).json()
    //  const users = await data.json()
     return {
        props:{
            data
        }
     }
}


export default index