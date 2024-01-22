import "./App.css";

function App() {
  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ background: "red", width: "30%" }}> Red </div>
        <div style={{ background: "green", width: "30%" }}> Green </div>
        <div style={{ background: "pink", width: "30%" }}> Pink </div>
      </div> */}
     {/* below is tailwind class plus we can't write class like in html as class is reserved word in jsx so we use className instead */}
      <div className="grid grid-cols-1 mx-2 text-center md:grid-cols-5">
        <div className="bg-red-500  mx-1 my-1 md:col-span-2"> Red </div>
        <div className="bg-green-500 mx-1 my-1 md:col-span-2"> Green </div>
        <div className="bg-pink-500 mx-1 my-1 md:col-span-1"> Pink </div>
      </div>
    
    </>
  );
}

export default App;
