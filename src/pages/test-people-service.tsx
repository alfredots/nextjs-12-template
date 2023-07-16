import { useRequest } from '@hooks/useRequest'
import { peopleService } from 'services/PeopleService'
import { GetAllResponse } from 'services/PeopleService/types'

const useTestPeopleService = () => {
  const { data, isLoading } = useRequest<GetAllResponse>(peopleService.getAll)
  const peoples = data?.results

  return {
    peoples,
    isLoading
  }
}

export default function TestPeopleService() {
  const { peoples, isLoading } = useTestPeopleService()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      {peoples?.map((people) => (
        <p key={people.cell}>{people.name.first}</p>
      ))}
    </div>
  )
}
