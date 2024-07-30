import React from 'react'

export default function Cards({pro,del,upd,index}) {
const {id,name,category,price,count,onSale} = pro;

  return (
  <div className='px-3 lg:w-3/12 md:w-6/12 w-full mt-3 lg:mt-0 ' >
    <div className='  bg-slate-100 text-black text-[18px] font-medium  rounded-lg p-3 relative'>
    <h2>Name : {name}</h2>
    <h2>Category : {category}</h2>
    <h2>Price : {price}</h2>
    <h2>Count : {count}</h2>
    {onSale?<span className='absolute  top-0 right-0 p-3 font-bold bg-blue-400'>Sale</span>:""}
    <button onClick={()=>{del(id)}} className='bg-red-400 w-full mb-3'>Delete</button>
    <button onClick={()=>{upd(index)}} className='bg-yellow-200 w-full'>Update</button>
    </div>
  </div>
  
  )
}
