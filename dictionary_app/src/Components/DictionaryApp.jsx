import Axios from"axios";
import { React, useState } from "react";




function DictionaryApp() {
    
  
    const [data, setData] = useState("");
    const [searchWord, setSearchWord] = useState("");
  
 
    function getMeaning() {
      Axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
      ).then((response) => {
        setData(response.data[0]);
      });
    }
  
    function playAudio() {
      let audio = new Audio(data.phonetics[0].audio);
      audio.play();
    }

    
  
    return (
    <div className="container"> 

      <div className="dictionaryApp">

        <div className="header">
            <h1>Dictionary App</h1>

            <p>Naučný slovník využívající free API</p>
            
            <div className="search-bar">       
                <input type="text" placeholder="Zadej hledané slovo" onChange={(e) => {setSearchWord(e.target.value);
                    }}
                />

                <i className="fa-solid fa-magnifying-glass" onClick={getMeaning}></i>

            </div>
        </div>

        {data && (
        <div className="dictionary">

            <div className="dictionary-top">
                    <h2 className="word">
                        {data.word}
                    </h2>

                    <i className="fa-solid fa-circle-play" onClick={() => {playAudio();
                        }}></i>

                    <p>{data.phonetic}</p>           
            </div>
            
            <div className="meanings">
                <div className="result">
                
                    <p className="titule">Parts of speech:</p>

                    <p className="data">{data.meanings[0].partOfSpeech}</p>

                </div>
                
                <div className="result">
                
                    <p className="titule">Definition:</p>
                   
                    <p className="data">{data.meanings[0].definitions[0].definition}</p>

                </div>

                <div className="result">
                
                    <p className="titule">Example:</p>
                
                            
                    <p className="data">{data.meanings[0].definitions[0].example}</p>

                </div>
            </div>

        </div>
                )}
      </div>
    </div>    
    );
  }
  
  export default DictionaryApp;