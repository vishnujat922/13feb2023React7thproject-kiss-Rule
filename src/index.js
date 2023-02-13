//Import Area 
import React from 'react';
import ReactDOM from 'react-dom/client';

//You Can define a React Component using 2 technique
//1 Functional Component
function A(Props) {// We will Recive Formal Argument
  let name = "Virendra";//Data is Available withing Component
  let surname2 = "Thorecha";
  //Every Function should  return Something
  return (
    <>
      <div> A {name} {Props.surname}- <B surname={surname2} /></div>
    </>
  )
}
//2 Class Compnent
//class Child extends Parents{}
class B extends React.Component {
  //properties/Variable
  name = 'Pushpendra';


  //Constructor

  //Methods
  render() {
    //Every Function/methods should  Return Something
    //Inorder to Access Any MemberOf A class You have to use this.member
    //this.member
    return <span>B -{this.name} {this.props.surname} <C>Choudhary</C></span>
  }

}

//ES6 2015 Fat Arrow Function
let C = (props) => {
  let name = "Vishnu";
  let para = "The WPL Auction 2023 saw Delhi Capitals break the bank for Shafali Verma and Jemimah Rodrigues. The franchise won intense bidding wars, to acquire both India stars."
  console.log(props.children);
  return (<>
    <span>C - {name} {props.children}</span>
    <D para={para} />
  </>)
}
function D(props) {//we will Receive Formal Argument 
  let heading = "Shafali and Jemimah spark intense bidding war as Delhi Capitals come out on top with mega bids at WPL Auction 2023";//Data is Availablewithing Component
  let image = "https://www.hindustantimes.com/ht-img/img/2023/02/13/550x309/FILES-CRICKET-WOMEN-T20-WC-0_1676285229754_1676285229754_1676285246183_1676285246183.jpg";
  return (<>
    <h1>D {heading}</h1>
    <img src = {image}/>
    <p>{props.para}</p>
    <E para={props.para} />
  </>)
}
// class Component
//class Child extends Parents{}
class E extends React.Component {
  para = "Speaking in the state assembly, Mamata Banerjee said the country should strive to bring in a “people's government to end anarchy”.";
  image = "https://www.hindustantimes.com/ht-img/img/2023/02/13/550x309/PTI02-01-2023-000329B-0_1676283060021_1676283060021_1676283078850_1676283078850.jpg";
  // Properties/Variable 
  heading = "Ruckus in Bengal assembly after Suvendu's speech; Mamata Banerjee slams BJP";

  //Constructor

  //Methods
  render() {
    //Every function/Method should Return Something
    // Inorder to Access Any Member of A class You have to use this.member
    //this.member
    return (
      <>
        <h1>E-{this.heading}</h1>
        <img src={this.image} />
        <p>E-{this.para}</p>
        <F>Retail inflation figures: The inflation rate based on the Consumer Price Index (CPI) stood at 5.72 per cent December and 6.01 per cent in January 2022.</F>
      </>
    )
  }
}
let F = (props) => {
  let heading = "Retail inflation climbs to 3-month high of 6.52% in January";
  let image = "https://www.hindustantimes.com/ht-img/img/2023/02/13/550x309/rupee_vs_dollar_1675660052337_1676259312646_1676290110210_1676290110210.jpg";
  console.log(props.children);
  //Every Function Should Return Something
  return (
    <>
      <h1>c-{heading}</h1>
      <img src={image}/>
      <p>{props.children}</p>
      <G  />
    </>
  )
}
function G(props){//we will receiveFormal Argument
  let heading = "JeM terrorist arrested in Pulwama, 25 hand grenades recovered: Police";//Data is Available withing Component
  let Image ="https://www.hindustantimes.com/ht-img/img/2023/02/13/550x309/The-arrested-person-was-planning-to-target-police-_1676291251082.jpg";
  let para =  "Acting on a tip off regarding delivery of consignment in Pulwama, a team was of police and army (55RR) was formed to nab the accused";
  //Every Function Should return Something
  return (
    <>
      <h1>G {heading}</h1>;
      <img src={Image} alt=""/>
      <p>{para} -</p>
    </>
  )
}
//2 class component
//class Child extends Parent{};
const root = ReactDOM.createRoot(document.getElementById('root'));
let sn = "JAAT";
root.render(<A surname={sn} />);
//Export Area