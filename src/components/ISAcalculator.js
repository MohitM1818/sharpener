import React from 'react'


 const ISAcalculator = () => {
  return (
    <section className='isa-calculator-section'>
        <article className='isa-calculator-article'>
            <h2><b className='black-text'>ISA Calculator </b></h2>
            <p className='black-text'>Only charges on your fixed salary</p>
        </article>
        <div className='isa-numbers'>
            <div className='isa-number-text'>
                <h3 className='text-color'>₹18 LPA</h3>
                <p className='text-black'>CTC</p>
                <p className='text-black'>(Your entire gross salary is not charged by us.)</p>
            </div>
            <div className='isa-number-text'>
                <h3 className='text-color'>₹12 LPA</h3>
                <p className='text-black'>Fixed Base</p>
                <p className='text-black'>(We charge you ONLY on your fixed monthly pay.)</p>
            </div>
            <div className='isa-number-text'>
                <h3 className='text-color'>₹2 LPA</h3>
                <p className='text-black'>Performance Bonous</p>
                <p className='text-black'>(We don't charge you for this. Your performance bonus is 100% yours.)</p>
            </div>
            <div className='isa-number-text'>
                <h3 className='text-color'>₹4 LPA</h3>
                <p className='text-black'>Stock Options</p>
                <p className='text-black'>(We don't charge you for stock options either. Promise!)</p>
            </div>
        </div>
       
    </section>
  )
}
export default ISAcalculator;
