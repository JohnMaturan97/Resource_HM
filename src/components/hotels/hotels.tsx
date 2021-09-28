import { Component } from 'react';
import { Hotel } from '../../model/model';
import { DataService } from '../../services/DataService';
import { HotelComponent } from './HotelComponent';
import { ConfromModalComponent } from './ConfirmModalComponent';
import { Link } from "react-router-dom";
interface HotelsState {
    hotels: Hotel[],
    showModal: boolean,
    modalContent: string
}

interface HotelsProps {
    dataService: DataService,
}

export class Hotels extends Component<HotelsProps, HotelsState> {

    constructor(props: HotelsProps) {
        super(props)
        this.state = {
            hotels: [],
            showModal: false,
            modalContent: ''

        }
        this.reserveHotel = this.reserveHotel.bind(this);
        this.closeModal = this.closeModal.bind(this)
    }

    async componentDidMount() {
        const hotels = await this.props.dataService.getHotels();
        this.setState({
            hotels: hotels
        });
    }

    private async reserveHotel(hotelId: string) {
        const reservationResult = await this.props.dataService.reserveHotels(hotelId)
        if (reservationResult) {
            this.setState({
                showModal: true,
                modalContent: `You reserved the hotel with id ${hotelId} and got the reservation number ${reservationResult}`
            })
        } else {
            this.setState({
                showModal: true,
                modalContent: `You can't reserve the hotel with id ${hotelId}`
            })
        }
     }

    private renderHotels() {
        const rows: any[] = []
        for (const hotel of this.state.hotels) {
            rows.push(
                <HotelComponent
                    location={hotel.location}
                    name={hotel.name}
                    photoURL={hotel.photoURL}
                    hotelId={hotel.hotelId}
                    reserveHotel={this.reserveHotel}
                />
            )
        }

        return rows;
    }

    private closeModal() {
        this.setState({
            showModal: false,
            modalContent: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Welcome to the Hotels page!</h2>
                <Link to='/createHotel'>Create Hotel</Link><br></br>
                {this.renderHotels()}
                <ConfromModalComponent
                    close={this.closeModal}
                    content={this.state.modalContent}
                    show={this.state.showModal} />
            </div>
        )
    }


} 