import React from 'react'

const Testimonials = () => {
    const reviews = [
    {
        name: "Muhammad Ahmad Makhdoom", 
        role: "AI Solutions Architect", 
        comment: "Samar did an amazing job!  Delivered a clean, responsive React app with great attention to detail. Communication was smooth and professional throughout. Truly skilled in JavaScript and React — highly recommend and will work again! "
    }
    ]

    return (
        <div className='py-20 w-full px-5 sm:px-10 md:px-15 lg:px-25 xl:px-35 bg-[#0a0a14] text-white'>
             <h1 className='text-3xl font-bold mb-10 text-center'>Endorsements</h1>
             <div className='max-w-2xl mx-auto bg-[#16162a] p-8 rounded-3xl border border-white/5 italic text-center'>
                <i className="fa-solid fa-quote-left text-4xl text-[#a855f7]/20 mb-4"></i>
                {reviews.map((rev) => (
                    <div key={rev.name}>
                        <p className='text-[#94a3b8] text-xl leading-relaxed mb-6'>"{rev.comment}"</p>
                        <h3 className='text-white font-bold'>{rev.name}</h3>
                        <p className='text-[#a855f7] text-sm uppercase tracking-widest'>{rev.role}</p>
                    </div>
                ))}
             </div>
        </div>
    )
}

export default Testimonials