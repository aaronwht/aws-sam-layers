
# AWS SAM using Layers & shared files
## Basic example in 5 minutes:
This app includes only one NPM package located in the `dependencies/nodejs/package.json` file for `jsonwebtoken` to illustrate the use of a node package in a layer (you may add more).  

The app also includes a `shared file`, in this case a helper file, named `helper.js` also in the `dependencies/nodejs` folder.  When the app is run, NPM packages are referenced from the `dependiences/node_modules` folder and the shared file is also referenced.  

The main file `extend/index.js` is included inside of a folder to illustrate structuring code which creates smaller functions in AWS Lambda.

To run this app locally, run the following commands:
```
cd dependencies/nodejs
npm install
cd ../../
sam local start-api --port 3030
```
The app will be running at http://localhost:3030/
To stop the app, run `Control+C` on a Mac.

Use the below commands to deploy to AWS.  The first command packages the contents of this app into a `.zip`  file and uploads that `.zip` file to AWS S3 (required to deploy to AWS Lambda).  Replace `[YOUR_BUCKET]` with  the name of your AWS S3 bucket name (you may wish to create a new bucket for this app).  Note, you have to have programmatic access to AWS to run the below commands (search `aws configure` for more info)
`aws cloudformation package --template-file template.yaml --s3-bucket [YOUR_BUCKET] --output-template-file outputtemplate.yaml`

The next command deploys the code to Api Gateway and Lambda from the uploaded `.zip` file in the previous step.  Replace `[YOUR_STACK_NAME]` with a stack name of your choosing if you don't already have one (I used sam-layers-sample).  
`aws cloudformation deploy --stack-name [YOUR_STACK_NAME] --template-file outputtemplate.yaml --capabilities CAPABILITY_NAMED_IAM`
