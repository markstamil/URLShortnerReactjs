import React, { useState, useEffect } from 'react'
import home from '../Modules/Layout.module.css'
import { Row, Col } from 'reactstrap'
import Aos from 'aos'
import "aos/dist/aos.css";
import InputFields from '../Components/InputFields'
import ButtonField from '../Components/ButtonField';
import { UseShortenAndStoreURL } from '../Customhooks/UseUrlShortnerPostAndGet';
import { urlValdiation } from '../Validation/URLValidation';
import { useLocation } from 'react-router-dom';
import { Firstpara, Secondpara } from '../Contents/Firstpara';
const URLShortnerLayout = () => {
    const location = useLocation()
    const [url, setUrl] = useState({
        Shortened_URL: process.env.REACT_APP_SHORTENEDURLPREFIX,
        Original_URl: ''
    })
    const [retrievedUrl, setRetrievedUrl] = useState('')
    const [isLoading, setIsloading] = useState({
        load: false,
        error: ''
    })
    const [urlShortened, setUrlShortened] = useState('')
    const handleUrlChange = (data) => {
        console.log(data)
        setUrl({
            Original_URl: data,
            Shortened_URL: process.env.REACT_APP_SHORTENEDURLPREFIX
        })
    }
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])
    const handleUrlShortner = () => {

        setIsloading({
            load: true,
            error: ''
        })
        if (!url.Original_URl) {
            return (setIsloading({
                load: false,
                error: 'Paste the link'
            }), setTimeout(() => {
                setIsloading({
                    load: false,
                    error: ''
                })
            }, 1000))
        }
        if (urlValdiation(url.Original_URl)) {
            UseShortenAndStoreURL(url).then(res => {
                if (res.data.responseStatus === 'Success') {
                    console.log(res.data)
                    setRetrievedUrl(res.data.data)
                    setIsloading({
                        load: false,
                        error: ''
                    })
                    setTimeout(() => {
                        setUrl({
                            Original_URl: ''
                        })
                    }, 0);
                } else {
                    setIsloading({
                        load: false,
                        error: 'something went wrong'
                    })
                    setTimeout(() => {
                        setIsloading({
                            load: false,
                            error: ''
                        })
                        setUrl({
                            Original_URl: ''
                        })
                    }, 1500);
                }
            }).catch(e => {
                setIsloading({
                    load: false,
                    error: e.toString()
                })
                setTimeout(() => {
                    setIsloading({
                        load: false,
                        error: ''
                    })
                    setUrl({
                        Original_URl: ''
                    })
                }, 1500);
            })
        } else {
            setIsloading({
                load: false,
                error: 'Invalid url'
            })
            setTimeout(() => {
                setIsloading({
                    load: false,
                    error: ''
                })
            }, 1500);
        }



    }
    return (
        <div className={`${home.mainContainer}`}>
            <Row style={{ height: '500px', width: '100%' }}
                className={`rounded d-flex  justify-content-center flex-row  w-100`}>

                <Col md='7'
                    className={` mt-5 d-block justify-content-start flex-row`}
                    style={{ float: 'left', justifyContent: 'start' }}

                >

                    <h1 data-Aos="slide-down" className="my-5 display-3 fw-bold ls-tight px-3" >
                        URL <br />
                        <span style={{ color: '#29CBFB' }}>shortener service</span>
                    </h1>

                    <p data-Aos="slide-right" className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                        {Firstpara}

                    </p>
                    <p data-Aos="slide-right" className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                        {Secondpara}

                    </p>

                </Col>
                <Col style={{ borderRadius: '0px 25px 0px 25px' }}
                    data-Aos="slide-down" md='3' className={` mt-5 m-2 bg-white shadow-lg `}>
                    <div className={`position-relative  top-50 translate-middle-y`}>
                        <img
                            className='position-relative start-50 translate-middle-x'
                            style={{ height: '85px', width: '260px' }}
                            src='https://free-url-shortener.rb.gy/url-shortener.png'
                            alt="URL Shortner Logo"
                        />
                        <h4 style={{ color: '#29CBFB' }} className=" text-start mx-3 my-2 mb-3 ">URL Shortner</h4>
                        <div className="mx-2 mb-3 row">
                            <div className='form-floating'>
                                <InputFields
                                    callBackOnUrlData={handleUrlChange}
                                    value={url.Original_URl}
                                    placeHolder='Paste the url'
                                    handleCallBackForUrlShortnerSubmit={handleUrlShortner}

                                />
                                {
                                    isLoading.error ?
                                        <span className='mx-1 text-danger fs-6'>!{isLoading.error}</span> : ''
                                }
                            </div>
                        </div>
                        <div className="mx-2 mb-3 row">
                            <div className='form-floating'>
                                <InputFields
                                    value={retrievedUrl}
                                    hide={true}
                                    placeHolder='Here is your shortened link'

                                />
                            </div>
                            <div className='d-block justify-content-center flex-row'>
                                <ButtonField
                                    data={retrievedUrl}
                                />

                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default URLShortnerLayout