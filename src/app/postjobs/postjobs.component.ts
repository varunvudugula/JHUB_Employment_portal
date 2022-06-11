import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormControl,FormsModule } from '@angular/forms';
import { Job } from '../job';

@Component({
  selector: 'app-postjobs',
  templateUrl: './postjobs.component.html',
  styleUrls: ['./postjobs.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PostjobsComponent implements OnInit {

  selectedskills = new FormControl();
skills=[".NET",
".NET Core",
".NET MVC",
"3D Graphics",
"3P APIs & Libraries",
"A/B Testing",
"Acceptance Testing",
"Access",
"Administration",
"ADO.NET",
"Adobe Air",
"Adobe Illustrator",
"Adobe InDesign",
"Adobe Photoshop",
"Adobe XD",
"AdonisJS",
"AEM",
"AES/RSA Encryption",
"Agile",
"Airflow",
"AJAX ",
"Akka",
"AL Programming",
"Algorithms and Data Structures",
"Alteryx",
"Amazon Firehose",
"Amazon Kinesis",
"Amazon Redshift",
"AMP (Accelerated Mobile Pages)",
"Android",
"Android - Java",
"Android Hybrid App Development",
"Android SDK",
"Android Studio",
"Android Testing",
"Android/Java",
"Android/Kotlin",
"Angular",
"Angular 2+",
"Angular CLI",
"AngularJS",
"Ansible",
"Ant Design",
"Apache",
"Apache Beam",
"Apache Flume",
"Apache Kafka",
"Apache Mesos",
"Apache NiFi",
"Apache Pulsar",
"Apache Solr",
"Apache Spark",
"Apache Storm",
"Apex Programming",
"API Design",
"API Documentation",
"API Integrations  ",
"Apollo",
"Apollo Client",
"Apollo Server",
"ArcGIS JavaScript API",
"Arduino",
"Arista",
"Artificial Intelligence",
"Artificial Neural Networks",
"AS3",
"ASP.NET",
"ASP.NET Boilerplate",
"ASP.NET Core",
"ASP.NET MVC",
"ASP.NET Web Forms",
"ASP.NET/C#",
"Assembly",
"Atlassian",
"Atom",
"AutoIT",
"Automatics",
"Automation Test Toolkit",
"Automation Testing",
"AWS",
"AWS Administration",
"AWS Amplify",
"AWS Aurora",
"AWS Cognito",
"AWS DevOps",
"AWS Glue",
"AWS Lambda",
"AWS Solutions Architecture",
"Axio",
"Axure",
"Azure",
"Azure Cloud SQL",
"Azure Cosmos DB",
"Azure Data Factory",
"Azure Data Lake",
"Azure Databricks",
"Azure DevOps",
"Azure Eventhub",
"Azure Function App",
"Azure Modern Data",
"Babel",
"Back-End Development",
"Backbone",
"Bash",
"Bayesian Models",
"BDD/Behavior-Driven Development",
"Benchmarks",
"BI Admin",
"BI Support",
"Bias-Variance Tradeoff",
"Big Data",
"Bitbucket",
"BizTalk Server",
"Blender",
"Blockchain",
"BluePrint",
"Bootstrap",
"Borland Delphi",
"Business Analysis",
"Business Application Development",
"Business Intelligence",
"Business Intelligence Engineering",
"C",
"C#",
"C++",
"C/AL Development",
"Caffe",
"CakePHP",
"CalDav/CardDav",
"Cards & Payment",
"Cassandra",
"Chai",
"Chatbot ",
"Chef",
"Chrome Extensions",
"CI/CD",
"CircleCI ",
"Cisco",
"Cisco Contact Centers",
"Citrix",
"Classic ASP",
"Classic VB",
"Clean Architecture",
"Clojure",
"ClojureScript",
"Cloud",
"Cloud Migration",
"COBOL",
"Cocos Creator",
"Code Analysis",
"Code Reviews",
"CodeIgniter",
"CoffeeScript",
"Cognos",
"ColdFusion",
"Coldfusion CFML",
"Communication",
"Compass",
"Computer Vision",
"Confluence",
"Consul",
"CORBA",
"Cordova",
"Core Java",
"CoreOS",
"CouchDB",
"Cplex",
"Crawlers",
"Critical Thinking",
"Crystal Reports",
"CSS",
"CSS Modules",
"CSS3",
"CSS: Animation",
"CSS: Flex",
"CSS: Grid",
"CSS: Media Queries",
"Customer Interaction",
"Cyber Security",
"Cypress",
"D3.js",
"DAC",
"Dagger",
"Dart",
"Data Analysis",
"Data Analyst",
"Data Cleansing",
"Data Engineering",
"Data Extraction",
"Data Migration",
"Data Modeling",
"Data Pipelines",
"Data Science",
"Data Spooling",
"Data Warehousing",
"Database Administration",
"DB2 Universal Database (UDB)",
"Decision Trees",
"Deep Learning",
"Deep Learning Algorithms",
"Delphi",
"Design Patterns",
"Design Thinking",
"DevExpress",
"DevOps",
"Digital Marketing",
"Disaster Recovery",
"Discriminant Analysis",
"Distributed File Systems",
"Distributed Programming",
"Distributed Storage",
"Distributed Systems",
"Django",
"Django Rest Framework",
"DNS",
"Docker",
"DOM",
"Domain Driven Design",
"Domain-Specific Languages",
"Dplyr",
"Drupal",
"DuckDuckGo",
"Durandal.js",
"Dynamics 365 Business Central",
"DynamoDB",
"E-Commerce",
"E2E Testing",
"EC2",
"EDA",
"EJB Component Programming",
"Elastic BeanStalk",
"Elastic Beats (Filebeat, etc.)",
"ElasticSearch",
"Electrical Networks",
"Electron",
"Electronic Billing",
"Electronic Engineering and Telecommunications",
"Electronics",
"Elixir",
"ELK stack",
"ELM",
"Embedded Systems",
"Ember.js",
"EMV",
"Ensemble Methods",
"Entity Framework",
"EO/IR",
"Erlang",
"ERP",
"ERP Development",
"Ethical Hacking",
"ETL",
"Excel",
"Excel VBA",
"Exchange ActiveSync",
"Exploration/Exploitation",
"Express.js",
"ExtJS",
"Facebook API",
"Feathers JS",
"FFmpeg",
"Figma",
"Filemaker Development",
"Filemaker Go",
"Filemaker Pro",
"Filemaker WebDirect",
"Finance",
"Fire",
"Firebase",
"Firewalls",
"Firmware",
"Flash",
"Flask",
"Flutter",
"Flux",
"Free Form",
"Fullstack Development",
"Functional Testing",
"Game Development",
"Gatsby",
"GCP",
"Gerrit",
"Ggplot2",
"Git",
"Gitflow",
"GitHub",
"GitLab",
"Go/Golang",
"Godot Engine",
"Google Apps",
"Google Cloud Platform",
"Google Web Toolkit",
"Gradle",
"Grafana",
"Graphene",
"Graphic Design",
"Graphite",
"GraphQL",
"Greenplum",
"Groovy",
"Groovy on Grails",
"Growth Hacking",
"GRPC",
"GTK",
"Guidewire",
"GWT",
"H2O",
"Hadoop",
"HAProxy",
"Hardware Project",
"Haskell",
"HBase",
"HDFS",
"Helpdesk Analyst I/II",
"Heroku",
"Hibernate",
"Highcharts",
"HL7 Messages",
"HRM",
"HTML",
"HTML Preprocessors",
"HTML5",
"HTTP",
"Human Resources & Talent",
"Hybrid Cloud Management",
"Hyperledger Fabric",
"IBM DataPower",
"IBM ESB",
"IBM Watson",
"IBM WPS",
"ICMP",
"iMacros",
"Image Recognition",
"IMAP",
"IMS/IP Multimedia Subsystem",
"Individual Contributor",
"Informatica",
"Information Technology",
"Infrastructure Operations",
"Innosetup",
"Instance-Based and Association Learning",
"Integration Testing",
"Internal Audit",
"Inventory",
"Invision",
"Ionic",
"iOS - Swift",
"iOS Development",
"IoT",
"IPFS",
"IPMI",
"iSCSI / CIFS",
"IT Officer",
"Iterative Testing",
"ITSM",
"J2EE",
"Jamf",
"Jasper Reports",
"Java",
"Java 8",
"Java JSF",
"JavaScript",
"Javascript ES6",
"JavaScript Frameworks",
"JDBC",
"JEE",
"Jekyll",
"Jenkins",
"Jest",
"Jira",
"JMeter",
"Joomla",
"jQuery",
"JSON",
"JSON Schema",
"JSP",
"JUnit",
"Jupyter Notebooks",
"JWT",
"Kafka",
"Kanban",
"Kendo",
"Keras",
"KiCad",
"Knex.js",
"Knockout.js",
"Kotlin",
"Kubernetes",
"L&D",
"Laboratory Automation",
"Ladder",
"LAMP",
"Laravel",
"Laravel/Lumen",
"Latex",
"Layer 2 Networking",
"LEMP",
"LESS",
"LIDAR",
"Linear and Nonlinear Regression",
"Linq",
"Linux ",
"Linux Tools ",
"Load Balancing",
"Load Testing",
"Logistics",
"Logstash",
"Low Latency Trading Systems",
"Lua",
"Machine Learning",
"MacOS",
"Magento",
"Magento 2",
"Manual Testing",
"MapReduce",
"MariaDB",
"Material UI",
"Materialize",
"Mathematical Modeling",
"Mathematics",
"Matillion",
"MATLAB",
"Matplotlib",
"Maven",
"Memory Managment",
"Meteor.js",
"Micronaut Framework",
"Microservices",
"Microsoft Dynamics 365 CE",
"Microsoft Dynamics CRM",
"Microsoft Dynamics NAV",
"Microsoft Office",
"mikroC",
"Mobile App Development",
"Mobile Static Analysis",
"Mobile Testing Frameworks/Tools",
"Mobile Web Development ",
"MobX",
"Mocha",
"Mockito",
"Modular APIs",
"MongoDB",
"MS SQL Server",
"MS SQLServer",
"MSBI",
"MTCNA",
"Multithreading",
"MVC",
"MVP",
"MVVM",
"MXNet",
"MySQL",
"Nativescript ",
"Natural Language Processing (NLP)",
"Nearest Neighbors",
"Neo4j",
"Neoload",
"Network Protocols",
"Next.js",
"NFS",
"NGINX",
"Node.js",
"NoSQL",
"NPM Packages Development",
"Numerical Methods",
"Numpy",
"Nuxt.js",
"NW.js",
"OAuth APIs",
"OBIEE",
"Object-Oriented Design",
"Object-Relational Mapping",
"Objective-C",
"OData",
"ODK",
"Odoo",
"On Page & Off Page SEO",
"On-Prem",
"OOP",
"Open GL",
"Open Graph",
"Open Source",
"Open Source Frameworks",
"Open Source Projects",
"OpenAI Gym",
"OpenCV",
"OpenGL ES",
"OpenShift",
"OpenStack",
"Operating Systems",
"Optimization",
"Oracle",
"Oracle ADF",
"Oracle Application DBA ",
"Oracle Database Administration",
"Oracle ERP",
"Oracle Forms",
"Oracle Fusion Financial Functional",
"Oracle JD Edwards",
"Oracle PL/SQL",
"Oracle Reports",
"Oracle SOA",
"Oracle SQL",
"OrangeHRM",
"Organization and Presentation skills",
"OWB",
"Packer",
"PagerDuty",
"Pair Programming",
"Pandas",
"Pascal",
"Pentaho",
"Pentaho Kettle",
"Perl",
"PhoneGap",
"Photoshop",
"PHP",
"PHP, Laravel",
"PHP/MySQL",
"PixelPerfect",
"Play Framework",
"Plotly",
"PMP",
"Polymer",
"Portable Batch Systems",
"PostGIS",
"PostgreSQL",
"Postman",
"Power BI",
"Power Platform Development",
"PowerShell Scripting",
"Problem Solving",
"Procurement",
"Product Management",
"Programming Aspects",
"Progress 4GL",
"Project Management",
"Prometheus",
"Ps1",
"Pug",
"Pulsar",
"Puppet",
"Puppeteer",
"Purescript",
"PWA/Progressive Web Applications",
"PyQt5",
"PySide",
"PySpark",
"Pyth",
"Python",
"Python Automation",
"Python for Data Science",
"Python Security Automation",
"Python(Django)",
"PyTorch",
"QlikView",
"Qt",
"Quality Management",
"Quantitative Analysis",
"Quasar Framework",
"R",
"RabbitMQ",
"RADIS",
"RAID",
"Rake",
"Rational Clearcase",
"Ray",
"RDBMS",
"RDLC Reporting",
"React",
"React Native",
"Real Time Systems",
"Realm",
"Redis",
"Redux",
"Redux-Saga",
"Refinement of Models",
"Regular Expressions",
"Reinforcement Learning",
"Remote Collaboration",
"Remote Sensing",
"Reporting and Tracking Software Defects",
"Reporting Services",
"Requirement Gathering",
"REST APIs Testing",
"REST/RESTful APIs",
"Retesting",
"RMI",
"Robotics",
"Roku",
"Routing",
"RPA",
"RSpec",
"RTOS",
"Ruby",
"Ruby on Rails",
"Rust",
"RxJava",
"RxJS",
"RxSwift",
"SaaS",
"Sails.js",
"Salesforce ",
"Salesforce Admin",
"Salesforce Development",
"Salesforce Lightning",
"Salesforce Lightning Aura Components",
"SaltStack",
"SAP",
"SAP ABAP",
"SAP ABAP HR",
"SAP B1/SAP Business One",
"SAP BODS/SAP BO Data Services",
"SAP Business Objects",
"SAP HANA SDI",
"SAP Process Integration",
"SAPUI5",
"SAR",
"SAS",
"SASS",
"Scala",
"SceneKit",
"Scikit-Learn",
"Scipy",
"Scrum",
"SCSS",
"SDLC",
"Security",
"Selenide",
"Selenium",
"Selenium WebDriver",
"Semantic Parsing",
"SEO",
"Sequelize",
"Server-Sent Events",
"Service Level Management",
"Service Workers",
"ServiceNow",
"Servlets",
"SFDC",
"Shell Scripting",
"Shopsite",
"Signal Processing and Transmission",
"Sinatra",
"Sitecore",
"Sketch",
"Slick",
"SmartCommunication",
"SMTP",
"SOAP",
"Social Media Marketing",
"Socket Programming",
"Socket.io",
"Software Architecture",
"Software Development",
"Software Packaging and Maintenance",
"Software Quality Assurance",
"Software Testing",
"Solidity",
"Solution Architecture",
"Sound and Audio",
"SPA",
"SpaCy",
"Spanner",
"Spark",
"Spinnaker",
"Splunk",
"Spring",
"Spring Boot",
"Spring Framework",
"Spring MVC",
"SpringBoot",
"SpriteKit",
"SQL",
"SQL Tuning",
"SQLalchemy",
"SQLite",
"SSAS",
"SSH",
"SSIS",
"SSL/TLS & Certificate Authorities",
"SSRS",
"Stanford CoreNLP",
"Stash",
"Statistics",
"StatsD",
"STM32",
"Stripe",
"Struts 2",
"Styled Components",
"Stylus",
"Subversion",
"Suite CRM",
"Svelte",
"SVG",
"Swift",
"Switching",
"Symfony",
"Syncsort DMExpress",
"System Design",
"System Integration Testing",
"System Monitoring Tools",
"T-SQL",
"Tableau",
"Talend Open Studio",
"TCP/IP",
"TDD/Test-Driven Development",
"Team Management",
"Team Player",
"Teamcenter",
"Tech Lead",
"Telerik",
"Tensorflow",
"Tensorflow 1",
"Terraform",
"Test Driven Design",
"Test Planning",
"TFS",
"Theano",
"Third party APIs",
"Thrift",
"Thunderhead",
"Ticketing Tools",
"Torch",
"Traefik",
"Travis CI",
"Troubleshooting",
"Turing Technical Screening",
"Twitter API",
"Typescript",
"UI Design",
"UI Development",
"UIPath",
"Umbraco",
"Unit Testing",
"Unity",
"Unity 3D",
"Unix",
"Unix Development Environments",
"User Research",
"User-Centered Design",
"UX Design",
"Vaadin",
"Vagrant",
"Vault",
"Vazco/Uniforms",
"VBA",
"Video",
"VIPER",
"Virtual Reality",
"Visual Basic",
"Visual Basic .NET",
"Visual C++",
"Visual Studio",
"Visualforce",
"VMware",
"Voice Recognition",
"VoIP",
"VPN",
"VSS",
"Vue.js",
"Vuex",
"Web Accessibility",
"Web API",
"Web Architecture",
"Web Components",
"Web Design",
"Web Development",
"Web Penetration Testing",
"Web Services",
"Web Sockets",
"Web Workers",
"Web3",
"Webpack",
"WebScrape",
"Website Development",
"Websites Performance Optimization",
"White Hat Link Building",
"Windchill",
"Windows",
"Windows Applications",
"Windows CE Development",
"Windows Kernel Drivers",
"Windows SDK",
"Windows Server 2012",
"Windows Services",
"Wireframing & Prototyping",
"WordPress",
"WPF",
"WSO2",
"Xamarin",
"Xcode",
"XHTML",
"XML",
"XSLT",
"XUL",
"YAML",
"Yarn",
"Yii 2 Framework",
"Yii Framework",
"Zend Framework",
"Zeplin",
"Zookeeper"]

  constructor(public http:HttpClient) { 
    
  }
  jobsmodel=new Job('','','','','','','',false);
  ngOnInit(): void {
    console.log(this.jobsmodel.jobid);
    
    console.log(this.jobsmodel.jobrole);
    console.log(this.jobsmodel.description);
    console.log(this.jobsmodel.organisation);
    console.log(this.jobsmodel.requiredskills);
    console.log(this.jobsmodel.expired);
    this.jobsmodel.requiredskills=this.selectedskills.value;
  }
  logger(){
    var url="http://127.0.0.1:8000/resume_extraction/api/v1/create_job"
    console.log(this.jobsmodel.jobid)
    var  responseInString=JSON.stringify(this.selectedskills.value)
    console.log(responseInString)
    var postData={
      "job_role": this.jobsmodel.jobrole,
      "job_description": this.jobsmodel.description,
      "organization_name": this.jobsmodel.organisation,
      "location": this.jobsmodel.location,
      "date": this.jobsmodel.date,
      "skills": responseInString
    }
    this.http.post(url,postData).subscribe(
      (response) => {  
            console.log("added")
      
      },
      (error) => {   
       // error.error.detail
     console.log(error.error.detail)
      }
    )
  }

}
