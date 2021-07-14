import React from "react";
import "./advantages.sass";

export const AdvantagesComposition: React.FC = () => {
  return (
    <div className="advantages-composition">
       <div className="items">
           <div className="item">
               <h1>Почему мы?</h1>
               <ul>
                   <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li>
                   <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li>
                   <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li>
                   <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li>
               </ul>
           </div>
           <div className="item">
               <h2>Наши преимущества</h2>
               <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
       </div>
    </div>
  );
};