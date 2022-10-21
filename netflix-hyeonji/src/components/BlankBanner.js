import React from 'react'
// https://images.hdqwalls.com/download/polygonal-abstract-red-dark-background-eo-1280x1024.jpg
const BlankBanner = () => {
  return (
    <div
        className='blank_banner'
        style={{
            backgroundImage:"url("+`https://static1.srcdn.com/wordpress/wp-content/uploads/2019/02/Netflix-Originals-logo.jpg`+
            ")"
            }}
    >
        {/* <div className='blank_info'>
            <span className='blank_title'>NETFLIX</span>
        </div> */}
    </div>
  )
}

export default BlankBanner