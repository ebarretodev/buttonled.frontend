import React, { useEffect, useState } from 'react'
import { onValue, ref, set } from 'firebase/database';
import { db } from '../utils/firebase';

const Led = (props) => {
    const { name } = props
    const [ledStatus, setLedStatus] = useState(false)

    useEffect(() => {
        const starCountRef = ref(db, `esp8266/${name}`);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data.Status)
            setLedStatus(data.Status)
        });
    }, [])

    const trocaLed = () => {
        set(ref(db, `esp8266/${name}`), {
            Status: !ledStatus,
        }).then(() => {
            console.log('Ok')
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <a onClick={trocaLed}>
            <div className='circle' style={{ backgroundColor: ledStatus ? "blue" : "#282c34" }}></div>
            <button onClick={trocaLed}>{!ledStatus ? "Liga" : "Desliga"} {name}</button>
        </a>
    )
}

export default Led