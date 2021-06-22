import React from 'react';
import AddFish  from './AddFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <AddFish addFish = {this.props.addFish} loadSampleFishes = {this.props.loadSampleFishes}/>
            </div>
        );
    }
}

export default Inventory;