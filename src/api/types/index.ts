export interface ResultData<T> {
  code: string
  msg: string
  data: T
  [key: string]: any
}

export interface IUpload {
  name: string
  origin: string
  url: string
}

export type IUploadResult = ResultData<IUpload>

export namespace Login {
  export interface reqForm {
    username: string
    password: string
  }

  export interface resType {
    token: string
    userInfo: object
  }

  export interface authButtons {
    [key: string]: string[]
  }
}
