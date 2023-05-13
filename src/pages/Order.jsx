import { useState, useEffect } from 'react';
import styles from '../styles/order.module.css'
import axios from 'axios';

// const useFirebase = () => {
//   const [db, setDb] = useState(null);

//   useEffect(() => {
//     const firebaseConfig = {
//       // your Firebase configuration
//     };
//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     }
//     setDb(firebase.firestore());
//   }, []);

//   return db;
// };

const Order = () => {
  // const db = useFirebase();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
        },
        () => {
          alert('Unable to retrieve your location');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser');
    }
  };

  const handleSubmit = (e) => {
    
    const form = {
      name,
      mobile,
      location,
      service
    };
    axios.post('https://mpar-bccba-default-rtdb.asia-southeast1.firebasedatabase.app/order.json',form).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
    alert("sucessfully order please wait sometime")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.ordercontainer}>
        <h1>Place your order</h1>
        <div className={styles.formgroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="tel" id="mobile" name="mobile" value={mobile} onChange={handleMobileChange} />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="service">Specify your Need</label>
          <input type="text" id="service"  name="service" value={service} onChange={(e) => setService(e.target.value)} /> 
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="location">Location:</label>
          <div className={styles.locationinput}>
            <input type="text" id="location" name="location" value={location} readOnly />
            <button type="button" onClick={handleLocationClick}>Get Current Location</button>
          </div>
        </div>
        <button className={styles.btn} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Order;
