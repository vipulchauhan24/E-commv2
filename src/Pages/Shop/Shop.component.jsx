import React, { Component } from 'react'
import PreviewCollectionComponent from '../../Components/Preview-collection/Preview-collection.component';
import SHOP_DATA from '../../shop.data';
export default class ShopComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            collection : SHOP_DATA
        }
    }
  render() {
      const {collection} = this.state
    return (
      <div className='shop-page'>
          {
              collection.map(({id, ...collectionProps})=>{
                return <PreviewCollectionComponent key={id} {...collectionProps} />
              })
          }
      </div>
    )
  }
}
