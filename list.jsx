import profilePic2 from "./assets/Spotify.png";
function Song(props){
    return(
<li>{props.name}</li>)
}
const song = ["Say Something","Demons","Whatever it takes"]
function List1(){
    return(
        <div>
            <img src={profilePic2} width={100} height={100}/>
            <h1>Populor Songs</h1>
         
            <ol>
                {song.map((music)=>
                    <Song name={music}/>
                )}
            </ol>

            </div>

    )
}
export default List1; 