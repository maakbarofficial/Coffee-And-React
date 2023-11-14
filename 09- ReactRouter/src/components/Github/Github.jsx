import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/maakbarofficial")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="flex flex-col items-center justify-between text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <img src={data.avatar_url} alt="avatar" />
      <p> Github Name: {data.name}</p>
      <p> Github Followers: {data.followers}</p>
      <p> Github Creation Date: {data.created_at}</p>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/maakbarofficial");
  return response.json();
};
