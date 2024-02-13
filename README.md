Hello, this is test task)

Task now configured to run in docker containers.

I used docker-compose to run app, it include my nest app and postgresdb

So to build and run this app you should

`clone this repo form github`

then hit

` docker-compose up in root directory`

Then you can use services as `Postman` to hit the `localhost:3000/weather` with your GET and POST requests

This is example of request body that you can send (London)

`{
    "lat":"51.5073219",
    "lon":"-0.127647"
}`

and you can add `"part" ` with keywords to it as well
