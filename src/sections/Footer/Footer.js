import React from 'react';
import logo from '../../assets/img/logo.png';
import Styles from './Footer.module.scss';
import TextWithIcon from '../../components/TextWithIcon/TextWithIcon';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import {
   faEnvelope,
   faMapMarkerAlt,
   faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
   faFacebookSquare,
   faInstagram,
   faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
   render() {
      const textsWithIcon = [
         {
            text: 'devsocbpgc@gmail.com',
            icon: faEnvelope,
         },
         {
            text: '+91 70144 62779',
            icon: faMobileAlt,
         },
         {
            text: 'BITS Pilani K K Birla Goa Campus ',
            icon: faMapMarkerAlt,
         },
      ].map((textWithIcon, index) => (
         <TextWithIcon
            icon={textWithIcon.icon}
            text={textWithIcon.text}
            key={index}
         />
      ));
      const socialIcons = [
         {
            link: 'https://www.facebook.com/devsocbpgc/',
            icon: faFacebookSquare,
         },
         {
            link: 'https://www.linkedin.com/company/devsoc-bpgc/',
            icon: faLinkedin,
         },
         {
            link: 'https://www.instagram.com/devsocbitsgoa/',
            icon: faInstagram,
         },
      ].map((socialIcon, index) => (
         <SocialIcon
            icon={socialIcon.icon}
            link={socialIcon.link}
            key={index}
         />
      ));
      return (
         <div className={Styles.container}>
            <div className={Styles.topHalf}>
               <div className={Styles.leftPart}>
                  <img className={Styles.logo} src={logo} />
                  <span className={Styles.socialIconsContainer}>
                     {socialIcons}
                  </span>
               </div>
               <div className={Styles.rightPart}>{textsWithIcon}</div>
            </div>
            <span className={Styles.lastText}>Made with ❤️ by DevSoc</span>
            <span className={Styles.disclaimerText}>
               All ideas and source code will be under the ownership of DevSoc
            </span>
         </div>
      );
   }
}

export default Footer;
