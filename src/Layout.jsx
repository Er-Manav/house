import React, {useState,useEffect} from 'react'
import './Layout.css'



function Layout() {
  
  var [m,n] = [6, 5]; 
  var matrix = Array(m).fill().map(()=>Array(n).fill(0));
  matrix[0][0] = "House1";
  matrix[0][2] = "Restaurant";
  matrix[2][0] = "Hospital";
  matrix[2][1] = "Gym";
  matrix[3][4] = "House2";
  const arrHouse = [[0,0],[3,4]];
for r,c in arrHouse.iterate() {
  console.log(r,c)
}
  for(let i=arrHouse[];i<matrix.length i++) {
    for(let j=0; j<matrix[i].length; j++){

      
    }
  }
  const logicFunction = () => {

  }

  const handleClick = (r,c,e) => {
    console.log(r,c,"ddwsf")
    return (<div className={`cell resultCell cell_${r}${c}`}>{e.target.value}</div>)
    
  }
  
  return (
    <>
    <div className="layout">
    
    {
      matrix.map((item,index) => {
        return(
          <div className={`row row_${index}`} >
            {
              item.map((subItem,sIndex) => {
                return <div className={`cell cell_${index}${sIndex}`}>{subItem}</div>
              })
            }
          </div>
          
        )
      })
    }
    </div>



<div className="submit">
<button className="result" onClick={handleClick}>
  house
</button>
</div>


</>


  )

}
export default Layout;