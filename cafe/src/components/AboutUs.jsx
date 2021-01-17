import React from "react";
import Background from '../img/beans.jpg';
import Footer from './Footer';

function AboutUs(){
    return (
        <div className="aboutUs">
            <img className="backgroundAboutUs" src={Background} alt=""/>
            <p class="aboutUsText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet consequat dapibus. Nam suscipit magna tempor euismod eleifend. Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet consequat dapibus. Nam suscipit magna tempor euismod eleifend. Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet consequat dapibus. Nam suscipit magna tempor euismod eleifend. Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet consequat dapibus. Nam suscipit magna tempor euismod eleifend. Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.
            </p>
            <Footer className="AboutUsFooter"/>
        </div>
        
    );
}

export default AboutUs;