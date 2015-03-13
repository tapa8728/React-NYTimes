$( "#videos" ).on( "click", function( event ) {
    React.render(
        <VideoList url='https://vimeo.com/api/v2/1958639/videos.json'/>,
        document.getElementById('content')
    )
})

$( "#activities" ).on( "click", function( event ) {
    React.render(
        <ActivityList url='https://vimeo.com/api/v2/activity/1958639/user_did.json'/>,
        document.getElementById('content')
    )
})


