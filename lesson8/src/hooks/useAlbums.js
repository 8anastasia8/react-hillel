import {getAlbumsList} from '../services/albumsServices'
import {useEffect, useState} from "react";

export default function useAlbums() {
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        getAlbumsList()
            .then((data) => setAlbums(data))
            .catch((err) => setError(err))
    }, []);

    return {
        albums,
        error
    };
}