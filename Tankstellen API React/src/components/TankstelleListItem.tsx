import React, { ReactElement } from 'react'
import Menü from './Menü'
import { Tankstelle } from '../types/Tankstelle'

interface Props {
  tankstelle: Tankstelle
  showDetails: (tankstelle: Tankstelle) => void
}

export default function TankstelleListItem(props: Props): ReactElement {
  const tankstelle = props.tankstelle

  return (
    <div onClick={() => props.showDetails(tankstelle)} key={tankstelle.id} className="item">

      <div className="content">
        <div className="header">{tankstelle.name}</div>
        <div className="description">{tankstelle.brand}</div>
        <div className="metadata">id: {tankstelle.id}</div>

        <div className="metadata">DIESEL: {tankstelle.diesel}</div>



      </div>
    </div>
  )
}
