import React from 'react';
import PropTypes from 'prop-types';
import PersonCard from '../../components/PersonCard/PersonCard';
import Styles from './Speakers.module.scss';

class Speakers extends React.Component {
   static propTypes = {
      people: PropTypes.arrayOf({
         name: PropTypes.string,
         designation: PropTypes.string,
         photo: PropTypes.string,
         about: PropTypes.string,
         backdrop: PropTypes.string,
      }),
   };
   render() {
      const people = this.props.people.map((person, index) => {
         return (
            <div key={index} className={Styles.speakerCard}>
               <img src={person.backdrop} className={Styles.backdrop} />
               <div className={Styles.infoCard}>
                  <PersonCard
                     name={person.name}
                     designation={person.designation}
                     photo={person.photo}
                     about={person.about}
                  />
               </div>
            </div>
         );
      });
      return (
         <div className={`${Styles.speakersContainer} container`}>
            <div>
               <h2>Speakers</h2>
               <h5>
                  We focus on ergonomics and meeting you where you work.
                  It&apos;s only a keystroke away.
               </h5>
            </div>
            {people}
         </div>
      );
   }
}

export default Speakers;
