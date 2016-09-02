# ZRecruit

To run

```
npm install
npm start
```

To test

```
npm test
```


# Deployment
Deployment is done via [Travis](https://travis-ci.org/) to an Amazon S3 bucket.
An Amazon secret_key needs to be configured in `.travis.yml` and the repository needs to be enabled in your Travis account.

The app is using `hashHistory` which can be switched to `browserHistory`, however browser history requires Amazon CloudFront to be configured.


# Notes on implementation

## Matchstick Puzzles
A matchstick puzzle is deined by `numbers`, `moves`, `operation` and `correctPositions`.
The `numbers` are a 2-dimensional array with each item representing a number.
A `number` is an array with seven positions, each representing a segment of 7-segment display.
The counting in the numbers array is as:
![7-segment display counting](/docs/7-segment-digit.jpg?raw=true "7-segment display counting")

## Getting details of users who solved a challenge
The branch `form` has a form that needs to be connected to a store where the responses can be saved via a post request. This could be a google spreadsheet or different.

# TODO
- Configure a Zuhlke Amazon S3 bucket

If it has to be private:
- Get a private git repository
- Get a private Travis CI account