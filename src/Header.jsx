
export function Header({newObj,info,children}){
//        console.log(props);  
//        console.log(props.name);  
//        console.log(props.passion);  
//           console.log(props);
//        console.log(props.new);
// let {newObj,info} = props;  //Destructuring the promps
// // console.log(newObj);
console.log(newObj.name);
console.log(newObj.passion);


 return (

        <div>        
 <h1>This is Our Footer Section {info}  </h1>
 {children}

        </div>

        
 )
       
}


export function SubHeader(){

        return(
        <h2>This is the Sub Header</h2>
        )
}

