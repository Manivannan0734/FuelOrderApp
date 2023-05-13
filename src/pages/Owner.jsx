import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/backend.module.css';

const Owner = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://mpar-bccba-default-rtdb.asia-southeast1.firebasedatabase.app/order.json')
      .then(res => {
        const newArr = Object.keys(res.data).map(el => {
          return res.data[el];
        });
        setData(newArr);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      {data.map(el => {
        return (
          <div className={styles.card} key={el.name}>
            <h2>{el.name}</h2>
            <p>{el.mobile}</p>
            <p>{el.service}</p>
            <p>{el.location}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Owner;
