import React, { useState, useEffect, ReactElement } from 'react';
import axios, { AxiosResponse } from 'axios';
import Menü from './Menü';
import TankstelleListItem from './TankstelleListItem'
import { Tankstelle, TankstellenPayLoad } from '../types/Tankstelle'

interface Props {
  showDetails: (tankstelle: Tankstelle) => void
}




export default function TankstelleList(props: Props): ReactElement {
  const [tankstellen, setTankstellen] = useState<TankstellenPayLoad>()

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://creativecommons.tankerkoenig.de/json/list.php?lat=52.506&lng=13.144&rad=5&sort=dist&type=all&apikey=1c3662a5-43f9-f993-774b-4453a27db925'
    })
      .then((response: AxiosResponse<TankstellenPayLoad>) => setTankstellen(response.data))
  }, [])

  if (!tankstellen) { return <p>Lade</p> }

  return (
    <div className="ui middle aligned selection divided list">
      {tankstellen.stations.map(tankstelle => <TankstelleListItem showDetails={props.showDetails} tankstelle={tankstelle} key={tankstelle.id} />)}
    </div>
  )
}
