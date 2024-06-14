import "./Brands.css" 
import {motion} from "framer-motion";
export default function Brands(){
    const transition = {
        duration: 1,
        type: "spring",
      };
    return(
        <>
       
      
       <div class="card-deck">
       

        
        <div class="card">
          <img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dw061b60f8/images/homepage/desktop/Smart_category_D.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Smart watches</h5>
          </div>

        </div>
        
      
        <div class="card">
          <img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dw83957d1f/images/homepage/desktop/Streetwear_Desktop.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Analog watches</h5>
          </div>
        </div>
            
        <div class="card">
          <img src="https://thumbs.dreamstime.com/b/beautiful-happy-long-hair-young-woman-listening-music-wir-wireless-yellow-headphone-looking-up-dark-black-background-93938255.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Wearables</h5>
          </div>
        </div>
      </div>
      
        </>
    )
}