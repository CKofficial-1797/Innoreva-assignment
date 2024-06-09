import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import { motion } from "framer-motion"

function GridExample() {
  return (
    <>
    <h1 style={{ textAlign:"center"}}> TOP BRANDS</h1>
    {/* <Row xs={1} md={0.2} classNameName="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
        
         <CardGroup>
          <Card>
          <img className="card-img-top" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwd005b872/images/TitanSBDesktop.jpg" alt="Card image cap"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <img className="card-img-top" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dweedae1b7/images/fastrackdesktop.jpg" alt="Card image cap"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <img className="card-img-top" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw72198a2d/images/sonatadesktop.jpg" alt="Card image cap"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>

        </CardGroup>
        </Col>

      ))}
    </Row> */}
    <Row>
        <Col>
        <motion.div
          whileHover={{ scale: 1.2 ,
            transition: { duration: 1 },

          }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          
        
        >
    <Card>
          <img className="card-img-top" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw72198a2d/images/sonatadesktop.jpg" alt="Card image cap"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          </motion.div>
          </Col>
          <Col>
          <motion.div
          whileHover={{ scale: 1.2 ,
            transition: { duration: 1 },

          }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          
        
        >
          <Card>
          <img className="card-img-top" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dweedae1b7/images/fastrackdesktop.jpg" alt="Card image cap"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          </motion.div>
          </Col>
          <Col>
          <motion.div
          whileHover={{ scale: 1.2 ,
            transition: { duration: 1 },

          }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}} >
          
          <Card>
          <img className="card-img-top" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwd005b872/images/TitanSBDesktop.jpg" alt="Card image cap"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          </motion.div>
          </Col>
          
          
          

    </Row>
    <Row>
        <Col>
        <motion.div
          whileHover={{ scale: 1.2 ,
            transition: { duration: 1 },

          }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          
        
        >
    <Card>
    <img className="card-img-top" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw34585a51/images/homepage/Police_desktop.jpg" alt="Card image cap"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          </motion.div>
          </Col>
          <Col>
          <motion.div
          whileHover={{ scale: 1.2 ,
            transition: { duration: 1 },

          }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          
        
        >
          <Card>
          <img className="card-img-top" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw55073896/images/homepage/Anne-K_desktop.jpg" alt="Card image cap"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          </motion.div>
          </Col>
          <Col>
          <motion.div
          whileHover={{ scale: 1.2 ,
            transition: { duration: 1 },

          }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          
        
        >
          <Card>
          <img className="card-img-top" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw72198a2d/images/sonatadesktop.jpg" alt="Card image cap"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          </motion.div>
          </Col>
          
          
          

    </Row>
    </>
  );
 
}

export default GridExample;