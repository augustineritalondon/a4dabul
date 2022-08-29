import React, {useState} from 'react'
import { Button, Banner, Services, Schedule, BreadcrumbBanner, FAQDropdown } from '../components/index'
import icons from '../assets/icons/icons'

const About = () => {
    const [active, setActive] = useState(false)

    const handleToggle = (index) => {
        if (active === index) {
            return setActive("0");
        }
        setActive(index);
    };

    const faq = [
        {
            question: 'What is the lorem of a lorem ipsum?',
            answer: 'Amet minim non deserunt ullamco est sit aliqua dolor do amet sint amet minim non deserunt ullamco est sit aliqua.'
        },
        {
            question: 'Where do I pay for my orders using my Lorem account?',
            answer: 'Amet minim non deserunt ullamco est sit aliqua dolor do amet sint amet minim non deserunt ullamco est sit aliqua.'
        },
        {
            question: 'What is the lorem of a lorem ipsum?',
            answer: 'Amet minim non deserunt ullamco est sit aliqua dolor do amet sint amet minim non deserunt ullamco est sit aliqua.'
        },
        {
            question: 'Whose do I pay for my orders using my Lorem account?',
            answer: 'Amet minim non deserunt ullamco est sit aliqua dolor do amet sint amet minim non deserunt ullamco est sit aliqua.'
        },
        {
            question: 'That do I pay for my orders using my Lorem account?',
            answer: 'Amet minim non deserunt ullamco est sit aliqua dolor do amet sint amet minim non deserunt ullamco est sit aliqua.'
        },

    ]

    return (
        <>
            <BreadcrumbBanner name="Overview" />

            <div className='grid md:grid-cols-2 gap-5 w-90 mx-auto'>
                <div className='self-center'>
                    <h1 className='text-primary text-3xl lg:text-4xl xl:text-5xl font-Montserrat'>Why Our Customers Choose Us</h1>
                    <p className='text-borderColor py-3'>In ante sapien, dapibus luctus aliquet a, accumsan sit amet dolor. Mauris id facilisis dolor. Donec malesuada, est eu dignissim eleifend, est nulla dignissim nisl. Fusce turpis massa, mattis sit.</p>
                    <ul className='grid grid-cols-2'>
                        <li>
                            <div className='flex'>
                                <img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' /> <span className='font-semibold'>Opening Hours</span>
                            </div>
                            <p className='ml-6 text-borderColor'>Monday-Friday: 8:00am–8:00pm</p>
                            <p className='ml-6 text-borderColor'>Saturday: 8:00am–6:00pm</p>
                            <p className='ml-6 text-borderColor'>Sunday: Closed</p>
                        </li>

                        <li>
                            <div className='flex'>
                                <img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' /> <span className='font-semibold'>Location</span>
                            </div>
                            <p className='ml-6 text-borderColor'><span className='text-black'>Address:</span> Washington, USA 6036 Richmond hwy., VA, 2230</p>
                        </li>
                    </ul>
                </div>
                <div className='relative grid grid-rows-2 my-8'>
                    <div className=' w-60 h-28 md:w-309 md:h-200 mx-auto lg:ml-10 lg:-mb-7 shadow-a-shadow bg-primary'></div>
                    <div className=' w-60 h-28 md:w-309 md:h-200 mx-auto lg:mr-10 lg:-mt-7 shadow-a-shadow bg-red-500'></div>
                </div>
            </div>

            <Banner>
                <div>
                    <span>SERVICES</span>
                    <h1 className='text-primary text-3xl lg:text-4xl xl:text-5xl font-Montserrat md:mb-3'>Our Best Services For You </h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        <div className='bg-white text-primary hover:bg-primary hover:text-white py-16 px-3 text-center'>
                            <img src={icons.skincare} alt="" className='mx-auto' />
                            <h3 className='py-3 font-bold'>Skin Care</h3>
                            <p>Improve your look with our professional haircut & hairstyling services.</p>
                        </div>
                        <div className='bg-white text-primary hover:bg-primary hover:text-white py-16 px-3 text-center'>
                            <img src={icons.saloon} alt="" className='mx-auto' />
                            <h3 className='py-3 font-bold'>Unisex Saloon</h3>
                            <p>Improve your look with our professional haircut & hairstyling services.</p>
                        </div>
                        <div className='bg-white text-primary hover:bg-primary hover:text-white py-16 px-3 text-center'>
                            <img src={icons.weddings} alt="" className='mx-auto' />
                            <h3 className='py-3 font-bold'>Affordable Weddings</h3>
                            <p>Improve your look with our professional haircut & hairstyling services.</p>
                        </div>
                        <div className='bg-white text-primary hover:bg-primary hover:text-white py-16 px-3 text-center'>
                            <img src={icons.beautyspa} alt="" className='mx-auto' />
                            <h3 className='py-3 font-bold'>Beauty Spa</h3>
                            <p>Improve your look with our professional haircut & hairstyling services.</p>
                        </div>
                    </div>
                </div>
            </Banner>

            {/* FAQ */}
            <div>
            <div className='bg-white !py-5 !pb-10 !mt-2'>
        <div className='egis_container2'>
          <div className='text-center py-5'>
            <h1 className='font-DuplicateSansBold text-lg 2xl:text-e-26 m-0'>Frequently Asked Questions</h1>
            <p className=''>Have questions? We’re here to help you</p>

            <div className='grid md:grid-cols-2 gap-5'>
              {
                faq.map((item, index) => {
                  return (
                    <d>
                      <ul key={index} className="border-b border-b-grey last:border-b-0">
                        <li className={`w-full flex justify-between cursor-pointer mt-3 py-3 px-5 ${active === index ? 'bg-primary': 'bg-secondary'} `} onClick={() => handleToggle(index)}>
                          <p className={`text-base 2xl:text-xl ${active === index ? 'text-white' : 'text-black'}`}>{item.question}</p>
                          {
                            active === index ?
                              <svg width="19" height="3" className='self-center' viewBox="0 0 19 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1663 1.5H1.83301" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                              :
                              <svg width="16" height="16" className='self-center' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.5C8.24864 0.5 8.4871 0.598772 8.66291 0.774588C8.83873 0.950403 8.9375 1.18886 8.9375 1.4375V7.0625H14.5625C14.8111 7.0625 15.0496 7.16127 15.2254 7.33709C15.4012 7.5129 15.5 7.75136 15.5 8C15.5 8.24864 15.4012 8.4871 15.2254 8.66291C15.0496 8.83873 14.8111 8.9375 14.5625 8.9375H8.9375V14.5625C8.9375 14.8111 8.83873 15.0496 8.66291 15.2254C8.4871 15.4012 8.24864 15.5 8 15.5C7.75136 15.5 7.5129 15.4012 7.33709 15.2254C7.16127 15.0496 7.0625 14.8111 7.0625 14.5625V8.9375H1.4375C1.18886 8.9375 0.950403 8.83873 0.774588 8.66291C0.598772 8.4871 0.5 8.24864 0.5 8C0.5 7.75136 0.598772 7.5129 0.774588 7.33709C0.950403 7.16127 1.18886 7.0625 1.4375 7.0625H7.0625V1.4375C7.0625 1.18886 7.16127 0.950403 7.33709 0.774588C7.5129 0.598772 7.75136 0.5 8 0.5Z" fill="black" />
                              </svg>
                          }
                        </li>
                        <FAQDropdown answer={item.answer} active={active === index} />
                      </ul>

                    </d>
                  )
                })
              }
            </div>

            <div className='mt-16'>
              <h1 className='font-DuplicateSansBold text-lg 2xl:text-e-26 m-0'>Still have  questions?</h1>
              <p className=' w-full lg:w-e-45 2xl:w-1/3 mx-auto'>If you cannot find answer to your question in our FAQ, you can always contact us. We will answer to you shortly!</p>
            </div>
          </div>
        </div>
      </div>
            </div>

        </>
    )
}

export default About