$( "#books" ).on( "click", function( event ) {
    React.render(
        // <BookList url='http://api.nytimes.com/svc/books/v3/lists/2015-03-15/hardcover-fiction.json?api-key=3739f5d87dea2dce19f2e37b0ad46878:4:71536252'/>,
        <BookList url='http://api.nytimes.com/svc/books/v3/lists/2015-03-15/hardcover-fiction.json?callback=books&offset=60&sort-by=list&sort-order=ASC&api-key=3739f5d87dea2dce19f2e37b0ad46878%3A4%3A71536252'/>,
        document.getElementById('content')
    )
})

$( "#activities" ).on( "click", function( event ) {
    React.render(
        <ActivityList url='https://vimeo.com/api/v2/activity/1958639/user_did.json'/>,
        document.getElementById('content')
    )
})


