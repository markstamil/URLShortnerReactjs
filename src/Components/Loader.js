import React from 'react'
import { Spinner } from 'reactstrap'

const Loader = ({hide}) => {
    return (
        <>
            <div className='d-flex justify-content-center flex-row'>
                <Spinner size='sm' color='primary' />
                <small hidden={hide} className='text-start' style={{ color: '#29CBFB' }}>Please wait</small>
            </div>
        </>
    )
}

export default Loader