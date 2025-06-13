
import { Quiz } from '@/types';

export const htmlQuizzes: Quiz[] = [
  {
    id: 'html-beginner',
    title: 'HTML - Beginner',
    description: 'Test your knowledge of basic HTML concepts',
    skillCategory: 'HTML',
    difficulty: 'beginner',
    questions: [
      {
        id: 'html-basic-1',
        question: 'What does HTML stand for?',
        options: [
          'Hyperlinks and Text Markup Language',
          'Home Tool Markup Language',
          'HyperText Markup Language',
          'Hyper Tool Multi Language'
        ],
        correctAnswer: 2,
        explanation: 'HTML stands for HyperText Markup Language.'
      },
      {
        id: 'html-basic-2',
        question: 'Who is the father of HTML?',
        options: [
          'Dennis Ritchie',
          'Tim Berners-Lee',
          'Bjarne Stroustrup',
          'James Gosling'
        ],
        correctAnswer: 1,
        explanation: 'Tim Berners-Lee invented HTML.'
      },
      {
        id: 'html-basic-3',
        question: 'Choose the correct HTML element for the largest heading:',
        options: [
          '<head>',
          '<h1>',
          '<heading>',
          '<h6>'
        ],
        correctAnswer: 1,
        explanation: '<h1> represents the largest heading.'
      },
      {
        id: 'html-basic-4',
        question: 'What is the correct HTML element for inserting a line break?',
        options: [
          '<break>',
          '<lb>',
          '<br>',
          '<line>'
        ],
        correctAnswer: 2,
        explanation: '<br> is the tag for a line break.'
      },
      {
        id: 'html-basic-5',
        question: 'Which tag is used to define a hyperlink?',
        options: [
          '<link>',
          '<a>',
          '<href>',
          '<url>'
        ],
        correctAnswer: 1,
        explanation: 'The <a> tag defines a hyperlink.'
      },
      {
        id: 'html-basic-6',
        question: 'How can you open a link in a new tab/window?',
        options: [
          '<a newtab="true">',
          '<a target="_tab">',
          '<a target="_blank">',
          '<a open="new">'
        ],
        correctAnswer: 2,
        explanation: 'target="_blank" opens the link in a new tab.'
      },
      {
        id: 'html-basic-7',
        question: 'Which tag is used to insert an image?',
        options: [
          '<imglink>',
          '<img>',
          '<picture>',
          '<image>'
        ],
        correctAnswer: 1,
        explanation: '<img> is used to insert images.'
      },
      {
        id: 'html-basic-8',
        question: 'What is the correct syntax to insert an image?',
        options: [
          '<img src="image.jpg">',
          '<img href="image.jpg">',
          '<img src="image.jpg" alt="MyImage">',
          '<image src="image.jpg">'
        ],
        correctAnswer: 2,
        explanation: 'src defines the source and alt gives alternate text.'
      },
      {
        id: 'html-basic-9',
        question: 'How do you create an ordered list in HTML?',
        options: [
          '<ul>',
          '<dl>',
          '<ol>',
          '<list>'
        ],
        correctAnswer: 2,
        explanation: '<ol> defines an ordered (numbered) list.'
      },
      {
        id: 'html-basic-10',
        question: 'Which tag is used to define a table row?',
        options: [
          '<row>',
          '<tr>',
          '<td>',
          '<table>'
        ],
        correctAnswer: 1,
        explanation: '<tr> defines a table row.'
      },
      {
        id: 'html-basic-11',
        question: 'Which tag is used to define table data (a cell)?',
        options: [
          '<data>',
          '<td>',
          '<td>',
          '<th>'
        ],
        correctAnswer: 1,
        explanation: '<td> is used to define a table cell.'
      },
      {
        id: 'html-basic-12',
        question: 'Which HTML tag is used to make text bold?',
        options: [
          '<bold>',
          '<strongtext>',
          '<b>',
          '<black>'
        ],
        correctAnswer: 2,
        explanation: '<b> is used to bold text.'
      },
      {
        id: 'html-basic-13',
        question: 'Which tag makes text italic?',
        options: [
          '<italics>',
          '<em>',
          '<i>',
          '<style>'
        ],
        correctAnswer: 2,
        explanation: '<i> makes text italic.'
      },
      {
        id: 'html-basic-14',
        question: 'How do you add a comment in HTML?',
        options: [
          '/* comment */',
          '<!-- comment -->',
          '# comment',
          '// comment'
        ],
        correctAnswer: 1,
        explanation: 'HTML comments are written in <!-- -->.'
      },
      {
        id: 'html-basic-15',
        question: 'Which HTML element is used for inserting a horizontal line?',
        options: [
          '<line>',
          '<hrline>',
          '<hr>',
          '<horizontal>'
        ],
        correctAnswer: 2,
        explanation: '<hr> is the correct tag.'
      },
      {
        id: 'html-basic-16',
        question: 'Which input type defines a checkbox?',
        options: [
          'type="toggle"',
          'type="checkbox"',
          'type="box"',
          'type="check"'
        ],
        correctAnswer: 1,
        explanation: 'checkbox is the correct type.'
      },
      {
        id: 'html-basic-17',
        question: 'Which tag is used to define a form?',
        options: [
          '<formdata>',
          '<input>',
          '<form>',
          '<dataform>'
        ],
        correctAnswer: 2,
        explanation: '<form> defines an HTML form.'
      },
      {
        id: 'html-basic-18',
        question: 'What is the purpose of the <label> tag?',
        options: [
          'For styling inputs',
          'For user-friendly form fields',
          'For writing tags',
          'For display-only text'
        ],
        correctAnswer: 1,
        explanation: '<label> helps describe form inputs.'
      },
      {
        id: 'html-basic-19',
        question: 'What does the alt attribute provide for images?',
        options: [
          'Image animation',
          'Background color',
          'Alternative text',
          'Hyperlink'
        ],
        correctAnswer: 2,
        explanation: 'alt gives alternative text for accessibility.'
      },
      {
        id: 'html-basic-20',
        question: 'Which tag contains metadata for the document?',
        options: [
          '<head>',
          '<meta>',
          '<head>',
          '<body>'
        ],
        correctAnswer: 0,
        explanation: '<head> holds metadata like title and meta tags.'
      },
      {
        id: 'html-basic-21',
        question: 'Where is the correct place to insert a <title> tag?',
        options: [
          'Inside <body>',
          'Inside <head>',
          'After <html>',
          'Before <head>'
        ],
        correctAnswer: 1,
        explanation: '<title> should be in the <head> section.'
      }
    ]
  },
  {
    id: 'html-intermediate',
    title: 'HTML - Intermediate',
    description: 'Test your intermediate HTML skills',
    skillCategory: 'HTML',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'html-inter-1',
        question: 'What does the <meta charset="UTF-8"> tag specify?',
        options: [
          'Page description',
          'Language code',
          'Character encoding',
          'Page URL'
        ],
        correctAnswer: 2,
        explanation: 'It sets the character encoding for the HTML document.'
      },
      {
        id: 'html-inter-2',
        question: 'Which tag is used to group elements for styling purposes?',
        options: [
          '<group>',
          '<div>',
          '<span>',
          '<section>'
        ],
        correctAnswer: 1,
        explanation: '<div> groups block-level elements.'
      },
      {
        id: 'html-inter-3',
        question: 'What is the difference between <div> and <span>?',
        options: [
          'No difference',
          '<div> is block-level, <span> is inline',
          '<span> is deprecated',
          '<div> is inline'
        ],
        correctAnswer: 1,
        explanation: 'Correct classification of HTML tags.'
      },
      {
        id: 'html-inter-4',
        question: 'How do you create a drop-down list in HTML?',
        options: [
          '<input type="dropdown">',
          '<list>',
          '<select>',
          '<dropdown>'
        ],
        correctAnswer: 2,
        explanation: '<select> creates drop-downs.'
      },
      {
        id: 'html-inter-5',
        question: 'Which tag is used to embed a video file?',
        options: [
          '<media>',
          '<video>',
          '<movie>',
          '<file>'
        ],
        correctAnswer: 1,
        explanation: '<video> embeds video content.'
      },
      {
        id: 'html-inter-6',
        question: 'Which attribute allows form elements to be grouped?',
        options: [
          '<group>',
          '<fieldset>',
          '<formgroup>',
          '<section>'
        ],
        correctAnswer: 1,
        explanation: '<fieldset> groups related form elements.'
      },
      {
        id: 'html-inter-7',
        question: 'What is the purpose of the <legend> tag?',
        options: [
          'Table title',
          'Caption for <fieldset>',
          'Image caption',
          'Div title'
        ],
        correctAnswer: 1,
        explanation: 'It provides a caption for grouped form fields.'
      },
      {
        id: 'html-inter-8',
        question: 'Which HTML5 element defines navigation links?',
        options: [
          '<navigate>',
          '<nav>',
          '<menu>',
          '<link>'
        ],
        correctAnswer: 1,
        explanation: '<nav> defines navigation sections.'
      },
      {
        id: 'html-inter-9',
        question: 'Which tag defines self-contained content like a blog post?',
        options: [
          '<div>',
          '<post>',
          '<article>',
          '<section>'
        ],
        correctAnswer: 2,
        explanation: '<article> is used for independent content.'
      },
      {
        id: 'html-inter-10',
        question: 'How can you ensure an input field is mandatory?',
        options: [
          'validate="true"',
          'required',
          'mandatory',
          'check="true"'
        ],
        correctAnswer: 1,
        explanation: 'required ensures the field must be filled.'
      },
      {
        id: 'html-inter-11',
        question: 'What does the autofocus attribute do?',
        options: [
          'Validates input',
          'Highlights field on error',
          'Automatically focuses on the input field',
          'Submits form'
        ],
        correctAnswer: 2,
        explanation: 'autofocus gives the field initial focus.'
      },
      {
        id: 'html-inter-12',
        question: 'How can you specify multiple file uploads in a file input?',
        options: [
          'files="many"',
          'multiple',
          'multi-upload',
          'input="multi"'
        ],
        correctAnswer: 1,
        explanation: 'The multiple attribute allows selection of multiple files.'
      },
      {
        id: 'html-inter-13',
        question: 'Which tag is used to embed audio in a web page?',
        options: [
          '<sound>',
          '<audio>',
          '<music>',
          '<media>'
        ],
        correctAnswer: 1,
        explanation: '<audio> is the correct tag.'
      },
      {
        id: 'html-inter-14',
        question: 'How can you specify alternate text for an image?',
        options: [
          'title="..."',
          'text="..."',
          'alt="..."',
          'caption="..."'
        ],
        correctAnswer: 2,
        explanation: 'The alt attribute defines alternative text.'
      },
      {
        id: 'html-inter-15',
        question: 'Which tag is used for short quotes in HTML?',
        options: [
          '<cite>',
          '<quote>',
          '<q>',
          '<short>'
        ],
        correctAnswer: 2,
        explanation: '<q> is used for short inline quotes.'
      },
      {
        id: 'html-inter-16',
        question: 'What is the correct syntax for a comment in HTML?',
        options: [
          '// comment',
          '# comment',
          '<!-- comment -->',
          '/* comment */'
        ],
        correctAnswer: 2,
        explanation: 'HTML uses <!-- --> for comments.'
      },
      {
        id: 'html-inter-17',
        question: 'What is the default method for form submission?',
        options: [
          'put',
          'get',
          'post',
          'send'
        ],
        correctAnswer: 1,
        explanation: 'If not specified, forms default to GET method.'
      },
      {
        id: 'html-inter-18',
        question: 'Which tag defines the footer of a document or section?',
        options: [
          '<bottom>',
          '<footer>',
          '<end>',
          '<tail>'
        ],
        correctAnswer: 1,
        explanation: '<footer> is standard HTML5 tag.'
      },
      {
        id: 'html-inter-19',
        question: 'What does the action attribute in <form> specify?',
        options: [
          'JavaScript function',
          'URL to send form data',
          'HTTP method',
          'Submission format'
        ],
        correctAnswer: 1,
        explanation: 'action defines where the form data is submitted.'
      },
      {
        id: 'html-inter-20',
        question: 'What is the role of the <label for="id"> tag?',
        options: [
          'Groups elements',
          'Links label to an input field',
          'Sends data',
          'Sets input type'
        ],
        correctAnswer: 1,
        explanation: 'Improves accessibility by connecting label with form control.'
      },
      {
        id: 'html-inter-21',
        question: 'Which tag defines the main content of a document?',
        options: [
          '<section>',
          '<main>',
          '<body>',
          '<div>'
        ],
        correctAnswer: 1,
        explanation: '<main> is used for primary content.'
      }
    ]
  },
  {
    id: 'html-advanced',
    title: 'HTML - Advanced',
    description: 'Challenge your advanced HTML knowledge',
    skillCategory: 'HTML',
    difficulty: 'advanced',
    questions: [
      {
        id: 'html-adv-1',
        question: 'Which HTML tag is used to define a client-side script?',
        options: [
          '<client>',
          '<js>',
          '<script>',
          '<run>'
        ],
        correctAnswer: 2,
        explanation: 'The <script> tag is used to embed JavaScript or reference external scripts.'
      },
      {
        id: 'html-adv-2',
        question: 'What attribute is used in HTML5 to make an element editable?',
        options: [
          'content="editable"',
          'contenteditable="true"',
          'editable="true"',
          'edit="on"'
        ],
        correctAnswer: 1,
        explanation: 'contenteditable is the correct HTML5 global attribute.'
      },
      {
        id: 'html-adv-3',
        question: 'Which tag defines a container for SVG graphics?',
        options: [
          '<canvas>',
          '<svg>',
          '<vector>',
          '<graphics>'
        ],
        correctAnswer: 1,
        explanation: '<svg> stands for Scalable Vector Graphics.'
      },
      {
        id: 'html-adv-4',
        question: 'What is the purpose of the <noscript> tag?',
        options: [
          'To disable scripts',
          'To provide alternate content if scripts are disabled',
          'To comment out code',
          'To debug code'
        ],
        correctAnswer: 1,
        explanation: '<noscript> is used for browsers that don\'t support or have disabled JavaScript.'
      },
      {
        id: 'html-adv-5',
        question: 'What does the async attribute do in a <script> tag?',
        options: [
          'Delays script execution',
          'Loads script asynchronously with the page',
          'Disables script',
          'Loads after onload'
        ],
        correctAnswer: 1,
        explanation: 'async downloads and executes script without blocking rendering.'
      },
      {
        id: 'html-adv-6',
        question: 'How do you define a responsive image in HTML?',
        options: [
          '<img fluid>',
          'Using srcset and sizes attributes',
          '<img responsive>',
          'With <responsive-img>'
        ],
        correctAnswer: 1,
        explanation: 'srcset and sizes help serve different images for different screens.'
      },
      {
        id: 'html-adv-7',
        question: 'Which tag is used for embedding interactive web content like Flash or PDFs?',
        options: [
          '<embed>',
          '<object>',
          '<iframe>',
          '<source>'
        ],
        correctAnswer: 1,
        explanation: '<object> is flexible for embedding content including media and apps.'
      },
      {
        id: 'html-adv-8',
        question: 'What HTML5 feature allows web applications to work offline?',
        options: [
          'WebSockets',
          'WebGL',
          'Application Cache (Deprecated)',
          'Web Workers'
        ],
        correctAnswer: 2,
        explanation: 'appcache was designed to allow offline use (deprecated in favor of Service Workers).'
      },
      {
        id: 'html-adv-9',
        question: 'Which tag allows the browser to pick the best image file for the user?',
        options: [
          '<img>',
          '<picture>',
          '<source>',
          '<figure>'
        ],
        correctAnswer: 1,
        explanation: '<picture> works with <source> to offer multiple formats/sizes.'
      },
      {
        id: 'html-adv-10',
        question: 'What does the sandbox attribute in an <iframe> do?',
        options: [
          'Loads the page faster',
          'Restricts iframe behavior (e.g., script execution)',
          'Removes CSS',
          'Minimizes iframe'
        ],
        correctAnswer: 1,
        explanation: 'sandbox enhances iframe security by restricting capabilities.'
      },
      {
        id: 'html-adv-11',
        question: 'Which HTML5 input type is used for date selection?',
        options: [
          'type="calendar"',
          'type="date"',
          'type="dateselect"',
          'type="datetime"'
        ],
        correctAnswer: 1,
        explanation: 'type="date" provides a date picker interface.'
      },
      {
        id: 'html-adv-12',
        question: 'What is the purpose of the defer attribute in script tags?',
        options: [
          'Loads script immediately',
          'Executes script after HTML parsing is complete',
          'Disables the script',
          'Executes script before HTML parsing'
        ],
        correctAnswer: 1,
        explanation: 'defer delays script execution until after the document has been parsed.'
      },
      {
        id: 'html-adv-13',
        question: 'Which attribute makes form validation happen without JavaScript?',
        options: [
          'validate="true"',
          'pattern',
          'check',
          'verify'
        ],
        correctAnswer: 1,
        explanation: 'pattern attribute allows regex validation in HTML5.'
      },
      {
        id: 'html-adv-14',
        question: 'What is the purpose of the <template> tag?',
        options: [
          'Creates reusable HTML structure',
          'Defines page layout',
          'Groups form elements',
          'Contains metadata'
        ],
        correctAnswer: 0,
        explanation: '<template> holds HTML that can be cloned and inserted via JavaScript.'
      },
      {
        id: 'html-adv-15',
        question: 'Which attribute controls spell checking in input fields?',
        options: [
          'spell="check"',
          'spellcheck',
          'check-spelling',
          'autocorrect'
        ],
        correctAnswer: 1,
        explanation: 'spellcheck attribute enables or disables spell checking.'
      },
      {
        id: 'html-adv-16',
        question: 'What does the download attribute do in an anchor tag?',
        options: [
          'Increases download speed',
          'Forces file to be downloaded instead of opened',
          'Compresses the file',
          'Encrypts the download'
        ],
        correctAnswer: 1,
        explanation: 'download attribute prompts the browser to download the linked resource.'
      },
      {
        id: 'html-adv-17',
        question: 'Which HTML5 element is used for drawing graphics dynamically?',
        options: [
          '<svg>',
          '<canvas>',
          '<graphics>',
          '<draw>'
        ],
        correctAnswer: 1,
        explanation: '<canvas> provides a drawing surface for JavaScript-based graphics.'
      },
      {
        id: 'html-adv-18',
        question: 'What is the purpose of the hidden attribute?',
        options: [
          'Makes element transparent',
          'Hides element from display',
          'Encrypts element content',
          'Makes element read-only'
        ],
        correctAnswer: 1,
        explanation: 'hidden attribute hides elements from both display and accessibility tools.'
      },
      {
        id: 'html-adv-19',
        question: 'Which meta tag is used for responsive design?',
        options: [
          '<meta name="mobile">',
          '<meta name="viewport">',
          '<meta name="responsive">',
          '<meta name="device">'
        ],
        correctAnswer: 1,
        explanation: 'viewport meta tag controls layout on mobile browsers.'
      },
      {
        id: 'html-adv-20',
        question: 'What does the role attribute provide?',
        options: [
          'CSS styling information',
          'Accessibility information',
          'JavaScript event handling',
          'Security permissions'
        ],
        correctAnswer: 1,
        explanation: 'role attribute provides semantic information for screen readers and assistive technologies.'
      },
      {
        id: 'html-adv-21',
        question: 'Which HTML5 storage method persists data beyond browser sessions?',
        options: [
          'sessionStorage',
          'localStorage',
          'cookies',
          'cache'
        ],
        correctAnswer: 1,
        explanation: 'localStorage persists data until explicitly cleared, unlike sessionStorage.'
      }
    ]
  }
];
