const hotelsUrl ='https://b4a5h2zj2e.execute-api.us-east-1.amazonaws.com/prod/'

export const config = {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_fvuyWUbyj',
    APP_CLIENT_ID: '51ibe3hiaptin43qipbcoopvde',
    IDENTITY_POOL_ID: 'us-east-1:ed9150ad-f37e-4ad3-a323-f52223c9f0a0',
    TEST_USER_NAME: 'john',
    TEST_USER_PASSWORD: 'askjskfT7sdf&',
    HOTELS_PHOTOS_BUCKET: 'hotels-photos-1271daa35237',
    api: {
        baseUrl: hotelsUrl,
        hotelsUrl: `${hotelsUrl}hotels`
    }
} 