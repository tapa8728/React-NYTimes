$( "#books" ).on( "click", function( event ) {
    React.render(
        // <BookList url='http://api.nytimes.com/svc/books/v3/lists/2015-03-15/hardcover-fiction.json?api-key=efeff379c72e1b4e35c4e92195b39397:1:71587973'/>,
        <BookList url='http://api.nytimes.com/svc/books/v3/lists/2015-03-15/hardcover-fiction.json?callback=books&offset=60&sort-by=list&sort-order=ASC&api-key=efeff379c72e1b4e35c4e92195b39397:1:71587973'/>,
        document.getElementById('content')
    )
})

$( "#activities" ).on( "click", function( event ) {
    React.render(
        <ActivityList url='https://vimeo.com/api/v2/activity/1958639/user_did.json'/>,
        document.getElementById('content')
    )
})


