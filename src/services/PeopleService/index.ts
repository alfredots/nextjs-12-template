import { Endpoints } from 'services/endpoints'
import { HttpClient } from 'services/http'

import { PeopleProps, GetAllResponse } from './types'

class PeopleService extends HttpClient {
  public constructor() {
    super(Endpoints.external.randomuser)
  }

  public getAll = async () => {
    const response = await this.get<GetAllResponse>('?results=20')
    return response
  }

  public getByGender = async (
    gender: 'female' | 'male'
  ): Promise<PeopleProps[] | undefined> => {
    const response = await this.get<GetAllResponse>(`?gender=${gender}`)

    return response.data.results
  }
}

export const peopleService = new PeopleService()
