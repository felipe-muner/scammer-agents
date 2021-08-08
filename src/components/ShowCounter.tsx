import { useCount, useDispatchCount } from '../context/Counter'


export default function ShowCounter() {
  const count = useCount()
  const dispatch = useDispatchCount()

  return <p>Counter: {count}</p>
}