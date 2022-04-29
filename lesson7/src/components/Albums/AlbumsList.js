import AlbumsListItem from "./AlbumsListItem";

export default function AlbumsList({list}) {
    return (
        <div>
            {list.map((album) => (
                    <AlbumsListItem
                        key={album.id}
                        list={album}
                    />
                )
            )}
        </div>
    )
}