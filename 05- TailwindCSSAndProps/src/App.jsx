import "./App.css";
import Card from "./components/Card";

function App() {
  const myobject = { username: "Akbar", age: 22 };
  return (
    <>
      <div className="w-full mx-auto p-5 text-center">
        <h1 className="text-3xl font-bold underline">
          Learning Tailwind & Props!
        </h1>
        {/* <Card
          myStr="this is prop name"
          myNum={21}
          myBool={true}
          myObj={myobject}
          mySrr={[myobject, myobject]}
        /> */}
        <Card name={"This is Text From Props"} />
        <Card name={"This is Text From Props"} btnText="Visit Another One" />
      </div>
    </>
  );
}

export default App;
