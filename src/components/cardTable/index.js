import React from 'react'

function CardTable({data}) {
   console.log(data);

   const temp = [];

   data.forEach(element => {
       temp.push(...element.map(item => item))
   });
  //console.log(temp);

 const list= temp.reduce((group, product) => {
    const { year } = product;
    group[year] = group[year] ?? [];
    group[year].push(product);
    return group;
  }, {});



console.log(list)
  return (
    <div className="Card">{
        
        list.length>0 && list?.map((item, index) => {
         return (
           <div key={index}>
            <div>{JSON.stringify(item)}</div>
             <ul >{item}</ul>
            {
             item.map((subitem, i) => {
               return (
                  <ul ><li>{subitem.value}</li></ul>
               )
             })
            }
           </div>
         )
       })
       }
       

</div>
  )
}

export default CardTable;