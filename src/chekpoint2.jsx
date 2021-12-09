  
  import img1 from './image/images.png'
  import img2 from '../public/image2.png'
  
  function Checkpoint (){


return(

    <div>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={img1} />
        <br />
        <img src="../public/image2.png" />
      </div>
       <video width={320} height={240} controls>
         <source src="myVideo.mp4" type="video/mp4" />
       </video>
    </div>

)




  }
  export default Checkpoint