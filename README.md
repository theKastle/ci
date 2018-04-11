<h2 align="center">
Seminar: Continuous Integration with Travis CI and Jenkins
</h2>

<p align="center">
  <a href="https://github.com/theKastle/ci">Github</a>
</p>

## Introduction
This project is for a Travis CI & Jenkins Seminar

The project includes a very simple **Calculator webapp**. 

> For unit testing, we use mocha. 

> For functional testing, we use a testing tool called Cypress. Its tests are written in javascript, hence it is very easy for frontend developers to adopt.

The main purpose - demoing how to integrate these testing tools with Travis CI & Jenkins - is rather simple. The following will explain briefly about CI, what we do in the project and then how to use Travis CI & Jenkins.

## Continuous Integration
**Continuous Integration** is the practice of automatically building and testing code changes of each commit, providing immediate feedback on the testing outcome. This way, every time a commit cause problems we'll get notified and be able to react quickly to deal those problems.

## Travis CI
**Travis CI** docs gives us an excellent introduction to why we want to adopt the Continuous Integration practice. 
> Continuous Integration is the practice of merging in small code changes frequently - rather than merging in a large change at the end of a development cycle. The goal is to build healthier software by developing and testing in smaller increments. This is where Travis CI comes in.
<cite>[Travis CI -What is Continuous Integration][1]</cite>

**Travis CI** is simply a platform that helps us do do those things.

## Software under test
The initial project includes a basic calculator app. The app includes a **green title**, an **input box** for users to input expressions, a **button** to trigger calculation and an **textbox for displaying results**.
![alt text](https://image.ibb.co/dBTHs7/4.png)
### Install and Running the Project
```bash
npm install
```

```bash
npm start
```
![alt text](https://image.ibb.co/ntwns7/1.png)
```bash
npm run test
```
![alt text](https://image.ibb.co/da3YX7/2.png)
![alt text](https://image.ibb.co/c7bgKn/3.png)

When you run the test it will automatically opening your browser and closed when it finished. The details about the test cases passed or failed will be shown in your terminal

## Unit Tests using Mocha
One unit test tests if calculator calculate 1+2 correctly (```calculator.test.js```).

You can create your own test cases this is just a simple one for demo purposes.

## Functional Test using Cypress
Including 2 tests (in ```./cypress/integration/index_spec.js```): 
- One checking if the app contains a green title saying "Hello Calculatee!! !!!". 
- The other one tests the whole scenario in which a user types into the "Expression" input box "1+2+3+4", clicks the "Evaluation expression" button to see if the correct result appears in the "Result" textbox.

## Get started with Travis CI
1. Use your Github account to sign in Travis-ci.org (for public repositories).
2. Once you’re signed in to Travis CI, it synchronizes your GitHub repositories, then you go to your profile page and enable the repository you want to use CI.
3. Add a ```.travis.yml``` file to your repository to tell Travis CI what to do.

```yml
language: node_js
node_js:
  - 8
cache:
  directories:
    - ~/.npm
    - node_modules
install:
  - npm install
before_script:
  - npm start &
  - sleep 4
```

The above is our project's yml file. It tells Travis CI to install NodeJs, caching folder ```~/.npm``` and folder ```node_modules```. Then run ```npm install``` to install all dependencies. The ```before_script``` tells Travis CI what to do before running test script which we have configured in ```package.json``` file. Here, we want it to first start the app in parallel and wait a little bit.

4. Commit and push the ```.travis.yml``` file, Travis CI will check for that file and trigger the CI process.

5. Visit the build status page to check if your build passes or fails. 

[1]:https://docs.travis-ci.com/user/for-beginners

## Get started with Jenkins
Jenkins is a self-contained, open source automation server which can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software.

Jenkins can be installed through native system packages, Docker, or even run standalone by any machine with a Java Runtime Environment (JRE) installed.

In this example, we will guide you to install and running Jenkin.

First in order to run Jenkin you need to install Docker. The reason for this is we will be running Jenkins as a Docker container from the jenkinsci/blueocean Docker image

#### Install Docker
To install Docker, you just need to follow the guide on the website

![alt text](https://image.ibb.co/chuvhH/5.png)
 
But for some cases you might run into a problem like using windows 10 home like me with no Hyper-V which doesn’t allow you to install Docker. For replacement, you can download Docker toolbox which also can run Jenkin in it.

Download link for Docker toolbox: ```https://docs.docker.com/toolbox/toolbox_install_windows/```

If you install correctly, there should be 2 shortcuts like this on your laptop's desktop

![alt text](https://image.ibb.co/gfKT2H/6.png)

Go ahead and open Docker QuickStart Terminal and type in this command 

![alt text](https://image.ibb.co/fgve9x/7.png)

In this example my computer already downloaded jenkinsci/blueocean image but if this is your first time running it will automatically download the image and run it

Basically, this command tells docker to run Jenkins CI on port 8080 with /var/jenkins_home directory in the container to the Docker volume with the name jenkins-data. If this volume does not exist, then this docker run command will automatically create the volume for you.

Now it all set go ahead and open your browser and open https://localhost:8080. If that doesn’t work, please type the following command in the docker

![alt text](https://image.ibb.co/cVWahH/8.png)

This will give you your default. In this case type in 192.168.99.100:8080 and it will open a Setup Wizard for Jenkin if this is your first time running
## Running Jenkin

When you open the Setup Wizard of Jenkins it will require password for your first time running

![alt text](https://image.ibb.co/jpN4bc/9.jpg)

You can find the password in the docker terminal

![alt text](https://image.ibb.co/k89vhH/9.png)

Look for this following part in the terminal. In my case, the password is 4587d9dbf9664cee97d61ee2fb4075a0.

In the next step, click on Install suggested plugins.

Finally, Jenkins asks you to create your first administrator user.

When the Create First Admin User page appears, specify your details in the respective fields and click Save and Finish. When the Jenkins is ready page appears, click Start using Jenkins.

Now you are in the homepage of the Jenkin. Press new item to or create new jobs if this is the first time you are running

![alt text](https://image.ibb.co/gnMmpx/10.png)

Input you item name and select pipeline. Then select OK

Then go to the pipeline section and input like in this image with the git link is the link to your own GitHub project that you need to test

![alt text](https://image.ibb.co/jHDMNH/11.png)

Click save and then select build now and let Jenkin run your test script. Notice all your test cases is store in the Jenkinsfile.txt

![alt text](https://image.ibb.co/jAHgNH/12.png)

You can also select open Blue Ocean to see your test’s progress

![alt text](https://image.ibb.co/cF9Hwc/13.png)

If your test runs successful, it will look like this

![alt text](https://image.ibb.co/fapvhH/14.png)
![alt text](https://image.ibb.co/gk6VGc/15.png)

## Compare between Jenkins and Travis CI 

#### Jenkins:

```
Pros: 
	+ Free to download and use
	+ Practically endless options for customization
	+ An ever-growing collection of plugins
```
```
Cons: 
	+ Requires a dedicated server, which may entail an extra expense
	+ Can take a while to configure and customize
```

#### Travis CI:
```
Pros: 
	+ Lightweight and easy to set up
	+ Free for open source projects
	+ No dedicated server needed
	+ Build matrix feature
```
```
Cons: 
	+ Enterprise plans come with a cost
	+ Limited options for customization
```

