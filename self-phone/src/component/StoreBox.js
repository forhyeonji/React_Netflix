import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SearchBox from './SearchBox'
import PhoneItem from './PhoneItem'

const StoreBox = () => {
  return (
    
        <div>
            <SearchBox/>
            <PhoneItem/>
            <PhoneItem/>
            <PhoneItem/>
        </div>
  )
}

export default StoreBox