import { Hotel } from "../model/model";
import { ICreateHotelState} from '../components/hotels/CreateHotel';
import { S3, config } from 'aws-sdk';
import { config as appConfig} from './config'
import { generateRandomId } from '../utils/Utils';

config.update({
    region: appConfig.REGION
})


export class DataService {

    private s3Client = new S3({
    region: appConfig.REGION
});

    public async createHotel(iCreateHotel: ICreateHotelState){
        if (iCreateHotel.photo) {
            const photoUrl = await this.uploadPublicFile(
                iCreateHotel.photo,
                appConfig.HOTELS_PHOTOS_BUCKET
            )
            iCreateHotel.photoURL = photoUrl;
            iCreateHotel.photo = undefined
        }
        const requestUrl = appConfig.api.hotelsUrl;
        const requestOptions: RequestInit = {
            method: 'POST',
            body: JSON.stringify(iCreateHotel)
        }
        const result = await fetch(requestUrl, requestOptions);
        const resultJSON = await result.json();

        return JSON.stringify(resultJSON.id);
    }

    private async uploadPublicFile(file: File, bucket: string){
        const fileName = generateRandomId() +  file.name;
        const uploadResult = await new S3({region: appConfig.REGION}).upload({
            Bucket: bucket,
            Key: fileName,
            Body: file,
            ACL: 'public-read'
        }).promise();
        return uploadResult.Location
    }

    public async getHotels(): Promise<Hotel[]> {
        const requestUrl = appConfig.api.hotelsUrl;
        const requestResult = await fetch(
            requestUrl, {
                method: 'GET'
            }
        );
        const responseJSON = await requestResult.json();
        return responseJSON;
    }

public async reserveHotels(hotelId: string):Promise<string | undefined> {
    if (hotelId === '123') {
        return('5555')
    } else {
        return undefined
    }
}
}

