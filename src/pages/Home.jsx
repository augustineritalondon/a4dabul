import React, { useEffect } from 'react'
import { Button, Banner, Services, Schedule, Product, Navbar, Footer } from '../components/index'
import image from '../assets/imgs/image'
import { Link } from 'react-router-dom'
import { productData, data } from '../data/productData'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, getCategories } from '../../service'
import { addProduct, addCategory } from '../state/productSlice'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getProducts().then((res) => {
            const productsArray = [];
            res.forEach((doc) => {
                productsArray.push(doc.data());
            });
            dispatch(addProduct(productsArray));
        });

        getCategories().then((res) => {
            const categoryArray = [];
            res.forEach((doc) => {
                categoryArray.push(doc.data());
            });
            dispatch(addCategory(categoryArray));
        })
    }, [])

    const products = useSelector(state => state.products.product)

    return (
        <>
            <Navbar />

            <div className=' w-90 mx-auto md:grid grid-cols-2 pt-10 md:pt-0'>
                <div className='self-center'>
                    <h1 className='text-primary text-3xl lg:text-6xl font-Montserrat'>Experience the Best Affordable Services.</h1>
                    <p className=' text-sm lg:text-base my-5'>Your beauty can truly grow with age and you can have fabulous skin all through your life, but it takes paying atttention to the quality of your skin care.
                        A4DBUL harnesses the best luscious emollient and fine oils, scrubs and creams to give your skin just what it needs. We offer a full range of hairdressing services for men and women, eyebrow and eyelash care . Entrust your beauty to professionals who really care about your style and look!</p>
                    <div className=' w-36'>
                        {/* <Button>Get Started</Button> */}
                    </div>
                </div>
                <div className='self-center mt-5 md:-mt-10 lg:-mt-14'>
                    <img src={image.landingImage} alt="" />
                </div>
            </div>

            <Banner>
                <div className='grid md:grid-cols-2 gap-5 relative py-5 md:py-16'>
                    <div className='absolute bottom-5 z-0 hidden md:block'><img src={image.shape1} alt="" /></div>
                    <div className='relative md:ml-5 lg:ml-10 z-10  self-center hidden md:block'><img src={image.person1} alt="" className=' h-366 object-fill' /></div>
                    <div className='self-center'>
                        <h1 className='text-primary text-3xl lg:text-4xl xl:text-5xl font-Montserrat'>Who We Are</h1>
                        <p className='my-5'>A4dabul is a conceirge of beauty and events, we connect the lines between the necessity of your beauty and our duty to deliver at the quality you desire,adding a speck of professionalism to all of our ventures unified under one banner, to make it A4dabul for you.</p>
                        <div className=' w-36 cursor-pointer'>
                            <Button><Link to='/about'>Read More</Link></Button>
                        </div>
                    </div>
                    <div className=' self-center md:hidden'><img src={image.person1} className='mx-auto' alt="" /></div>
                </div>
            </Banner>

            <Services />

            <Banner>
                <div className='py-5 md:py-10'>
                    <h1 className='text-primary text-3xl lg:text-4xl xl:text-5xl font-Montserrat text-center'>Affordable Skin Care</h1>
                    <div className='grid md:grid-cols-2 gap-5 mt-5 lg:mt-20'>
                        <div className='self-center py-5 '>
                            <p>A4dabul, the abode of beauticians and seasoned planners, as the custodians of beauty and style connect the dots between your needs and budgets with the delivery of the optimum quality you desire,with a touch of expertness,to give you the best for both body and events at A4dabul prices.</p>

                            <h5 className='my-2 text-primary'>Our natural skin care products includes:</h5>
                            <ul className='grid grid-cols-2'>
                                <li className='my-1 flex text-sm md:text-base'><img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' />Body Soap</li>
                                <li className='my-1 flex text-sm md:text-base'><img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' />Body Lotion</li>
                                <li className='my-1 flex text-sm md:text-base'><img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' />Body Scrub</li>
                                <li className='my-1 flex text-sm md:text-base'><img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' />Face Cream</li>
                                <li className='my-1 flex text-sm md:text-base'><img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' />Body Oil</li>
                                <li className='my-1 flex text-sm md:text-base'><img src="https://img.icons8.com/nolan/20/asterisk-key.png" className='lg:mr-2' />Toner</li>
                            </ul>
                            <p className='my-5 italic'>We are responsible for the quality of the services you receive!</p>

                            <div className=' w-4/5 xl:w-2/5'>
                                <Button><Link to='/skin-care'> View Skin Care Products </Link></Button>
                            </div>
                        </div>
                        <div className='self-center'>
                            <div className=''><img src={image.productImage} className='w-420 h-60 xl:w-480 xl:h-327 mx-auto rounded-3xl' alt="" /></div>
                            <div className='grid grid-cols-3 gap-4 -mt-20'>
                                <div className=''><img src={image.anceFaceScrub} className=' shadow rounded-2xl' alt="" /></div>
                                <div className=''><img src={image.person} className=' shadow rounded-2xl' alt="" /></div>
                                <div className=''><img src={image.homeImage3} className=' shadow rounded-2xl' alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Banner>

            <div className='w-90 mx-auto py-10'>
                <h1 className='text-primary text-3xl lg:text-4xl xl:text-5xl font-Montserrat text-center my-10'>Featured Skin Products</h1>
                <div className='grid md:grid-cols-4 lg:grid-cols-4 gap-5'>
                    {
                        products &&
                        products.filter((item, idx) => idx < 4)
                            .map((item, idx) => {
                                return (
                                    <Product key={idx} data={item} />
                                )
                            })
                    }
                </div>
            </div>

            {/* affordable spa */}
            <div className='relative'>
                <div className='absolute bg-black h-full w-full opacity-70'></div>
                <img src={image.spaBanner} alt="" className='h-full w-full absolute -z-10' />
                <div className=' w-90 lg:w-3/4 mx-auto relative z-10 py-16'>
                    <h1 className='text-secondary text-3xl lg:text-4xl xl:text-5xl font-Montserrat text-center'>Affordable Beauty Center</h1>
                    <p className='text-white text-sm lg:text-base my-10 text-center'>A4dabul beauty centre as the caretakers and aid to your beautification allays all your fear, as your hair,face and body would be given unique treatment through our distinguished products and services to make you look fabulous at A4dabul prices.</p>
                    <ul className='text-secondary font-Montserrat text-sm lg:text-base grid grid-cols-2 lg:grid-cols-4 gap-5 lg:flex lg:justify-between mb-10'>
                        <li className='text-center'>Body Wash</li>
                        <li className='text-center'>Facials</li>
                        <li className='text-center'>Massage</li>
                        <li className='text-center'>Waxing</li>
                        <li className='text-center'>Pedicure</li>
                        <li className='text-center'>Cosmetics</li>
                    </ul>
                    <div className='w-full lg:w-1/5 mx-auto'> 
                        <a href='https://api.WhatsApp.com/send?phone=2347040671352&text=Hello, I am texting from your website A4dabul, I would love to find out more about ...'>
                            <Button>Book Appointment</Button>
                        </a>
                    </div>
                </div>
            </div>

            <Schedule image={image.spaSchedule} service='spa' />

            

            

            {/* <BreadcrumbBanner name='Services' /> */}

            {/* <Product /> */}
            <Footer />
        </>
    )
}

export default Home