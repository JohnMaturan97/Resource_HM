import React from "react";
import SwiftSlider from 'react-swift-slider'

const data =  [
    {'id':'1','src':'https://photos.mandarinoriental.com/is/image/MandarinOriental/dmo-Three-days-of-wellness-Dubai-00-Hero-luxury-spa-daybed?wid=1290&hei=860&fmt=jpeg&qlt=75,0&op_sharpen=0&resMode=sharp2&op_usm=0.8,0.8,4,0&iccEmbed=0&printRes=72&fit=crop&qlt=45,0'},
    {'id':'2','src':'https://cdn.kiwicollection.com/media/property/PR000284/xl/000284-21-Sanctuary%20Signature%20Pool%20Image.jpg?cb=1494453819'},
    {'id':'3','src':'https://img1.10bestmedia.com/Images/Photos/231540/sofitel1_55_660x440_201404241310.jpg'},
    {'id':'4','src':'https://mocah.org/uploads/posts/4587416-luxury-mountains-trees-stones-water-spa-wood-clouds-red-orange-nature-landscape-forest-sunset-interior-hotel-lights-wooden-surface-st.-lucia-palm-trees-hotel-chocolat.jpg'},
    {'id':'5','src':'https://www.yachtinglifestyle365.com/wp-content/uploads/2019/02/190211122303-11-best-hotels-south-beach-miami-1-hotel.jpg'}
  ];

      export class Home extends React.Component {

    render() {
        return (
    <div>

<h2> WHAT ARE YOU WAITING FOR? </ h2>      <hr />
        <SwiftSlider data={data}/> 
   
            <hr />
             <h2> VOTED #1 </h2>
                <h2> FOR LUXURY HOTEL BOOKINGS </ h2>
             <h2>Your Dream Stay Awaits You</h2>
             
            
    </div>  
           
        ) 
    }
}

