import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import axios from '../api/apiMonday';
import React from 'react';



type State = 'all' | 'open' | 'done'

type Todo = {
  id: number
  state: State
}
type Todos = ReadonlyArray<Todo>

const mfi_info = async (state: State): Promise<Todos> => {
  const response = await axios.get("/mfi_info/read1")
  return response.data
}

 const Query = (state: State) =>
  useQuery({
    queryKey: ['mfi_info', state],
    queryFn: () => fetchTodos(state),
     initialData: () => {
      const allTodos = queryClient.getQueryData<Todos>([
        'todos',
        'all',
      ])
      
      const filteredData =
        allTodos?.filter((todo) => todo.state === state) ?? []

      return filteredData.length > 0 ? filteredData : undefined
    },
  })


const App = () => {
  const { data } = useQuery({
    queryKey: ['key'],
    queryFn,
    staleTime: Infinity,
  })

  return data ? <MyForm initialData={data} /> : null
}

const MyForm = ({ initialData }) => {
  const [data, setData] = React.useState(initialData)
  console.log(data)
}
export {App,MyForm,mfi_info,Query}

