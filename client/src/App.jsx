//import { useEffect, useState} from 'react'
//import BotonMeGusta from "./componentes/BotonMeGusta"

function App() {
  
  //const [data, setData]= useState (null);

  /*useEffect(() => {
    fetch("https://localhost:7224/WeatherForecast")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])*/


  return (
      <div className="grid grid-cols-12 gap-4 auto-cols-max scroll-mx-15">
      <div className="banner col-span-12 justify-center ">
              <h1>League Of Legends en una cascara de nuéz</h1>
      </div>
          
        <div className="child-container justify-start col-span-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla asperiores doloremque alias corporis voluptates. Omnis accusamus totam quaerat tempore quo aperiam quis aspernatur possimus voluptas, voluptates veritatis, earum provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas hic doloremque debitis exercitationem nesciunt sint reprehenderit ratione, modi saepe alias excepturi? Quisquam error accusamus corrupti voluptatem saepe! Saepe, aliquid quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum provident delectus expedita, laudantium autem odio ea nobis repudiandae ut quisquam obcaecati adipisci necessitatibus aliquid fugit nemo veniam tenetur doloremque deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloribus quas iure magni nesciunt maxime. Adipisci quae provident mollitia dicta! Similique obcaecati ab neque itaque exercitationem voluptatibus voluptate quam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates beatae vel porro, alias nulla accusamus voluptas! Possimus tempora expedita maxime reprehenderit natus? Et officiis, temporibus quas quaerat rerum odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis in, neque accusamus voluptas deserunt reprehenderit tempora voluptatem? Quod et debitis quos aliquam labore neque quidem ipsa suscipit similique voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse temporibus dicta fugiat praesentium ab, et sint id quod laborum vel commodi reiciendis molestias nihil alias excepturi voluptate ipsam error doloribus.
        </div>

        <div className=" col-span-8 grid grid-cols-1"> 
                <div className="champion-card">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dignissimos amet exercitationem odit autem, tempore consequuntur quas rerum corporis molestias, eveniet illo mollitia facilis? Blanditiis non in ut nostrum voluptate?
                </div> 
                <div className="champion-card"> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eligendi odio eos illum! Est exercitationem, excepturi velit voluptatem error dolores in earum. Libero accusamus, molestias quo assumenda tempore facilis voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in tempore harum natus tenetur repellendus distinctio. Minus, quam provident deleniti nam veritatis iure mollitia nostrum porro officia reprehenderit similique rem? 
                </div>
                <div className="champion-card">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet est sequi quos, obcaecati mollitia, soluta reprehenderit labore inventore corporis vero architecto animi repellendus ab amet impedit deleniti, tenetur asperiores libero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde tempore quam libero voluptates voluptas adipisci ad ut esse illo delectus repellendus officiis ipsa saepe quo aspernatur eveniet, nihil quod reiciendis!
                </div>
                <div className="champion-card">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi architecto nihil fugit magni perspiciatis deleniti, aliquam quas velit nam fugiat, rerum repudiandae dolores amet voluptate quasi repellendus ipsam quia! 
                </div>
        </div>

        <div className="child-container justify-end col-span-2 ">
            otras cosas muchas mas
        </div>

         

      </div>

            )

       
    
  }
export default App
