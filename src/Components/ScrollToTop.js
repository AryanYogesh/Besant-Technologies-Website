import React, { useState } from "react";

const ScrollToTop = () =>{
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () =>{
        if(window.scrollY>300){
            setShowButton(true);
        }else{
            setShowButton(false);
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({top:0,behavior:"smooth"});
    };

    React.useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
    }, []);

    return(
        showButton &&(
            <button className="btn btn-primary scroll-to-top" onClick={scrollToTop}>
                ↑
            </button>
        )
    );
};

export default ScrollToTop;