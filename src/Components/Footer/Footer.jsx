import React ,{useRef} from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import {motion} from "framer-motion"


 function Component() {
    const scrollRef = useRef(null)
    
    return (
      <div ref={scrollRef} style={{ overflow: "scroll" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
        >HELLO</motion.div>
      </div>
    )
  }
 
export const Footers = () => {
    return (
        <Box>
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                WatchX.com
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>COLLECTIONS</Heading>
                        <FooterLink href="#">
                            GRANDMASTER
                        </FooterLink>
                        <FooterLink href="#">
                            STELLAR
                        </FooterLink>
                        <FooterLink href="#">
                            POWER PEARLS
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading> CUSTOMER SERVICES</Heading>
                        <FooterLink href="#">
                            Payment Options
                        </FooterLink>
                        <FooterLink href="#">
                            Track Order
                        </FooterLink>
                        <FooterLink href="#">
                            Encircle Program
                        </FooterLink>
                        <FooterLink href="#">
                            Encircle Program
                        </FooterLink>
                        <FooterLink href="#">
                            Find watch World Stores
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                           1800-566-012345
                        </FooterLink>
                        <FooterLink href="#">
                            customercare@watch.co.in
                        </FooterLink>
                        <FooterLink href="#">
                            Help & Contact
                        </FooterLink>
                        <FooterLink href="#">
                            FAQs
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
const Footer=()=>{
    const scrollRef = useRef(null)
    
    return (
      <div ref={scrollRef} style={{ overflow: "scroll" }}>
        <motion.div
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 1}}
          viewport={{ root: scrollRef }}  
          whileHover={{scale: 1.08 ,
            duration: 1000
        }}  
        >
            <Footers/>
        </motion.div>
      </div>
    )
  }


export default Footer;
// export {Component} ;