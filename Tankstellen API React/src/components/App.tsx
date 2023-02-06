import React, { ReactElement, useState } from 'react';

import TankstelleList from './TankstelleList'
import TankstelleDetails from './TankstelleDetails'
import { Tankstelle } from '../types/Tankstelle'




type ViewState = 'list' | 'details'

export default function App(): ReactElement {
  const [viewState, setViewState] = useState<ViewState>('list');
  const [tankstelle, setTankstelle] = useState<Tankstelle>();

  const showList = () => {
    setViewState('list')
    setTankstelle(undefined)
  };

  const showDetails = (tankstelle: Tankstelle) => {
    setTankstelle(tankstelle)
    setViewState('details')
  };

  return (
    <div className="ui container">
      {
        viewState === 'details' && tankstelle
          ? <TankstelleDetails showList={showList} tankstelle={tankstelle} />
          : <TankstelleList showDetails={showDetails} />
      }
    </div>
  )
}
