import React, {Component} from 'react'

class Car extends Component {
    printCar(car){
        return 'My car is a ' + car.color + ' ' + car.make
    }

    render(){
        let myCar = {color:'white', make: 'toyota'}
        return(
            <div>
                {this.printCar(myCar)}
            </div>
        )
    }
        
}

export default Car;