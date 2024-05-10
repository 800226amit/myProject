

const { Heading } = require("lucide-react");
const { List } = require("postcss");    
const { title } = require("process");

module.exports = {


    List: [
        {
            title: "this is first title",
            name: "Amit Kumar",
            img : "/images/amit.png",
            description : " I am a software developer working on the NPI Project at Keen and Able Computer Pvt. Ltd."
        },
        
        {
            title: "this is title second",
            name : "Ritesh Kumar Panday",
            img : "/images/amitwibg.jpeg",
            description : " I am a software developer working on the NPI Project at Keen and Able Computer Pvt. Ltd."
        },
        {
            title: "this is title ",
            name : "Sandeep Kumar",
            img : "/images/amit.png",
            description : " I am a software developer working on the NPI Project at Keen and Able Computer Pvt. Ltd."
        },
        {
            title: "this is title ",
            name : "Raj Gautam",
            img : "/images/amit.png",
            description : " I am a software developer working on the NPI Project at Keen and Able Computer Pvt. Ltd."
        }
    ],

    SubHeading: [
        {
            Heading: "Featured Teachnology "
        },
        {
            Heading1: "Latest Teachnology"
        },
        {
            Heading2: "Dev Ops"
        },
        {
            Heading3: "hello this is amit "
        },
    ],
    myIframe: [
        {
            projectsample: "https://jyotisearch.vercel.app/",
            projectimage : "/ProjectimageNetlify/jyotiSearch.png" // this is jyoti search website 
        },
        {
            projectsample: "https://civic-sense.netlify.app",
            projectimage : "/ProjectimageNetlify/civicSense.png" // this civic sense url
        },
        {
            projectsample: "https://keenwatch.netlify.app",
            projectimage : "/ProjectimageNetlify/keenwatch.png" // thsi is watch link
        },
        {
            projectsample: "https://amitjwctc.netlify.app",
            projectimage : "/ProjectimageNetlify/Portfolio.png" // this is portfolio url and image
        },
    ],

    FeaturTechnology: [
        {
            
            image : "/Featuretechnology/Ai.webp",
            Footer : "Artificial intelligence",
            cardcontent : "",
            projectsample: "https://keenwatch.netlify.app",
        },
        {
            image : "/Featuretechnology/cybersecurity.jpg",
            Footer : "Cyber Security",
            cardcontent : "",
            projectsample: "https://keenwatch.netlify.app",
        },
        {
            image : "/Featuretechnology/Ai.webp",
            Footer : "Artificial Super Intelligence",
            cardcontent : "",
            projectsample: "https://keenwatch.netlify.app",
        }
    ],
    LatestTechnology: [
        {
            image : "/Featuretechnology/java-icon-removebg-preview.png",
            Footer : "Java",
            cardcontent : "",
            projectsample: "https://docs.oracle.com/javase/tutorial/",
        },
        {
            image : "/Featuretechnology/nextjs.png",
            Footer : "Next. js",
            cardcontent : "",
            projectsample: "https://nextjs.org/docs",
        },
        {
            image : "/Featuretechnology/tailwind.png",
            Footer : "Tailwind CSS",
            cardcontent : "",
            projectsample: "https://tailwindcss.com/",
        }
    ],

    devOps: [
        {
            image: "/logo/devops-removebg-preview.png",
            Heading: "DEV OPS",
            shorthead: "A glossary of DevOps terms",
            Description: "Case studies of how your DevOps tools or services have helped businesses improve their software delivery process"
        }
    ],

    companylogo: [
        {
            image: "/logo/academor-removebg-preview.png"
        },
        {
            image: "/logo/pnk 2.png"
        },
        {
            image: "/logo/keen-removebg-preview.png"
        },
        {
            image: "/logo/epicmindsit_logo-removebg-preview.png"
        },
        {
            image: "/logo/Technok.png"
        }
    ]
}

