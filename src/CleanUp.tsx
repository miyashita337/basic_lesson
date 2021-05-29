//rafce利用

// import { ConsoleWriter } from 'istanbul-lib-report';
import React, {useState, useEffect} from 'react'

const CleanUp: React.FC = () => {
    const [currentNum, setCurrentNum] = useState(0);
    const incrementNum = () => {   
        console.log("MouseEvent iinvoked");
        setCurrentNum((preNumber) => preNumber + 1);
    };

    useEffect(()=>{
        console.log("useEffect in clueanup involkld");
        window.addEventListener("mousedown",incrementNum);
    //returnにクリーンアップ変数を設定(unmount)
    return () =>{ 
        console.log("cleanup invoke");
        window.removeEventListener("mousedown",incrementNum);
      }
  
    },[])
    return (
        <div>
            {currentNum}
        </div>
    )
}

export default CleanUp
