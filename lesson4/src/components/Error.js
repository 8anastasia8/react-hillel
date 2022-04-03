export default function Error(props) {
    return (
        <div className={props.error ? 'errorItem' : 'hide'}>
            <p>Error! Please fill in all the required fields</p>
        </div>
    )
}