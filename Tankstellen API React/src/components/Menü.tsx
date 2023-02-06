import React, { ReactElement } from 'react'
import '../index.css';
import TankstelleListItem from './TankstelleListItem';

export default function Menü(): ReactElement {


        return (
                <>
                        <select name="gas" id="gas" className="ui dropdown">
                                <option value="Diesel">Diesel</option>
                                <option value="e10">Super E10</option>
                                <option value="e5">Super</option>
                        </select>

                        <select name="km" id="km" className="ui dropdown">
                                <option value="1">1 km</option>
                                <option value="2">2 km</option>
                                <option value="5">5 km</option>
                                <option value="10">10 km</option>
                                <option value="25">25 km</option>
                        </select>


                        <input className="ui input" type="text" placeholder="plz"></input>


                </>

        )

        
}
