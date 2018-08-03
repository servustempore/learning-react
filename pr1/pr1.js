function Boi(props) {
    return (
      <div className="boi">
        <h1>{props.boi_name} is lit</h1>
        <p>As {props.boi_what}</p>
      </div>
    );
  }
  
  var app = (
    <div>
      <Boi boi_name="Peter" boi_what="Günther"/>
      <Boi boi_name="Günther" boi_what="Peter"/>
    </div>
  );
  
  ReactDOM.render(app, document.querySelector('#app'));
  