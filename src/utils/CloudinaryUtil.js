import APIManager from './APIManager'
import sha1 from 'sha1'

export default {
	upload: (files) => {

    const image = files[0]

    const cloudName = process.env.CLOUDINARY_CLOUDNAME
    const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET
    const apiKey = process.env.CLOUDINARY_API_KEY
    const apiSecret = process.env.CLOUDINARY_API_SECRET

		const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'

		const timestamp = Date.now()/1000

		const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+apiSecret

		const signature = sha1(paramsStr)
		const params = {
			'api_key': apiKey,
			'timestamp': timestamp,
			'upload_preset': uploadPreset,
			'signature': signature
		}
		
    return APIManager.uploadFile(url, image, params)
	}
}