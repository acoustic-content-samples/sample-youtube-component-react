# Sample: Youtube React Component
A sample YouTube embed component for the sample-site-react repository


## Introduction
This sample repository provides an example plugin Youtube component for your React site. With the Youtube component, you can embed your favorite Youtube videos in your React site.
To enable this component, you have to install the packages content-artifacts and package site-application-files by following the steps below.


## Install and deploy the sample
Note: make sure you have pulled the latest from the sample-site-react master branch.

### Configure your Wchtools
1. Get your WCH tenant API URL. Open the Hub information dialog from the "About" flyout menu in the left navigation pane of the Watson Content Hub user interface. Copy the API URL.
2. Run `wchtools init` in your command line. Enter your username and API URL to configure the wchtools


### Import the sample content-artifacts and site-application-files
1. cd to content-artifacts. Run `wchtools push -A`
2. From within the site-application-files directory, copy everything to the sample-site-react directory. The file directory of the sample mirrors where the files should be placed in the sample-site-react project. eg `cd site-application-files` then `cp -R * ../../sample-site-react/`
3. From within the react-youtube directory install and save the `react-youtube` dependency: `cd sample-site-react` then run `npm install --save react-youtube`
4. Register the Youtube component with the wch-flux-sdk:
   * Add `registerComponent('Youtube', () => import(/* webpackChunkName: "youtube" */'./layouts/youtube'));` to the `/src/app.jsx` file under the comment `// load layouts dynamically`


### Build and Deploy your components
From within the sample-site-react directory run:
1. Run `npm run build` to compile the project. Make sure there is no error during the build process.
2. Run `npm run deploy` to your WCH tenant. After that, you can see your changes in your WCH tenant.


## Create your content in WCH
1. Go to Your WCH homepage -> Content -> My Content and assets. Click the Compose dropdown and select Youtube as the Content Type.
2. Paste video ID for the Youtube video you would like to embed in your site.
3. Add the new content item to your site to see the working sample.
