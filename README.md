# WEBD 3012 Business Systems Build and Testing
__Assignment #__: Coding Assignment: 14

__Prepared by__: Simon Neufville

## GitHub Repository Link
https://github.com/sneufville/webd-3012-coding-assignment14-cra

## Assignment specifics

This project uses continues from assignment 13 and uses the component library components to build a portfolio.

The portfolio web application is made up of pages that make use of components built from the previous assignments as 
part of the component library.

### Components Used
The components used in this project include the following:
* HeroImage
* Text
* Label

Additional components were created for the following
* PageWrapper
* Navigation
* Footer

## Additional Information
This application makes use of the **Nginx** web server on `port 80` within the Docker container in order to serve the bundled (built)
React application which serves as our portfolio which will be made accessible on `port 5575`

## How to run

This assumes docker is installed and works correctly

```shell
# build the image (docker build . -t <name>) if needed
# example below
docker build . -t "sneufville-coding-assignment14:v1.0"
```

```shell
# run the image
docker run --name neufville_simon_coding_assignment14 -dp 5575:80 sneufville-coding-assignment14:v1.0
```

The Storybook application will be accessible at `http://localhost:5575`
