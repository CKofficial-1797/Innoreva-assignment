import React, { useContext } from "react";
import "./NewCircle.css";
import { motion } from "framer-motion";
// import {Link} from 'react-scroll'
// import Voice1 from "../Voice/Voice1.jsx"
const NewCircle = () => {
  // context


  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span >
            TOP
          </span>
          <span>CHOICES</span>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat tenetur porro culpa at omnis ab ratione accusamus, doloremque tempora, amet, alias excepturi sit.</p>
          {/* <Link to="contact" smooth={true} spy={true}> */}
            <button className="button s-button">Read More</button>
          {/* </Link> */}
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
       

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img  className="img" src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw569da3aa/images/Sonata/Catalog/SP70028NM01W_1.jpg?sw=360&sh=360" alt="" />
          </div>
          <div className="w-secCircle">
            <img className="img" src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2914eab6/images/Fastrack/Catalog/FV60036QM01W_1.jpg?sw=360&sh=360" alt="Product 2"  />
          </div>
          <div className="w-secCircle">
            <img className="img" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8da49dae/images/Sonata/Catalog/77061PP02J_1.jpg?sw=360&sh=360" alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img className="img" src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2914eab6/images/Fastrack/Catalog/FV60036QM01W_1.jpg?sw=360&sh=360"  alt="" />
          </div>
          <div className="w-secCircle">
            <img className="img" src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe3d103d7/images/Fastrack/Catalog/38077AP01_1.jpg?sw=360&sh=360"  alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default NewCircle;
