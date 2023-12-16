import React from "react";
import { useState } from "react";


function Home() {
  const [count, setCount] = useState(10);
  const [Show, setShow] = useState(false);
  const[name,setName] = useState("");
  console.log(name)
  return (
    <>
      {" "}
      <div className="container">
        <button
          className="btn btn-sm btn-outline-danger m-3"
          onClick={() => setCount(count - 1)}
          disabled={count <= 0}
        >
          -
        </button>
        {count}
        <button
          className="btn btn-sm btn-outline-success m-3"
          onClick={() => setCount(count + 1)}
          disabled={count >= 10}
        >
          +
        </button>
      </div>
      <div className="container">
        <h4>kavyadharshini hai how are you ? <button className= {Show?"btn btn-sm btn-outline-danger":"btn btn-sm btn-outline-success"} onClick={()=>setShow(!Show)}>{Show?"Hide":"Show"}</button></h4>
        {Show ?<p>
          at FlowParserMixin.parseExprOps
          (C:\Users\kavyadharshini\Downloads\My-React-App\hr-admin\node_modules\@babel\parser\lib\index.js:10659:23)
          at FlowParserMixin.parseMaybeConditional
          (C:\Users\kavyadharshini\Downloads\My-React-App\hr-admin\node_modules\@babel\parser\lib\index.js:10636:23)
          at FlowParserMixin.parseMaybeAssign
          (C:\Users\kavyadharshini\Downloads\My-React-App\hr-admin\node_modules\@babel\parser\lib\index.js:10597:21)
          at FlowParserMixin.parseMaybeAssign
          (C:\Users\kavyadharshini\Downloads\My-React-App\hr-admin\node_modules\@babel\parser\lib\index.js:5755:18)
          at FlowParserMixin.parseExpressionBase
          (C:\Users\kavyadharshini\Downloads\My-React-App\hr-admin\node_modules\@babel\parser\lib\index.js:10551:23)
          at
          C:\Users\kavyadharshini\Downloads\My-React-App\hr-admin\node_modules\@babel\parser\lib\index.js:10547:39
          at FlowParserMixin.allowInAnd
          (C:\Users\kavyadharshini\Downloads\My-React-App\hr-admin\node_modules\@babel\parser\lib\index.js:12279:16)
          at FlowParserMixin.parseExpression
          (C:\Users\kavyadharshini\Downloads\My-React-App\hr-admin\node_modules\@babel\parser\lib\index.js:10547:17)
          at FlowParserMixin.parseReturnStatement
          (C:\Users\kavyadharshini\Downloads\My-React-App\hr-admin\node_modules\@babel\parser\lib\index.js:13003:28)
          at FlowParserMixin.parseStatementContent
          (C:\Users\kavyadharshini\Downloads\My-React-App\hr-admin\node_modules\@babel\parser\lib\index.js:12621:21)
          at FlowParserMixin.parseStatementLike
          (C:\Users\kavyadharshini\Downloads\My-React-App\hr-admin\node_modules\@babel\parser\lib\index.js:12588:17)
          at FlowParserMixin.parseStatementLike
          (C:\Users\kavyadharshini\Downloads\My-React-App\hr-admin\node_modules\@babel\parser\lib\index.js:5088:24)
          at FlowParserMixin.parseStatementListItem
          (C:\Users\kavyadharshini\Downloads\My-React-App\hr-admin\node_modules\@babel\parser\lib\index.js:12568:17)
          at FlowParserMixin.parseBlockOrModuleBlockBody
         
        </p>:""}
        
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <label>First Name</label><br></br>
            <input onChange={(event)=>setName(event.target.value)}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
