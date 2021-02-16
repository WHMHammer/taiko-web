# taiko-web
A web-based Taiko no Tatsujin simulator.

Running instance: [https://taiko.bui.pm](https://taiko.bui.pm)

Still in development. Works best with Chrome.

## Setup

Run the following lines in shell.

Replace `IMAGE_NAME` and `CONTAINER_NAME` with the actual names you'd like to take.

``` {sh}
docker build -t IMAGE_NAME .
docker run --name CONTAINER_NAME -p 80:80 -d IMAGE_NAME
```

Then visit `localhost` to start playing.
