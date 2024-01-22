import "./App.css";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ background: "red", width: "30%" }}> Red </div>
        <div style={{ background: "green", width: "30%" }}> Green </div>
        <div style={{ background: "pink", width: "30%" }}> Pink </div>
      </div>
     {/* below is tailwind class plus we can't write class like in html as class is reserved word in jsx so we use className instead */}
      <div className="flex justify-center my-2 text-center">
        <div className="bg-red-500 basis-1/3 mx-1"> Red </div>
        <div className="bg-green-500 basis-1/3 mx-1"> Green </div>
        <div className="bg-pink-500 basis-1/3 mx-1"> Pink </div>
      </div>

    </>
  );
}

export default App;
