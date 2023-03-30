import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import URLShortnerLayout from './UI/URLShortnerLayout';
import { useLocation, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState, Suspense, lazy } from 'react';
import Loader from './Components/Loader';
import { UseGetOriginalURL } from './Customhooks/UseUrlShortnerPostAndGet';
function App() {
  const location = useLocation()
  const navigate = useNavigate();
  const [url, setUrl] = useState('')
  const [showError, setShowError] = useState({
    open: false,
    msg: ''
  })
  useEffect(() => {
    const urlSplitteddata = window.location.href.split('/')
    console.log(urlSplitteddata)
    if (urlSplitteddata[urlSplitteddata.length - 1]) {
      UseGetOriginalURL(urlSplitteddata[urlSplitteddata.length - 1]).then(res => {
        if (res.data.responseStatus === 'Success') {
          return window.location.replace(res.data.data)
        }
        if (res.data.responseStatus === 'Expires') {
          return (setShowError({
            open: true,
            msg: 'Link Expired'
          }),
            setTimeout(() => {
              setShowError({
                open: false,
                msg: ''
              })
            }, 1000));
        }
        else {
          return navigate('/NotFound',{replace:true})
        }
      }).catch(e => {
        setShowError({
          open: true,
          msg: e.toString()
        })
        setTimeout(() => {
          setShowError({
            open: false,
            msg: ''
          })
        }, 5000);
      })
    }

  }, [])
  const URLShortnerLayout = (
    lazy(() => (
      import('./UI/URLShortnerLayout')
    ))
  )
  const NotFound = (
    lazy(() => (
      import('./ErrorPage/NotFound')
    ))

  )

  return (
    <Suspense fallback={<Loader hide={true} />}>
      {
        showError.open ?
          <div className='w-50 d-flex justify-content-start flex-row m-2'>
            <div class="alert alert-danger" role="alert">
              {showError.msg}
            </div>
          </div>
          : ''
      }
      <Routes>
        <Route path='/' exact element={<URLShortnerLayout />} />
        <Route path='/NotFound' exact element={<NotFound />} />
      </Routes>
    </Suspense>

  );
}

export default App;
