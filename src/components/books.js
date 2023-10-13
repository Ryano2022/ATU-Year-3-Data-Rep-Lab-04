function Books(props) {
    return (
        <div>
            <h3>Hello from books.js component.</h3>
            {console.log(props.myBooks)}
        </div>
    )
}

export default Books;