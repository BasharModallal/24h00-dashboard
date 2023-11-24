export interface AuthModel {
    api_token: string
    refreshToken?: string
  }
  
  export interface UserModel {
    id: number
    username: string
    password: string | undefined
    email: string
    first_name: string
    last_name: string
    blacklisted?: boolean
    fullname?: string
    occupation?: string
    companyName?: string
    phone?: string
    roles?: Array<number>
    pic?: string
    language?: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru'
    timeZone?: string
    website?: 'https://keenthemes.com'
    emailSettings?: UserEmailSettingsModel
    auth?: AuthModel
    communication?: UserCommunicationModel
    address?: UserAddressModel
    socialNetworks?: UserSocialNetworksModel
  }
  