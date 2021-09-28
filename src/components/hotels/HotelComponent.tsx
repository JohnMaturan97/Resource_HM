import { Component } from "react";
import genericImage from '../../assets/default.jpg';
import './HotelComponent.css';

interface HotelComponentProps {
    hotelId: string,
    name: string,
    location: string,
    photoURL?: string,
    reserveHotel: (hotelId: string) => void
}

export class HotelComponent extends Component<HotelComponentProps> {

    private renderImage(){
        if (this.props.photoURL) {
            return <img src={this.props.photoURL} alt=''/>
        } else {
            return <img src={genericImage} alt=''/>
        }
    }

    render(){
        return <div className="hotelComponent">
            {this.renderImage()}
            <label className="name">{this.props.name}</label><br/>
            <label className="hotelId">{this.props.hotelId}</label><br/>
            <label className="location">{this.props.location}</label><br/>
            <button onClick={()=>this.props.reserveHotel(this.props.hotelId)}>Reserve</button>
        </div>
    }

} 