import React from 'react'

export default function Categories() {
    const categories=[
        {
            id:1,
            name:"Cat-1",
            image:"https://i.ibb.co/LSg6pnJ/logo.png"
        },
        {
            id:2,
            name:"Cat-2",
            image:"https://i.ibb.co/LSg6pnJ/logo.png"
        },
        {
            id:3,
            name:"Cat-3",
            image:"https://i.ibb.co/LSg6pnJ/logo.png"
        },
        {
            id:4,
            name:"Cat-4",
            image:"https://i.ibb.co/LSg6pnJ/logo.png"
        },
        {
            id:5,
            name:"Cat-5",
            image:"https://i.ibb.co/LSg6pnJ/logo.png"
        },
        {
            id:6,
            name:"Cat-6",
            image:"https://i.ibb.co/LSg6pnJ/logo.png"
        },
    ];

  return (
    <section className='container mx-auto p-4'>
        <div className='grid grid-cols-4 gap-5'>
        {categories?.map((category)=>{
            return(
                <div key={category.id} className='bg-red-100 p-4 rounded space-y-4 border border-orange-300'>
                    <img src={category.image} className='w-10 h-5 mx-auto' />
                    <span className='block text-center text-sm'>{category.name}</span>
                </div>
                
            );

        }
            
            
        )}
        </div>

    </section>
    
  );
}
