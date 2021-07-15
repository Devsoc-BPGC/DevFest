import React from 'react';
import Circle from './Circle';
import Styles from './sponsors.module.scss';

export default function Sponsors() {
   return (
      <div>
         <h1>Sponsors</h1>
         <div className={Styles.circleFlex}>
            <Circle text="caarya" classProp={Styles.left}></Circle>
            <Circle text="geeksforgeeks" classProp={Styles.right}></Circle>
            <Circle text="third-sponsor" classProp={Styles.left}></Circle>
         </div>
      </div>
   );
}
