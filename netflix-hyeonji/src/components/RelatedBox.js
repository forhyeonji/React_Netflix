import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RelatedCard from './RelatedCard'

const RelatedBox = ({related}) => {
  return (
    <div>
      <Row>
          {related.results.map((item)=>(
            <Col lg={4}>
              <RelatedCard item={item} />
            </Col>
          ))}
        </Row>
    </div>
  )
}

export default RelatedBox