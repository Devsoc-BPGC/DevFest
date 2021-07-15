import React from 'react';
import PropTypes from 'prop-types';
import Styles from './sponsors.module.scss';

export default function Circle(props) {
   return (
      <div className={props.classProp}>
         <div className={Styles.black}>
            <p>{props.text}</p>
         </div>
         <div className={Styles.green} />
      </div>
   );
}

Circle.propTypes = {
   text: PropTypes.string,
};

Circle.propTypes = {
   classProp: PropTypes.string,
};
