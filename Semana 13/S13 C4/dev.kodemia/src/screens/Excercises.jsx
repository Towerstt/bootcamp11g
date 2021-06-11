import React from 'react'
import BusDeDatos from '../components/Excercises/BusDeDatos'
import BusDeDatos2 from '../components/Excercises/BusDeDatos2'
import Converter from '../components/Excercises/Converter'
import CreditCard from '../components/Excercises/CreditCard'

export default function Excercises () {

    return(
        <React.Fragment>
            <Converter />
            <CreditCard />
            <br /><br /><br />
            <BusDeDatos />
            <br /><br /><br />
            <BusDeDatos2 />
        </React.Fragment>
    )
}