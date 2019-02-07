var search_data = {"index":{"searchIndex":["acuk","service","adapter","applicationcontroller","curriculum","github","service","homecontroller","job","jobs","service","jobsacukconstants","manager","rssreader","sources","stackoverflow","service","user","users","omniauthcallbackscontroller","adapt_github_json()","adapt_rss()","collect()","collect_data()","facebook()","failure()","fetch()","fetch()","fetch()","fetch()","fetch_rss()","generate_cv()","github()","jobs()","linkedin()","new()","new()","new()","new()","populate()","update_data()","update_from_facebook()","update_from_github()","update_from_linkedin()"],"longSearchIndex":["acuk","acuk::service","adapter","applicationcontroller","curriculum","github","github::service","homecontroller","job","jobs","jobs::service","jobsacukconstants","manager","rssreader","sources","stackoverflow","stackoverflow::service","user","users","users::omniauthcallbackscontroller","adapter#adapt_github_json()","adapter#adapt_rss()","jobs::service#collect()","homecontroller#collect_data()","users::omniauthcallbackscontroller#facebook()","users::omniauthcallbackscontroller#failure()","acuk::service#fetch()","github::service#fetch()","jobs::service#fetch()","stackoverflow::service#fetch()","rssreader#fetch_rss()","homecontroller#generate_cv()","users::omniauthcallbackscontroller#github()","homecontroller#jobs()","users::omniauthcallbackscontroller#linkedin()","acuk::service::new()","github::service::new()","jobs::service::new()","stackoverflow::service::new()","curriculum::populate()","homecontroller#update_data()","manager#update_from_facebook()","manager#update_from_github()","manager#update_from_linkedin()"],"info":[["AcUk","","AcUk.html","","<p>AcUk Module contains the service which is responsible of collecting job\noffers from the web service [ …\n"],["AcUk::Service","","AcUk/Service.html","","<p>It is the service that deals with operations about fetching and storing\ndata from Jobs.ac.uk\n"],["Adapter","","Adapter.html","","<p>Contains methods for dealing with formatting operations into internal well\nunderstood data structures …\n"],["ApplicationController","","ApplicationController.html","",""],["Curriculum","","Curriculum.html","","<p>It is the class used to store data related to curriculum It is also\nattached to the Database if in the …\n"],["Github","","Github.html","","<p>It contains the service responsible with the collection of job offers from\nthe GitHubJobs API [jobs.github.com/api …\n"],["Github::Service","","Github/Service.html","","<p>It represents the service that actually interacts with the outside web\nservice. Moreover it adapts and …\n"],["HomeController","","HomeController.html","","<p>It is the process which manages the application flow and session. It is the\norchestrator of the internal …\n"],["Job","","Job.html","","<p>It models an internal structure representation of a well-formatted. This\nclass inherits from OpenStruct …\n"],["Jobs","","Jobs.html","","<p>Contains the service which aggregates and orchestrates the three micro\nservices (Github, Stackoverflow …\n"],["Jobs::Service","","Jobs/Service.html","","<p>It is the service which integrates all the jobs in just one list of jobs\nand selects only a little fraction …\n"],["JobsAcUKConstants","","JobsAcUKConstants.html","","<p>It stores the constants used by the AcUk::Service to fetch specific job\noffers based on the service settings. …\n"],["Manager","","Manager.html","","<p>It contains methods to deal with integration personal data about the user,\nretrieved from the social …\n"],["RssReader","","RssReader.html","","<p>It contains operations about fetching RSS feeds directly from an online\nsource. It uses the Adapter in …\n"],["Sources","","Sources.html","","<p>Stores the constants relative to the provenience of the collected jobs by\nthe Jobs::Service. Moreover …\n"],["Stackoverflow","","Stackoverflow.html","","<p>Contains the service used to interact with Stackoverflow RSS jobs feed web\nservice\n<p>Example:\n<p>stackoverflow.com/jobs/feed?q=dfd&l=Italia&d=20&u=Km&r=true … &mdash; \n"],["Stackoverflow::Service","","Stackoverflow/Service.html","","<p>It is the service which deals with operations of connecting, querying,\nfetching and adapting job offers …\n"],["User","","User.html","","<p>This class is generated with the Devise gem. It is used to manage the\nconnection between social networks …\n"],["Users","","Users.html","",""],["Users::OmniauthCallbacksController","","Users/OmniauthCallbacksController.html","","<p>This class is the controller of the User model.\n<p>Like the model is connected with the authorization/authentication …\n"],["adapt_github_json","Adapter","Adapter.html#method-i-adapt_github_json","(raw_jobs)","<p>Adapts a list of a Jobs formatted JSONs into a list of Jobs formatted into\nan internal representation …\n"],["adapt_rss","Adapter","Adapter.html#method-i-adapt_rss","(feed, source)","<p>Adapts an RSS feed data structure into an internal representation of it.\n<p>Specs of RSS [validator.w3.org/feed/docs/rss2.html …\n"],["collect","Jobs::Service","Jobs/Service.html#method-i-collect","()","<p>Collects the data\n"],["collect_data","HomeController","HomeController.html#method-i-collect_data","()","<p>Initializes the session in order to make it populate later by Devise and\nOAuth services then renders …\n"],["facebook","Users::OmniauthCallbacksController","Users/OmniauthCallbacksController.html#method-i-facebook","()","<p>This method is the final callback for Facebook\n"],["failure","Users::OmniauthCallbacksController","Users/OmniauthCallbacksController.html#method-i-failure","()",""],["fetch","AcUk::Service","AcUk/Service.html#method-i-fetch","()","<p>Fetches the data from the source service and stores the actual list of jobs\ninternally.\n"],["fetch","Github::Service","Github/Service.html#method-i-fetch","(opts={})","<p>It is the operation that actually fetches and adapts the data from the\nsource web service\n<p>Params:\n\n<pre>opts:: ...</pre>\n"],["fetch","Jobs::Service","Jobs/Service.html#method-i-fetch","()","<p>Invokes the micro services to operate and stores all the retrieved data\n"],["fetch","Stackoverflow::Service","Stackoverflow/Service.html#method-i-fetch","()","<p>Downloads the data from Stackoverflow web service.\n"],["fetch_rss","RssReader","RssReader.html#method-i-fetch_rss","(url, source)","<p>Performs an HTTP GET call, fetches the results and parses the result into a\nwell-known structure\n<p>Params: …\n"],["generate_cv","HomeController","HomeController.html#method-i-generate_cv","()","<p>It takes the chosen Type of Application for the CV, converts the image link\nin base64 format and renders …\n"],["github","Users::OmniauthCallbacksController","Users/OmniauthCallbacksController.html#method-i-github","()",""],["jobs","HomeController","HomeController.html#method-i-jobs","()","<p>Takes the updated data from the previous step, initializes a Jobs::Service\nand performs its operations …\n"],["linkedin","Users::OmniauthCallbacksController","Users/OmniauthCallbacksController.html#method-i-linkedin","()",""],["new","AcUk::Service","AcUk/Service.html#method-c-new","(discipline)","<p>Initializes the service with an empty list of jobs and chooses an academic\ndiscipline type which will …\n"],["new","Github::Service","Github/Service.html#method-c-new","(therm, location)","<p>Initializes the service with the parameters needed for the API call and an\nempty list of jobs\n<p>Params: …\n"],["new","Jobs::Service","Jobs/Service.html#method-c-new","(therms, location)","<p>Initializes the service with the parameters needed and the micro services\n<p>Params:\n\n<pre>therm:: therm used for ...</pre>\n"],["new","Stackoverflow::Service","Stackoverflow/Service.html#method-c-new","(therm, location)","<p>Initializes the service with a :therm used to query the source, a :location\nand creates an empty list …\n"],["populate","Curriculum","Curriculum.html#method-c-populate","(data, curriculum)","<p>Class method which takes the session and populates the model with the data\nfrom the session\n"],["update_data","HomeController","HomeController.html#method-i-update_data","()","<p>Populates the session and a model with data collected from social networks\nand renders the update_data …\n"],["update_from_facebook","Manager","Manager.html#method-i-update_from_facebook","(auth, cv)","<p>Takes data from facebook and stores them in the input attribute.\n<p>Params:\n\n<pre>auth:: the json retrieved from ...</pre>\n"],["update_from_github","Manager","Manager.html#method-i-update_from_github","(auth, cv)","<p>Takes data from Git Hub and stores them in the input attribute. Moreover it\nperforms other HTTP calls …\n"],["update_from_linkedin","Manager","Manager.html#method-i-update_from_linkedin","(auth, cv)","<p>Takes data from Linkedin and stores them in the input attribute.\n<p>Params:\n\n<pre>auth:: the json retrieved from ...</pre>\n"]]}}