
import Card from '../../components/card/Card'
import Filter from '../../components/filter/Filter'
import Map from '../../components/map/Map'
import { listData } from '../../lib/DummyData'
import './listpage.scss'
import React from 'react'

const ListPage = () => {

  const data = listData
  return (
    <div className='ListPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter></Filter>
          {data.map(item =>(
            <Card key={item.id} item={item}></Card>
          ))}
          {data.map(item =>(
            <Card key={item.id} item={item}></Card>
          ))}
          {data.map(item =>(
            <Card key={item.id} item={item}></Card>
          ))}
          {data.map(item =>(
            <Card key={item.id} item={item}></Card>
          ))}
          {data.map(item =>(
            <Card key={item.id} item={item}></Card>
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  )
}

export default ListPage
