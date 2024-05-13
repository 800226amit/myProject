

const { Heading } = require("lucide-react");
const { List } = require("postcss");
const { title } = require("process");

module.exports = {


    httperrors: [
        {
            Serialno: '01',
            statuscode: '100',
            meaning: '	Continue'
        },
        {
            Serialno: '02',
            statuscode: '101',
            meaning: 'Switching protocols'
        },
        {
            Serialno: '03',
            statuscode: '102',
            meaning: 'Processing'
        },
        {
            Serialno: '04',
            statuscode: '103',
            meaning: 'Early Hints'
        },
        {
            Serialno: '05',
            statuscode: '200',
            meaning: 'OK'
        },


        {
            Serialno: '06',
            statuscode: '201',
            meaning: 'Created'
        },

        {
            Serialno: '07',
            statuscode: '202',
            meaning: 'Accepted'
        },
        {
            Serialno: '08',
            statuscode: '203',
            meaning: 'Non-Authoritative Information'
        },
        {
            Serialno: '09',
            statuscode: '204',
            meaning: 'No Content'
        },
        {
            Serialno: '10',
            statuscode: '205',
            meaning: 'Reset Content'
        },
        {
            Serialno: '11',
            statuscode: '206',
            meaning: 'Partial Content'
        },
        {
            Serialno: '12',
            statuscode: '207',
            meaning: 'Multi-Status'
        },
        {
            Serialno: '13',
            statuscode: '208',
            meaning: 'Already Reported'
        },
        {
            Serialno: '14',
            statuscode: '226',
            meaning: 'IM Used'
        },
        {
            Serialno: '15',
            statuscode: '300',
            meaning: '	Multiple Choices'
        },
        {
            Serialno: '16',
            statuscode: '301',
            meaning: 'Moved Permanently'
        },
        {
            Serialno: '17',
            statuscode: '302',
            meaning: 'Found (Previously "Moved Temporarily")'
        },
        {
            Serialno: '18',
            statuscode: '303',
            meaning: 'See Other'
        },
        {
            Serialno: '19',
            statuscode: '304',
            meaning: 'Not Modified'
        },
        {
            Serialno: '20',
            statuscode: '305',
            meaning: 'Use Proxy'
        },
        {
            Serialno: '21',
            statuscode: '306',
            meaning: 'Switch Proxy'
        },
        {
            Serialno: '22',
            statuscode: '307',
            meaning: 'Temporary Redirect'
        },
        {
            Serialno: '23',
            statuscode: '308',
            meaning: 'Permanent Redirect'
        },
        {
            Serialno: '24',
            statuscode: '400',
            meaning: 'Bad Request'

        },
        {
            Serialno: '25',
            statuscode: '401',
            meaning: 'Unauthorized'

        },
        {
            Serialno: '26',
            statuscode: '402',
            meaning: 'Payment Required'

        },
        {
            Serialno: '27',
            statuscode: '403',
            meaning: 'Forbidden'

        },
        {
            Serialno: '28',
            statuscode: '404',
            meaning: 'Not Found'

        },
        {
            Serialno: '29',
            statuscode: '405',
            meaning: 'Method Not Allowed'
        },
        {
            Serialno: '30',
            statuscode: '406',
            meaning: 'Not Acceptable'

        },
        {
            Serialno: '31',
            statuscode: '407',
            meaning: 'Proxy Authentication Required'
        },
        {
            Serialno: '32',
            statuscode: '408',
            meaning: 'Request Timeout'
        },
        {
            Serialno: '33',
            statuscode: '409',
            meaning: 'Conflict'
        },
        {
            Serialno: '34',
            statuscode: '410',
            meaning: 'Gone'
        },
        ,
        {
            Serialno: '35',
            statuscode: '411',
            meaning: 'Length Required'
        },
        {
            Serialno: '36',
            statuscode: '412',
            meaning: 'Precondition Failed'
        },
        {
            Serialno: '37',
            statuscode: '413',
            meaning: '	Payload Too Large'
        },
        {
            Serialno: '38',
            statuscode: '414',
            meaning: 'URI Too Long'
        },
        {
            Serialno: '39',
            statuscode: '415',
            meaning: 'Unsupported Media Type'
        },
        {
            Serialno: '40',
            statuscode: '416',
            meaning: '	Range Not Satisfiable'
        },
        {
            Serialno: '41',
            statuscode: '417',
            meaning: 'Expectation Failed'
        },
        {
            Serialno: '42',
            statuscode: '418',
            meaning: 'I am a Teapot'
        },
        {
            Serialno: '43',
            statuscode: '421',
            meaning: 'Misdirected Request'
        },
        {
            Serialno: '44',
            statuscode: '422',
            meaning: 'Unprocessable Entity'
        },
        {
            Serialno: '45',
            statuscode: '423',
            meaning: '	Locked'
        },
        {
            Serialno: '46',
            statuscode: '424',
            meaning: '	Failed Dependency'
        },
        {
            Serialno: '47',
            statuscode: '425',
            meaning: 'Too Early'
        },
        {
            Serialno: '48',
            statuscode: '426',
            meaning: 'Upgrade Required'
        },
        {
            Serialno: '49',
            statuscode: '428',
            meaning: '	Precondition Required'
        },
        {
            Serialno: '50',
            statuscode: '429',
            meaning: 'Too Many Requests'
        },
        {
            Serialno: '51',
            statuscode: '431',
            meaning: '	Request Header Fields Too Large'
        },
        {
            Serialno: '27',
            statuscode: '451',
            meaning: 'Unavailable For Legal Reasons'
        },
        {
            Serialno: '28',
            statuscode: '500',
            meaning: 'Internal Server Error'
        },
        {
            Serialno: '29',
            statuscode: '501',
            meaning: 'Not Implemented'
        },
        {
            Serialno: '30',
            statuscode: '502',
            meaning: '	Bad Gateway'
        },
        {
            Serialno: '31',
            statuscode: '503',
            meaning: 'Service Unavailable'
        },
        {
            Serialno: '32',
            statuscode: '504',
            meaning: '	Gateway Timeout'
        },
        {
            Serialno: '33',
            statuscode: '505',
            meaning: 'HTTP Version Not Supported'
        },
        {
            Serialno: '34',
            statuscode: '506',
            meaning: '	Variant Also Negotiates'
        },
        {
            Serialno: '34',
            statuscode: '507',
            meaning: '	Insufficient Storage'
        },
        {
            Serialno: '34',
            statuscode: '508',
            meaning: 'Loop Detected'
        },
        {
            Serialno: '34',
            statuscode: '510',
            meaning: '	Not Extended'
        },
        {
            Serialno: '34',
            statuscode: '511',
            meaning: 'Network Authentication Required'
        },
        
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
            projectimage: "/ProjectimageNetlify/jyotiSearch.png" // this is jyoti search website 
        },
        {
            projectsample: "https://civic-sense.netlify.app",
            projectimage: "/ProjectimageNetlify/civicSense.png" // this civic sense url
        },
        {
            projectsample: "https://keenwatch.netlify.app",
            projectimage: "/ProjectimageNetlify/keenwatch.png" // thsi is watch link
        },
        {
            projectsample: "https://amitjwctc.netlify.app",
            projectimage: "/ProjectimageNetlify/Portfolio.png" // this is portfolio url and image
        },
    ],

    FeaturTechnology: [
        {

            image: "/Featuretechnology/Ai.webp",
            Footer: "Artificial intelligence",
            cardcontent: "",
            projectsample: "https://keenwatch.netlify.app",
        },
        {
            image: "/Featuretechnology/cybersecurity.jpg",
            Footer: "Cyber Security",
            cardcontent: "",
            projectsample: "https://keenwatch.netlify.app",
        },
        {
            image: "/Featuretechnology/Ai.webp",
            Footer: "Artificial Super Intelligence",
            cardcontent: "",
            projectsample: "https://keenwatch.netlify.app",
        }
    ],
    LatestTechnology: [
        {
            image: "/Featuretechnology/java-icon-removebg-preview.png",
            Footer: "Java",
            cardcontent: "",
            projectsample: "https://docs.oracle.com/javase/tutorial/",
        },
        {
            image: "/Featuretechnology/nextjs.png",
            Footer: "Next. js",
            cardcontent: "",
            projectsample: "https://nextjs.org/docs",
        },
        {
            image: "/Featuretechnology/tailwind.png",
            Footer: "Tailwind CSS",
            cardcontent: "",
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

