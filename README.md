# taiko-web-docker

Forked from [@bui](https://github.com/bui)'s [taiko-web](https://github.com/bui/taiko-web) project.

Server-related parts are removed to minimize resource consumption.

"Works best with Chrome." - [@bui](https://github.com/bui)

## License

[@bui](https://github.com/bui) hasn't specified a license in the original repo at this moment. I'll stay with [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html) (for my very very minor changes in [taiko-web-docker](https://github.com/WHMHammer/taiko-web-docker)) unless [@bui](https://github.com/bui) decides otherwise.

## Set up with Docker

Run the following lines in shell.

Replace `IMAGE_NAME` and `CONTAINER_NAME` with the actual names you'd like to take.

``` {sh}
docker build -t IMAGE_NAME .
docker run --name CONTAINER_NAME -p 80:80 -d IMAGE_NAME
```

Then visit `localhost` to start playing.

## Set up with nginx

Follow these steps from the official documentation:

- [Installing nginx](https://nginx.org/en/docs/install.html)
- [Serving Static Content](https://nginx.org/en/docs/beginners_guide.html#static)

You will need to copy both the `index.html` file and the whole `src` directory.

## Related project

- Download tja files and songs - [tja-download](https://github.com/WHMHammer/tja-download)
