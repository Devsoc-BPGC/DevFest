import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TextWithIcon.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TextWithIcon extends React.Component {
   static propTypes = {
      icon: PropTypes.object,
      text: PropTypes.string,
   };
   render() {
      return (
         <div className={Styles.container}>
            <FontAwesomeIcon
               icon={this.props.icon}
               className={Styles.icon}
               size="2x"
            />
            <span className={Styles.text}>{this.props.text}</span>
         </div>
      );
   }
}

export default TextWithIcon;
