import "./ShopFor.css"
import {motion} from "framer-motion"
import FloatingDiv from "../FloatingDiv/FloatingDiv"
export default function ShopFor(){
    const transition = { duration: 2, type: "spring" };
    return(
        <>
        
          {/* <div className="adv">
        <img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dw5cfbd4fe/images/homepage/desktop/emi_section_d.jpg"  alt=""/>
      </div> */}
      <div className="shop"><h2>SHOP FOR</h2></div>
        <div className="container marketing" >
       
        <div className="sep2"></div>
   

        <div className="row">
            <motion
            initial={{left: "2rem"}}
            whileInView={{left: "14rem"}}
            
            >

          <div className="col-lg-4">
            <img className="rounded-circle" src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw42fc4475/images/homepage/desktop/Men-Dn.jpg" alt="Generic placeholder image" />
            <h2>MEN</h2>
            <p><a className="btn btn-secondary" href="#" role="button">SHOP NOW »</a></p>
          </div>
          </motion>

          <div className="col-lg-4">
            <img className="rounded-circle" src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw40090385/images/homepage/desktop/Women-Dn.jpg" alt="Generic placeholder image" />
            <h2>WOMEN</h2>
            <p><a className="btn btn-secondary" href="#" role="button">SHOP NOW »</a></p>
          </div>

          <div className="col-lg-4">
            <img className="rounded-circle" src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dwf9109f42/images/homepage/desktop/Couple-Dn.jpg" alt="Generic placeholder image" />
            <h2>COUPLE</h2>
            <p><a className="btn btn-secondary" href="#" role="button">SHOP NOW »</a></p>
          </div>

          <div className="col-lg-4">
            <img className="rounded-circle" src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dw5830d29e/images/homepage/desktop/featured-collections-desktop.jpg" alt="Generic placeholder image" />
            <h2>KIDS</h2>
            <p><a className="btn btn-secondary" href="#" role="button">SHOP NOW »</a></p>
          </div>

          <div className="col-lg-4">
            <img className="rounded-circle" src="https://th.bing.com/th/id/OIP.i6MKRFAKGG3pfl9yeV6TjQAAAA?rs=1&pid=ImgDetMain" alt="Generic placeholder image" />
            <h2>LUXURY</h2>
            <p><a className="btn btn-secondary" href="#" role="button">SHOP NOW »</a></p>
          </div>

          <div className="col-lg-4">
            <img className="rounded-circle" src="https://th.bing.com/th/id/OIP.Fb7fAynSVt8OopVyR5zQWwHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Generic placeholder image" />
            <h2>SMART</h2>
            <p><a className="btn btn-secondary" href="#" role="button">SHOP NOW »</a></p>
          </div>

        </div>

    </div>

        </>
    )
}