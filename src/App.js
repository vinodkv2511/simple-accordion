import React from 'react';
import Accordion from './components/accordion/accordion'
import './App.css';

const data = [
  {
    icon: "filter_drama",
    header: "First",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    icon: "place",
    header: "Second",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    icon: "whatshot",
    header: "Third",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    icon: "filter_drama",
    header: "Fourth",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
]

function App() {
  return (
    <div className="App">
        <div>
          <h2>Simple Accordion</h2>
          <Accordion data={data} contentHeight={"268px"} style={{width:"400px"}}/>
        </div>
        <div>
          <h2>Muti Item Accordion</h2>
          <Accordion data={data} contentHeight={"268px"} allowMultiple style={{width:"400px"}}/>
        </div>
        <div>
          <h2>Accordion With An Item Open By Default</h2>
          <Accordion data={data} contentHeight={"268px"} allowMultiple defaultOpenIndex={1} style={{width:"400px"}}/>
        </div>
    </div>
  );
}

export default App;
