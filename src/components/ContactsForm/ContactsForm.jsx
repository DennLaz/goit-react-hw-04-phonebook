// import { Component } from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types';

import styles from './contactsForm.module.css';

function ContactsForm({ onSubmit }) {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const { name, number } = state;

  function handleChange({ target }) {
    const { name, value } = target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ ...state });
    setState({
      name: '',
      number: '',
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrap}>
        <label className={styles.el}>
          Name
          <input
            className={styles.input}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>
      <div className={styles.wrap}>
        <label className={styles.el}>
          Number
          <input
            className={styles.input}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <div>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
}

ContactsForm.defaultProps = {
  onSubmit: () => {},
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactsForm;

// class ContactsForm extends Component {
//   // state = {
//   //   name: '',
//   //   number: '',
//   // };

//   // handleChange = ({ target }) => {
//   //   const { name, value } = target;
//   //   this.setState({ [name]: value });
//   // };

//   // handleSubmit = e => {
//   //   e.preventDefault();
//   //   this.props.onSubmit({ ...this.state });
//   //   this.setState({
//   //     name: '',
//   //     number: '',
//   //   });
//   // };

//   // render() {
//   //   const { handleChange, handleSubmit } = this;
//   //   const { name, number } = this.state;
//     // return (
//     //   <form onSubmit={handleSubmit} >
//     //     <div className={styles.wrap}>
//     //       <label className={styles.el}>
//     //         Name
//     //         <input className={styles.input}
//     //           value={name}
//     //           onChange={handleChange}
//     //           type="text"
//     //           name="name"
//     //           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//     //           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     //           required
//     //         />
//     //       </label>
//     //     </div>
//     //     <div className={styles.wrap}>
//     //       <label className={styles.el}>
//     //         Number
//     //         <input
//     //           className={styles.input}
//     //           value={number}
//     //           onChange={handleChange}
//     //           type="tel"
//     //           name="number"
//     //           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//     //           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//     //           required
//     //         />
//     //       </label>
//     //     </div>
//     //     <div>
//     //       <button className={styles.btn} type="submit">Add contact</button>
//     //     </div>
//     //   </form>
//     // );
//   // }
// }
