import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { Tankstelle } from '../types/Tankstelle'

interface Props {
  tankstelle: Tankstelle
  showList: () => void
}

export default function TankstelleDetails(props: Props): ReactElement {
  const [tankstelle, setTankstelle] = useState<Tankstelle>()

  return (
    <>
      <div className="header">Name: {props.tankstelle.name}</div>
      <div className="description">Marke: {props.tankstelle.brand}</div>
      <div className="metadata">Strasse: {props.tankstelle.street} {props.tankstelle.houseNumber}</div>
      <div className="metadata">id: {props.tankstelle.id}</div>
      <br />
      <div className="metadata">DIESEL: {props.tankstelle.diesel}€</div>
      <div className="metadata">SUPER: {props.tankstelle.e5}€</div>
      <div className="metadata">E10: {props.tankstelle.e10}€</div>

      <button onClick={props.showList} className="ui button">Back</button>
    </>
  )
}
