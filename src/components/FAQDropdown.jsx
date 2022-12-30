import React, {useRef} from 'react'

const FAQDropdown = ({ answer, active }) => {
    
    const contentHeight = useRef();

    return (
        <>
            <p ref={contentHeight} className="content_wrapper text-left border border-primary border-t-transparent px-3 pt-1" style={active ? { height: contentHeight.current.scrollHeight } : { height: "0px" }}>
                <span className='my-5'>{answer}</span>
            </p>
        </>
    )
}

export default FAQDropdown