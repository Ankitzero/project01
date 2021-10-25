import { useEffect, useState } from "react";

function App() {
  const [dogsImage, setDogsImages] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    if (dogsImage.length < 3) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => {
          return res.json();
        })
        .then(res => {
          setDogsImages([...dogsImage, res.message]);
        })
        .catch(err => {
          console.log("Some Error");
        })
    } else {
      setIsloading(true);
    }
  }, [dogsImage])

  return (
    <div className="app">
      { !isLoading && <h1 className="error">Loading ...</h1> }
      { isLoading &&
        dogsImage.map((dog, index) => {
          return (
            <>
              <div className="dogDiv" style={
                {
                  width: "20%",
                  padding: "10px",
                  border: "2px solid",
                  borderRadius: "9%",
                  marginLeft: `calc(20%*${index+1})`
                }
              } key={index}>
                <img style={{ maxWidth: "100%" }} src={dog} alt={dog} />
              </div>
              <div className="dogDiv2" key={index}>
                <img 
                style={{ 
                  maxWidth: "100%", 
                  borderRadius: "5px", 
                  border: "2px solid", 
                  padding: "2%" 
                }} 
                  src={dog} alt={dog} 
                />
              </div>
            </>
          )
        })
      }
    </div>
  );
}

export default App;
