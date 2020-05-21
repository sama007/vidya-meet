import React from "react";
import MenuVidya from './menu';
import LogoVidya from './logo';
import BrandVidya from './brand'


export default function NavBarVidya(){
    return(
        <div className="vidya-nav-bar">
            <LogoVidya/>
            <BrandVidya/>
            <MenuVidya/>
        </div>
    );
}