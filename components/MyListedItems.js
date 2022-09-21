import { useState, useEffect } from 'react'
import {ethers} from "ethers"
import {Row, Col, Card} from 'react-bootstrap'

function renderSoldItems(items) {
    return (
      <>
        <h2>Sold</h2>
        <Row xs={1} md={2} lg={4} className="g-4 py-3">
          {items.map((item, idx) => (
            <Col key={idx} className="overflow-hidden">
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Footer>
                  For {ethers.utils.formatEther(item.totalPrice)} ETH - Recieved {ethers.utils.formatEther(item.price)} ETH
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    )
  }