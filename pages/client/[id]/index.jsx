import { useRouter } from "next/router"
import useSWR from 'swr'
const fetcher = (...arg) => fetch(...arg).then(r => r.json())

const index = () => {
    const router = useRouter()
    const id = router.query.id;
    const { data, error,isLoading } = useSWR(`https://dummyjson.com/users/${id}`, fetcher);
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
  return (
    <div>
        <h2>{data?.firstName}</h2>
        <h3>{data?.email}</h3>
    </div>
  )
}

export default index

