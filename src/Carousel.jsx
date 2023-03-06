import { Component } from "react"


 class Carousel extends Component{
    state={
        active:0
    }

    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
      };

    handleIndexClick=(event)=>
    {
        this.setState({
            active:event.target.dataset.index,
          });
    }

    
  render(){
    const { active } = this.state;
    const {images} = this.props
    return(
        <div className="carousel">
            <img src={images[this.state.active]} alt="animal" />
            <div className="carousel-smaller">
               { images.map((photo,index)=> (
                        // eslint-disable-next-line
                        <img src={photo}
                             key="photo" 
                             className={index === active ? "active" : ""}
                             onClick={this.handleIndexClick}
                             alt="animal"
                             data-index={index} />
                      )
                  )
               } 
            </div>
        </div>
       
        
    )
  }  
}
 

 export default Carousel;