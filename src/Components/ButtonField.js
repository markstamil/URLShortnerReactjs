import React, { useState } from 'react'

import { Button } from 'reactstrap'
const ButtonField = ({ data }) => {
    const [show, setShow] = useState(false)
    const callBackClipBoardCopy = () => {
        setShow(true)
        navigator.clipboard.writeText(data)
        setTimeout(() => {
            setShow(false)
        }, 2000);
    }
    return (
        <div className='d-block justify-content-center flex-row'>

            <Button
                style={{ background: 'white', color: '#29CBFB', border: '1px solid #29CBFB' }}
                onClick={() => callBackClipBoardCopy()}
                disabled={data ? false : true}
            >Copy link
            </Button>
            {
                show ? 
                    <div class="m-1 alert alert-success" role="alert">
                        Copied to clipboard 👍
                    </div>
               : ''
            }
        </div>
    )
}

export default ButtonField