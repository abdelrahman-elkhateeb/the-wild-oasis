export default async function Cabins() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);

  return <div>
    <h1>cabins page</h1>
    <ul>
      {data.map(user => <li key={user.id}>
        {user.name}
      </li>)}
    </ul>
  </div>
};
