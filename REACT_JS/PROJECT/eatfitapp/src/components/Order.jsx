import React from 'react';
import "./Order.css";

import { BsFillClockFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { MdOutlineTune } from "react-icons/md";

const Orderlist = () => {

    return (
        <>
            <div className="brand-icons">

                <img src ='https://ik.imagekit.io/curefoods/image/listing-brands/CUREFOODS/CUREFOODS_SELECTED_IMAGE_1.svg' className = 'img1'></img>
                <img src = 'https://ik.imagekit.io/curefoods/image/listing-brands/NEW_AND_POPULAR/NEW_AND_POPULAR_IMAGE_production_12th_Oct_22_6_30_58.svg' className = 'img1'></img>
                <img src = 'https://ik.imagekit.io/curefoods/image/listing-brands/EAT_FIT/EAT_FIT_IMAGE_1.svg' className = 'img1'></img>
                <img src = 'https://ik.imagekit.io/curefoods/image/listing-brands/HRX_BY_EATFIT/HRX_BY_EATFIT_SELECTED_IMAGE_1.svg' className = 'img1'></img>
                <img src = 'https://ik.imagekit.io/curefoods/image/listing-brands/CHAAT_STREET/CHAAT_STREET_IMAGE_production_15th_Sep_22_11_07_55.svg' className = 'img1'></img> 
                <img src = 'https://ik.imagekit.io/curefoods/image/listing-brands/CHOW_TAO/CHOW_TAO_IMAGE_1.svg' className = 'img1'></img> 
                <img src = 'https://ik.imagekit.io/curefoods/image/listing-brands/GREAT_INDIAN_KHICHDI/GREAT_INDIAN_KHICHDI_SELECTED_IMAGE_1.svg' className = 'img1'></img> 
                <img src = 'https://ik.imagekit.io/curefoods/image/listing-brands/OLIO/OLIO_SELECTED_IMAGE_1.svg' className = 'img1'></img> 
                <img src = 'https://ik.imagekit.io/curefoods/image/listing-brands/HOME_PLATE/HOME_PLATE_SELECTED_IMAGE_production_15th_Sep_22_11_20_17.svg' className = 'img1'></img> 
                <img src = 'https://ik.imagekit.io/curefoods/image/listing-brands/PARATHA_BOX/PARATHA_BOX_IMAGE_1.svg' className = 'img1'></img> 
                <img src = 'https://ik.imagekit.io/curefoods/image/listing-brands/SMOODIES/SMOODIES_IMAGE_production_7th_Nov_22_7_00_08.svg' className = 'img1'></img> 

            </div>


            <div className="banner-images">

                <img src = 'https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/e6b1bfc1-6be1-400d-a620-7489dc089279.png' className = 'img2'></img>
                <img src = 'https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/36f79a6e-1d77-42b0-bee8-9ef22b61a277.png' className = 'img2'></img>
                <img src = 'https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/2614a10a-bd2b-4066-9a9b-9f389cbe815b.png' className = 'img2'></img>

            </div>


            <div className="btn">


                <button className='btn-1'><BsFillClockFill /><p>Today Snacks</p><AiFillCaretDown /></button>

                <div className='btn-2'><input type="checkbox"></input><p>Veg Only</p></div>

                <div className='btn-3'><p>Filter</p><MdOutlineTune /></div>

            </div>
            
            <div className="Container-images">
                
                <img src = 'https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_THALI_1.png' className = 'img3'></img>
                <img src = 'https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_RICEBOWL_1.png' className='img3'></img>
                <img src = 'https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_KHICHDI_2.png' className='img3'></img>
                <img src = 'https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_BIRYANI_1.png' className='img3'></img>
                <img src = 'https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_PIZZA_2.png' className='img3'></img>
                <img src = 'https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_CHINESE_C2.png' className='img3'></img>
            
            </div>
        </>
    )
}



export default Orderlist;























