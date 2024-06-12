
import {motion} from "framer-motion"
import "./Circle.css"
export default function Circle() {
return(
    <>
    <div className="w-mainCirclec">

<motion.div
initial={{ rotate: 45 }}
whileInView={{ rotate: 0 }}
viewport={{ margin: "-40px" }}
transition={{ duration: 3.5, type: "spring" }}
className="w-mainCircle"
>
<div className="w-secCircle">
  <img  className="img" src={"https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw72198a2d/images/sonatadesktop.jpg"} alt="" />
</div>
<div className="w-secCircle">
  <img className="img" src={"https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw72198a2d/images/sonatadesktop.jpg"} alt="" />
</div>
<div className="w-secCircle">
  <img className="img" src={"https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw72198a2d/images/sonatadesktop.jpg"} alt="" />
</div>{" "}
<div className="w-secCircle">
  <img className="img" src={"https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw72198a2d/images/sonatadesktop.jpg"} alt="" />
</div>
<div className="w-secCircle">
  <img className="img" src={"https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw72198a2d/images/sonatadesktop.jpg"} alt="" />
</div>
</motion.div>
<div className="w-backCircle blueCircle"></div>
<div className="w-backCircle yellowCircle"></div>
</div> 
</>
)

}