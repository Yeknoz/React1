import'./Hello.css'
export default  function Hello({name="Messi",surname="Lionel",weight=999}){
    return(
        <>
            <img src="M1.png" width="300"/>
            <h1>Hello,I'm {name} {surname} {weight} </h1>
        </>
        );
}
