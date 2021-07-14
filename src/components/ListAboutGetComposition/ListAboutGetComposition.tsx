import React from "react";
import "./list.sass";
import calendar from '../../img/list-about/calendar.svg';
import chat from '../../img/list-about/chat.svg';
import heand from '../../img/list-about/heand.svg';
import home from '../../img/list-about/home.svg';
import balloon from '../../img/list-about/balloon.svg';
import insurance from '../../img/list-about/insurance.svg';
import moneybag from '../../img/list-about/money-bag.svg';
import earth from '../../img/list-about/earth.svg';



 

export const ListAboutGetComposition: React.FC = () => {
  return (
    <div className="list-composition">
       <h1>С компанией Lotus Вы получаете:</h1>
       <div className="items-wrapper">
           <div className="items">
               <div className="item">
                   <div className="svg-block">
                   <div className="svg"><img src={calendar} alt="" /></div>
                   <h3>ГИБКИЙ РАБОЧИЙ ГРАФИК</h3>
                   </div>
                   
                   <p>Вы работаете, когда хотите и где хотите. Компания работает во всех странах мира.</p>
               </div>
               <div className="item">
                   <div className="svg-block">
                   <div className="svg"><img src={chat} alt="" /></div>
                   <h3>ОБЩЕНИЕ С ИНТЕРЕСНЫМИ ЛЮДЬМИ</h3>
                   </div>
                   
                   <p>Вы постоянно будете встречать новых людей. С вами будут сотрудничать десятки тысяч людей, которых объединяет стремление добиваться успеха.</p>
               </div>
               <div className="item">
                   <div className="svg-block">
                   <div className="svg"><img src={heand} alt="" /></div>
                   <h3>ПРИЗНАНИЕ</h3>
                   </div>
                   
                   <p>Достигая результатов, Вы будете двигаться по карьерной лестнице, получать поздравления на “больших сценах”, получать подарки и быть наставником для многих людей.</p>
               </div>
               <div className="item">
                   <div className="svg-block">
                   <div className="svg"><img src={home} alt="" /></div>
                   <h3>НЕДВИЖИМОСТЬ</h3>
                   </div>
                   
                   <p>Программа недвижимости обеспечит Вам возможность переехать в новый дом или квартиру уже в этом году.</p>
               </div>
           </div>
           <div className="items">
           <div className="item">
                   <div className="svg-block">
                   <div className="svg"><img src={balloon} alt="" /></div>
                   <h3>ИНТЕРЕСНУЮ НАСЫЩЕННУЮ ЖИЗНЬ</h3>
                   </div>
                   
                   <p>Компания проводит различные интересные мероприятия, обучения и тренинги. Ваша структура будет развиваться по всему миру.</p>
               </div>
               <div className="item">
                   <div className="svg-block">
                   <div className="svg"><img src={insurance} alt="" /></div>
                   <h3>ОТСУТСТВИЕ РИСКА</h3>
                   </div>
                   
                   <p>Нет больших вложений. Все риски берет на себя Компания. Она выпускает, совершенствует и продает продукт.</p>
               </div>
               <div className="item">
                   <div className="svg-block">
                   <div className="svg"><img src={moneybag} alt="" /></div>
                   <h3>НЕОГРАНИЧЕННЫЙ ДОХОД</h3>
                   </div>
                   
                   <p>Каждое бизнес-место потенциально может приносить до 200 000 долларов в месяц. Количество наших бизнес-мест не ограничено.</p>
               </div>
               <div className="item">
                   <div className="svg-block">
                   <div className="svg"><img src={earth} alt="" /></div>
                   <h3>ПУТЕШЕСТВИЯ</h3>
                   </div>
                   
                   <p>Компания проводит выездные семинары в различных экзотических местах по всему миру. Вы побываете во всех столицах мира, а также на самых роскошных пляжах планеты.</p>
               </div>
           </div>
       </div>
    </div>
  );
};
