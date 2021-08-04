# netlify-cms-link-shortener

This is a web app that shortens links with the help of [Eleventy](https://11ty.dev) and [Netlify CMS](https://netlifycms.org).

## Deployment

[Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/bobsfriend12/netlify-cms-link-shortener)

1. Click the 'Deploy to Netlify' button to setup your own instance of this.
2. Edit the `_data/siteinfo.json` file with your site's info. (You could even to that from the GitHub web interface).
3. Thats it!

## FAQ

Q: Is it possible to use another host other than netlify?
A: Yes, but you would have to enter the build settings as you see in `netlify.toml`, and change the Netlify CMS config as it is using a Netlify specific technology called `git-gateway`.

Q: Can I use this commercially?
A: I mean sure. This is not the best solution; I just made it because I was bored.
