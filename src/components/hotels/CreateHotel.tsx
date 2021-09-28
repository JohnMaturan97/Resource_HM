import { Component, SyntheticEvent } from "react";
import { DataService } from "../../services/DataService";

interface CustomEvent {
    target: HTMLInputElement
}
export interface ICreateHotelState {
    name?: string,
    location?: string,
    description?: string,
    photoURL?: string,
    photo?: File
}
interface ICreateHotelProps {
    dataService: DataService
}

export class CreateHotel extends Component<ICreateHotelProps, ICreateHotelState> {

    state: ICreateHotelState = {
        name:'',
        description:'',
        location: '',
        photoURL: ''
    }

    private setName(event: CustomEvent) {
        this.setState({ name: event.target.value });
    }
    private setLocation(event: CustomEvent) {
        this.setState({ location: event.target.value });
    }
    private setDescription(event: CustomEvent) {
        this.setState({ description: event.target.value });
    }

    private setPhotoUrl(event: CustomEvent) {
        if (event.target.files && event.target.files[0]) {
            this.setState({ photo: event.target.files[0] });
        }
    }

    private async handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        const stateClone = {...this.state};
        try {
            const id = await this.props.dataService.createHotel(stateClone);  
            alert(`Created hotel with id: ${id}`);
        } catch (error) {
            alert(`Error while creating hotel: ${'Failed To be Uploaded'}`);
        }

    }

    render() {
            let photoHotel;
            if (this.state.photo) {
                const localPhotoURL = URL.createObjectURL(this.state.photo)
                photoHotel = <img alt='' src={localPhotoURL} />
            } else {
                photoHotel = <div></div>
            }
            return <form onSubmit={e => this.handleSubmit(e)}>
                <label>Name:<br />
                    <input name='hotel name' value={this.state.name} onChange={e => this.setName(e)} />
                </label><br />
                <label>Location:<br />
                    <input name='hotel location' value={this.state.location} onChange={e => this.setLocation(e)} />
                </label><br />
                <label>Description:<br />
                    <input name='hotel location' value={this.state.description} onChange={e => this.setDescription(e)} />
                </label><br />
                <label>Photo:<br />
                    <input name='photo' type='file' onChange={e => this.setPhotoUrl(e)} />
                </label><br />
                {photoHotel}<br />
                <input data-test="submit-button" type="submit" value="Create hotel" />
            </form>
    }

}  