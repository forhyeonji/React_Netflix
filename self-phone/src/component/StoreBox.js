import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import SearchBox from './SearchBox'
import PhoneItem from './PhoneItem'
import { useSelector } from 'react-redux'

const StoreBox = () => {

  const { contact, keyword } = useSelector((state) => state)
  let [filteredList, setFilteredList] = useState([]);

  useEffect(()=>{
    if (keyword !== ""){
      let list = contact.filter((item)=>item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }


    }, [keyword]);

  return (
    
        <div>
            <SearchBox/>
            <div>
              num : {filteredList.length}
              {filteredList.map((contactItem)=>(
                <PhoneItem contactItem={contactItem} />
              ))}
            </div>
        </div>
  )
}

export default StoreBox