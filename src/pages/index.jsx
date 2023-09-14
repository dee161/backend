// import { data  } from "autoprefixer";
import { useEffect, useState } from "react";
export function index() {
  const [hello, setHello] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addU = async () => {
    try {
      let response = await fetch("http://localhost:4001/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, title }),
      });
      response = await response.json();
      console.log(response);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetch("http://localhost:4001/user")
      .then((response) => response.json())
      .then((data) => {
        setHello(data);
      });
  }, []);
  console.log(hello);

  return (
    <div>
      {/* <h1>{hello}</h1> */}
      <div>
        {hello?.map((user, index) => (
          <div key={user.id}>
            <ul>
              <li>{user.title}</li>
              <li>{user.content}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="">
        <h1>Add user</h1>
        <input
          type="text"
          value={title}
          placeholder="Enter title"
          onChange={(d) => setTitle(d.target.value)}
        />
        <input
          type="text"
          value={content}
          placeholder="Enter content"
          onChange={(d) => setContent(d.target.value)}
        />
        <button onClick={addU}>Add User click here</button>
      </div>
    </div>
  );
}
export default index;

// export default index;
// import { useEffect, useState } from "react";

// function Index() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4001/user")
//       .then((response) => response.json())
//       .then((responseData) => {
//         console.log(responseData);
//         setData(responseData.data);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Deee</h1>
//       <ul>
//         {data.map((user) => (
//           <li key={user.id}></li>
//         ))}
//       </ul>
//     </div>
//   );
// }
