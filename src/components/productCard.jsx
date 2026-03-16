export default function ProductCard(props){

    console.log(props.name)   
    
    return(
        <div className="">
            <h1 className="" >{props.name}</h1>
            <img src={props.image} alt={"picture of a "+props.name} />
            <p>LKR {props.price}/-</p>
            <button>Add to Cart</button>
        </div>
    )
}