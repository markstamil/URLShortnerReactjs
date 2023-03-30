import React from 'react'

const InputFields = ({ callBackOnUrlData, value,hide,placeHolder,handleCallBackForUrlShortnerSubmit }) => {
    const handleURLChange = (e) => {
        callBackOnUrlData(e.target.value)
    }
    const handleUrlShortner = () =>{
        handleCallBackForUrlShortnerSubmit()
    }
    return (
        <div>
            <div class="input-group mb-3">
                <input
                    type="text"
                    class="form-control"
                    placeholder={placeHolder}
                    aria-label="Paste the url"
                    aria-describedby="basic-addon2"
                    value={value}
                    onChange={(e) => handleURLChange(e)}
                    disabled={hide}
                />
                <div class="input-group-append" hidden={hide ? true : false}>
                    <button
                        className="btn btn-outline-none text-white"
                        style={{backgroundColor:'#29CBFB'}}
                        type="button"
                        onClick={() => handleUrlShortner()}
                        >
                        Shorten
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InputFields