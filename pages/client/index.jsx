import Link from 'next/link';
import useSWR from 'swr'

const fetcher = (...arg) => fetch(...arg).then(r => r.json());

const index = () => {
    const { data, error } = useSWR('https://dummyjson.com/users', fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  return (
    <div>
        {data?.users.map((user,index)=>(
            <article key={index}>
                <Link href={`client/${user.id}`}>{user.firstName}</Link>
            </article>
        ))}
    </div>
  )
}

export default index