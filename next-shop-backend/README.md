# Next Shop Backend

Backend API for the Shop example in the Next.js course.

## Set up

Build and start Strapi with:

```
npm run build
npm start
```

If you're still using Node v16 the build step will fail with:

```node: --openssl-legacy-provider is not allowed in NODE_OPTIONS```

Please upgrade to Node v18, or else edit `package.json` and change the `build` script to

```json
"build": "strapi build",
```

(The `--openssl-legacy-provider` option is [required on Node v17+](https://nodejs.org/en/blog/release/v17.0.0#openssl-30).)

## Administrator

You can log in at [localhost:1337/admin](http://localhost:1337/admin/)
by entering `admin@example.com` as the email and `Admin123` as the password.

## Users

| Username | Email             | Password |
|----------|-------------------|----------|
| Alice    | alice@example.com | Alice123 |
| Bob      | bob@example.com   | Bob123   |

## Credits

The plant images are taken from Wikimedia Commons and used under Creative Commons or GNU Free Documentation licenses. They are copyrighted to their respective authors as detailed on each page below:

* [Aloe Vera.jpg](https://commons.wikimedia.org/wiki/File:Aloe_Vera.jpg)
* [Epipremnum aureum 31082012.jpg](https://commons.wikimedia.org/wiki/File:Epipremnum_aureum_31082012.jpg)
* [New Monstera Deliciosa Leaf.jpg](https://commons.wikimedia.org/wiki/File:New_Monstera_Deliciosa_Leaf.jpg)
* [Snake_Plant_(Sansevieria_trifasciata_'Laurentii').jpg](https://commons.wikimedia.org/wiki/File:Snake_Plant_(Sansevieria_trifasciata_%27Laurentii%27).jpg)
* [Spider Plant (Chlorophytum comosum).jpg](https://commons.wikimedia.org/wiki/File:Spider_Plant_(Chlorophytum_comosum).jpg)
* [ZZ Plant (Zamioculcas zamiifolia).jpg](https://commons.wikimedia.org/wiki/File:ZZ_Plant_(Zamioculcas_zamiifolia).jpg)
