# WEBD 3012 Business Systems Build and Testing
__Assignment #__: Coding Assignment: 14

__Prepared by__: Simon Neufville

## GitHub Repository Link
https://github.com/sneufville/webd-3012-coding-assignment14-cra

## Assignment specifics

This project uses continues from assignment 13 and uses the component library components to build a portfolio

## How to run

This assumes docker is installed and works correctly

```shell
# build the image (docker build . -t <name>) if needed
# example below
docker build . -t "sneufville-coding-assignment14:v1.0"
```

```shell
# run the image
docker run --name neufville_simon_coding_assignment14 -dp 5575:5575 sneufville-coding-assignment14:v1.0
```

The Storybook application will be accessible at `http://localhost:5575`
