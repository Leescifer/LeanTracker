interface User {
  name: string;
  age: number;
  gender: string;
  isLegalAge: boolean;
}

function App() {
  const user: User = {
    name: "Leester",
    age: 32,
    gender: "Male",
    isLegalAge: true,
  };

  return (
    <section className="text-3xl text-center font-bold underline">
      <div key={user.name}>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender}</p>
        <p>Is legal age: {user.isLegalAge ? "Yes" : "No"}</p>
      </div>
    </section>
  );
}

export default App;
