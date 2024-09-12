import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Info.css';
export default function ({Infor}){
    const INIT_URL ="https://images.unsplash.com/photo-1722858344552-7acf888a7046?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const HOT_URL="https://images.unsplash.com/photo-1546274527-9327167dc1f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const COLD_URL="https://images.unsplash.com/photo-1706819657428-c16db9e26ef2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const RAIN_URL="https://images.unsplash.com/photo-1641048350693-4710a172e3cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="infoBox">
          
            <div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Infor.humidity >80 ? RAIN_URL:Infor.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
      {/* <Typography gutterBottom variant="h5" component="div">
        
        </Typography> */}
        <Typography variant="body2"  color ='text.secondary'  component={"span"}>
            <div>
         <p>{Infor.city}</p>
         <p>Temperature ={Infor.temp}&deg;C</p>
         <p>Humidity={Infor.humidity}</p>
         <p>Min Temp={Infor.tempMin}</p>
         <p>Max Temp ={Infor.tempMax}</p>
         <p> The Weather can be described as {Infor.weather} and Feels like {Infor.feelslike}&deg;C</p>
         </div>

        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </div>
        </div>
    )
}