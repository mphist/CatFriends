import { google } from 'googleapis'

export default async function getGoogleProfile(access_token: string) {
  const people = google.people('v1')

  try {
    const { data } = await people.people.get({
      access_token,
      resourceName: 'people/me',
      personFields: 'emailAddresses,names,photos',
    })

    console.log(data)
    // return { socialId, email, photo, displayname }
  } catch (e) {
    console.log(e)
  }
}
