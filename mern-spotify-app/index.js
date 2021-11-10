const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')
const friendSchema = require('./schemas/friend-schema')
const playlistSchema = require('./schemas/playlist-schema')

const connectToMongoDB = async () => {
    await mongo().then(async(mongoose)=>{
        try {
            console.log('connected to mongodb!')
//-------------------Add-------------------            
            //inserting a user into the database
            const user = {
                country: 'Austria',
                display_name: 'RickeyL',
                email: 'RickL@gmail.com',
                spotify_uri: 'https://open.spotify.com/user/RickeyL',
                link: 'https://api.spotify.com/v1/users/RickeyL',
                ID: 'RickeyL',
                password: 'Password123!',
                profile_image: '',
                product: 'standard',
                type: 'user',
                access_token: 'BQALf6K1mx2SYpCHNG_Dgn88W4N7uuSVbLPPIreB_k_Csy5eLkiS3lsjkdZ-I',
                refresh_token: 'AQDUOpGblJLcZRtIzNiEiGOeX6yGEhnOmgvAGDS5_QIVdbtsnydDTjstfosn3',
                top_music: ['song1', 'song2', 'song3'],
                top_artists: ['artist1', 'artist2', 'artist3'],
            }
            await new userSchema(user).save()

            //inserting a friend to the database
            const friend = {
                country: 'Bulgaria',
                display_name: 'TodH',
                email: 'TodH@gmail.com',
                spotify_uri: 'https://open.spotify.com/user/TodH',
                link: 'https://api.spotify.com/v1/users/TodH',
                ID: 'TodH',
                profile_image: '',
                product: 'premium',
                type: 'user',
                access_token: 'BQALf6K1mx2SYpCHNG_Dgn88W4N7uuSVbLPPIreB_k_Csy5eLksythsjkdZ-I',
                refresh_token: 'AQDUOpGblJLcZahftiEiGOeX6yGEhnOmgvAGDS5_QIVdbtsnydDTjstfosn3',
                top_music: ['song1', 'song2', 'song3'],
                top_artists: ['artist1', 'artist2', 'artist3'],
            }
            await new friendSchema(friend).save()

            //inserting a playlist to the database
            const playlist = {
                user: 'RickL',
                friend: 'TodH',
                type: 'playlist',
                songs: ['song1', 'song2', 'song3', 'song4', 'song5', 'song6'],
            }
            await new playlistSchema(playlist).save()
            

//-------------------Search-------------------
            //searching for a user in the database (can search by many different things by typing 'find' and looking at options)
            /*const result = await userSchema.findOne({
                username: 'RickeyL',
            })
            console.log("Result:", result)
            */
           
        }finally {
            mongoose.connection.close()
        }
    })
}

connectToMongoDB()