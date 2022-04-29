import {Link} from "react-router-dom";
import useAlbums from "../hooks/useAlbums";
import AlbumsList from "../components/Albums/AlbumsList";
import {BsArrowLeft} from "react-icons/bs";


export default function AlbumsPage(){
    const {albums} = useAlbums();
    return(
        <div className='content'>
            <h1>Albums</h1>
            <Link className='link' to={'/'}><BsArrowLeft className='icon'/>Dashboard</Link>
            <AlbumsList list={albums}/>
        </div>
    )

}