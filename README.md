# Pastbin Clone
App that allows you to post any text and receive a unique URL to that text.  
Example live app: [pastebin.com](https://pastebin.com/)

## API Endpoints
```
POST /post
    <= "Hello World!"
    => 200 "unique-post-id"

    create a new post
    responds with generated unique URL to the body

GET /post/:id
    => 200 "Hello World!"
    => 404 "Post with ID :id not found"
```

## Client Routes
### `/new`
UI for creating a new post.

One main input field for post body text.

Button to submit post.
On submit => redirect to new post's page. (`/p/:id`)

### `/p/:postId`
URL that shows associated `:postId`'s post body text.

## Features TODO
- posts index page
- filter posts
- copy to clipboard button
- delete stale posts after a while
- add database
- styling
