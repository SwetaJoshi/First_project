const Pet = props => {     //  Destructering ({name,animal,breed})=>
//         return React.createElement("div",{},[
//         React.createElement("h1",{},props.name),   //name
//         React.createElement("h2",{},props.animal), //animal
//         React.createElement("h3",{},props.breed)   //breed
//       ]);
//     };
//     const App = () => {
//       return React.createElement(
//         "div",
//         {id:"something-important"},
//         [ 
//           React.createElement("h1", {}, "Adopt Me!"),
//           React.createElement(Pet,{name:"Denny",animal:"Dog",breed:"Havanese"}),
//           React.createElement(Pet,{name:"Chutki",animal:"Dog",breed:"Beagle"}),
//           React.createElement(Pet,{name:"Pepper",animal:"Bird",breed:"Cockatiel"})
//        ]);
         return (
         <div>
          <h1 id="something_important">Adopt Me!</h1>
          <Pet name="Denny" animal="Dog" breed="Havanese"/>
          <Pet name="Chutki" animal="Dog" breed="Beagle"/>
          <Pet name="Pepper" animal="Bird" breed="Cockatiel"/>    
         </div>  
         ) ;   
};
      
      render(<App/>, document.getElementById("root"));