
import { Quiz } from '@/types';

export const cssQuizzes: Quiz[] = [
  {
    id: 'css-beginner',
    title: 'CSS - Beginner',
    description: 'Test your knowledge of basic CSS concepts',
    skillCategory: 'CSS',
    difficulty: 'beginner',
    questions: [
      {
        id: 'css-basic-1',
        question: 'What does CSS stand for?',
        options: [
          'Cascading Style System',
          'Cascading Style Sheets',
          'Creative Style Sheets',
          'Computer Style Sheets'
        ],
        correctAnswer: 1,
        explanation: 'CSS is used to define the style of HTML elements.'
      },
      {
        id: 'css-basic-2',
        question: 'Which property is used to change the background color in CSS?',
        options: [
          'bg-color',
          'background-color',
          'background-color',
          'color'
        ],
        correctAnswer: 1,
        explanation: 'background-color defines the background color of an element.'
      },
      {
        id: 'css-basic-3',
        question: 'Which of the following CSS properties is used to change the text color?',
        options: [
          'font-color',
          'color',
          'text-color',
          'font-style'
        ],
        correctAnswer: 1,
        explanation: 'color changes the color of the text.'
      },
      {
        id: 'css-basic-4',
        question: 'What is the default value of the position property in CSS?',
        options: [
          'relative',
          'static',
          'absolute',
          'fixed'
        ],
        correctAnswer: 1,
        explanation: 'The default value for position is static, meaning no special positioning.'
      },
      {
        id: 'css-basic-5',
        question: 'Which of the following units can be used to set font size in CSS?',
        options: [
          'px',
          'px, %, em, rem',
          'em',
          'rem'
        ],
        correctAnswer: 1,
        explanation: 'You can use multiple units for setting font sizes, including px, %, em, and rem.'
      },
      {
        id: 'css-basic-6',
        question: 'How do you select all paragraphs inside a div element in CSS?',
        options: [
          'div p',
          'div p { ... }',
          'div + p',
          'div > p'
        ],
        correctAnswer: 1,
        explanation: 'div p selects all <p> elements inside a <div>.'
      },
      {
        id: 'css-basic-7',
        question: 'Which property is used to set the space between lines of text in CSS?',
        options: [
          'line-height',
          'line-height',
          'text-indent',
          'letter-spacing'
        ],
        correctAnswer: 0,
        explanation: 'line-height defines the space between lines of text.'
      },
      {
        id: 'css-basic-8',
        question: 'Which CSS property controls the text size?',
        options: [
          'font-family',
          'font-size',
          'text-size',
          'font-style'
        ],
        correctAnswer: 1,
        explanation: 'font-size controls the size of the text.'
      },
      {
        id: 'css-basic-9',
        question: 'How can you make a list not display bullet points in CSS?',
        options: [
          'list-style-type: none',
          'list-style-type: none',
          'display: none',
          'list-style: none'
        ],
        correctAnswer: 0,
        explanation: 'list-style-type: none removes bullet points.'
      },
      {
        id: 'css-basic-10',
        question: 'Which property is used to change the font of text in CSS?',
        options: [
          'font-family',
          'font-family',
          'font-type',
          'text-font'
        ],
        correctAnswer: 0,
        explanation: 'font-family defines the font of the text.'
      },
      {
        id: 'css-basic-11',
        question: 'How can you center a block element horizontally?',
        options: [
          'margin: 0 auto',
          'margin: 0 auto',
          'align: center',
          'text-align: center'
        ],
        correctAnswer: 0,
        explanation: 'margin: 0 auto centers a block-level element.'
      },
      {
        id: 'css-basic-12',
        question: 'Which property is used to make text bold in CSS?',
        options: [
          'font-weight',
          'font-weight',
          'font-style',
          'text-style'
        ],
        correctAnswer: 0,
        explanation: 'font-weight is used to make the text bold.'
      },
      {
        id: 'css-basic-13',
        question: 'What does the float property do in CSS?',
        options: [
          'Aligns elements vertically',
          'Clears other elements',
          'Makes an element float left or right, allowing text to wrap around it',
          'Moves an element to the top of the page'
        ],
        correctAnswer: 2,
        explanation: 'The float property allows an element to float on either the left or right side, and text or inline elements wrap around it.'
      },
      {
        id: 'css-basic-14',
        question: 'Which CSS property is used to add space between elements?',
        options: [
          'padding',
          'margin',
          'spacing',
          'distance'
        ],
        correctAnswer: 1,
        explanation: 'margin creates space outside of an element.'
      },
      {
        id: 'css-basic-15',
        question: 'What does the display: block property do?',
        options: [
          'Makes an element a block-level element',
          'Displays the element as a block, meaning it takes up the full width',
          'Makes an element inline',
          'None of the above'
        ],
        correctAnswer: 1,
        explanation: 'display: block makes an element behave like a block-level element, taking up the full width of its container.'
      },
      {
        id: 'css-basic-16',
        question: 'How can you create a border around an element in CSS?',
        options: [
          'border-width: 1px',
          'border: 1px solid black',
          'border-style: solid',
          'outline: 1px solid black'
        ],
        correctAnswer: 1,
        explanation: 'border: 1px solid black creates a 1px solid black border around the element.'
      },
      {
        id: 'css-basic-17',
        question: 'What does the overflow property do?',
        options: [
          'Hides overflow content',
          'Manages how excess content is handled (hidden, scroll, auto)',
          'Defines content height',
          'Forces a line break'
        ],
        correctAnswer: 1,
        explanation: 'overflow controls the visibility of content that over flows an element.'
      },
      {
        id: 'css-basic-18',
        question: 'Which of the following is a valid CSS color?',
        options: [
          '#ffffff',
          '#ffffff, rgb(255, 255, 255), rgba(255, 255, 255, 0.5)',
          'rgb(255, 255, 255)',
          '#FFFFFFF'
        ],
        correctAnswer: 1,
        explanation: 'CSS supports multiple color formats: hex, rgb, and rgba.'
      },
      {
        id: 'css-basic-19',
        question: 'Which of the following is used to group multiple CSS selectors?',
        options: [
          ',',
          ',',
          ';',
          '&'
        ],
        correctAnswer: 0,
        explanation: 'The comma (,) allows you to group multiple selectors in CSS.'
      },
      {
        id: 'css-basic-20',
        question: 'Which CSS property is used to set the width of an element?',
        options: [
          'height',
          'width',
          'length',
          'size'
        ],
        correctAnswer: 1,
        explanation: 'The width property controls the width of an element.'
      },
      {
        id: 'css-basic-21',
        question: 'What is the purpose of the z-index property in CSS?',
        options: [
          'To control the size of elements',
          'To control the stacking order of elements',
          'To hide an element',
          'To make an element clickable'
        ],
        correctAnswer: 1,
        explanation: 'z-index controls the stacking order of positioned elements.'
      }
    ]
  },
  {
    id: 'css-intermediate',
    title: 'CSS - Intermediate',
    description: 'Test your intermediate CSS skills',
    skillCategory: 'CSS',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'css-inter-1',
        question: 'Which CSS property is used to make a box flexible in a flex container?',
        options: [
          'box-flex',
          'flex-grow',
          'flex',
          'flex-basis'
        ],
        correctAnswer: 2,
        explanation: 'flex is shorthand for flex-grow, flex-shrink, and flex-basis.'
      },
      {
        id: 'css-inter-2',
        question: 'What does position: relative do?',
        options: [
          'Places the element outside the document flow',
          'Offsets the element relative to its normal position',
          'Makes the element fixed',
          'Pins it to parent'
        ],
        correctAnswer: 1,
        explanation: 'relative offsets the element from its normal static position.'
      },
      {
        id: 'css-inter-3',
        question: 'Which value of display is used for a grid layout?',
        options: [
          'flex',
          'table',
          'grid',
          'inline-grid'
        ],
        correctAnswer: 2,
        explanation: 'display: grid enables grid layout.'
      },
      {
        id: 'css-inter-4',
        question: 'Which property is used to align items along the main axis in flexbox?',
        options: [
          'align-items',
          'justify-content',
          'flex-align',
          'main-axis-align'
        ],
        correctAnswer: 1,
        explanation: 'justify-content aligns items on the main axis.'
      },
      {
        id: 'css-inter-5',
        question: 'Which property changes the stacking order of elements?',
        options: [
          'order',
          'float',
          'z-index',
          'stack'
        ],
        correctAnswer: 2,
        explanation: 'z-index affects stacking order.'
      },
      {
        id: 'css-inter-6',
        question: 'How do you make a responsive design in CSS?',
        options: [
          'Use <table>',
          'Use media queries',
          'Set fixed widths',
          'Use IDs'
        ],
        correctAnswer: 1,
        explanation: 'Media queries adjust layout for screen size.'
      },
      {
        id: 'css-inter-7',
        question: 'What does inherit mean in CSS?',
        options: [
          'Apply from parent',
          'Inherit value from parent element',
          'Ignore styling',
          'Default setting'
        ],
        correctAnswer: 1,
        explanation: 'inherit takes the computed value from the parent.'
      },
      {
        id: 'css-inter-8',
        question: 'Which CSS unit is relative to the root element?',
        options: [
          'em',
          'rem',
          'px',
          '%'
        ],
        correctAnswer: 1,
        explanation: 'rem is based on the root\'s font size.'
      },
      {
        id: 'css-inter-9',
        question: 'Which of the following pseudo-classes targets the first child?',
        options: [
          ':first',
          ':first-child',
          ':firstElement',
          ':nth'
        ],
        correctAnswer: 1,
        explanation: ':first-child selects the first child of its parent.'
      },
      {
        id: 'css-inter-10',
        question: 'Which CSS property affects text spacing horizontally?',
        options: [
          'line-height',
          'letter-spacing',
          'word-wrap',
          'text-align'
        ],
        correctAnswer: 1,
        explanation: 'letter-spacing changes the space between letters.'
      },
      {
        id: 'css-inter-11',
        question: 'Which property is used for rounded corners?',
        options: [
          'corner-radius',
          'border-radius',
          'round',
          'radius'
        ],
        correctAnswer: 1,
        explanation: 'border-radius defines corner curvature.'
      },
      {
        id: 'css-inter-12',
        question: 'What does visibility: hidden do?',
        options: [
          'Deletes the element',
          'Hides it but keeps its space',
          'Makes it transparent',
          'Shrinks it to zero'
        ],
        correctAnswer: 1,
        explanation: 'visibility: hidden hides element but maintains layout.'
      },
      {
        id: 'css-inter-13',
        question: 'What is the effect of opacity: 0?',
        options: [
          'Makes text bold',
          'Makes the element fully transparent',
          'Collapses it',
          'None'
        ],
        correctAnswer: 1,
        explanation: 'opacity: 0 makes the element invisible.'
      },
      {
        id: 'css-inter-14',
        question: 'What does object-fit: cover do to an image?',
        options: [
          'Shrinks it',
          'Fills the container, cropping if necessary',
          'Adds padding',
          'Adds border'
        ],
        correctAnswer: 1,
        explanation: 'cover ensures the image fills the box.'
      },
      {
        id: 'css-inter-15',
        question: 'Which media query is used for screens less than 600px?',
        options: [
          '@media screen (max:600px)',
          '@media screen and (max-width: 600px)',
          '@media(max:600px)',
          '@media only'
        ],
        correctAnswer: 1,
        explanation: 'Correct syntax includes and (max-width: 600px).'
      },
      {
        id: 'css-inter-16',
        question: 'What does flex-direction: column do?',
        options: [
          'Aligns horizontally',
          'Arranges items vertically',
          'Removes gaps',
          'Adds padding'
        ],
        correctAnswer: 1,
        explanation: 'It makes flex children stack vertically.'
      },
      {
        id: 'css-inter-17',
        question: 'What value of position lets you scroll the page while element stays at the top?',
        options: [
          'relative',
          'sticky',
          'fixed',
          'absolute'
        ],
        correctAnswer: 1,
        explanation: 'sticky behaves relative until scrolled to its threshold.'
      },
      {
        id: 'css-inter-18',
        question: 'Which CSS property sets the minimum width of an element?',
        options: [
          'width',
          'min-width',
          'padding',
          'max-width'
        ],
        correctAnswer: 1,
        explanation: 'min-width prevents shrinking below a point.'
      },
      {
        id: 'css-inter-19',
        question: 'Which property is used to transform an element (scale, rotate)?',
        options: [
          'transform',
          'transform',
          'translate',
          'skew'
        ],
        correctAnswer: 0,
        explanation: 'transform enables geometric transformations.'
      },
      {
        id: 'css-inter-20',
        question: 'What does box-sizing: border-box do?',
        options: [
          'Ignores padding',
          'Includes padding and border in total width/height',
          'Adds margins',
          'Only affects borders'
        ],
        correctAnswer: 1,
        explanation: 'Prevents layout overflow by including border/padding.'
      },
      {
        id: 'css-inter-21',
        question: 'How to center an absolutely positioned div?',
        options: [
          'margin: auto',
          'top: 50%; left: 50%; transform: translate(-50%, -50%)',
          'text-align: center',
          'float: center'
        ],
        correctAnswer: 1,
        explanation: 'This combination centers absolutely positioned elements.'
      }
    ]
  },
  {
    id: 'css-advanced',
    title: 'CSS - Advanced',
    description: 'Challenge your advanced CSS knowledge',
    skillCategory: 'CSS',
    difficulty: 'advanced',
    questions: [
      {
        id: 'css-adv-1',
        question: 'What is the specificity of #id .class div?',
        options: [
          '0,1,1,1',
          '1,1,1',
          '0,1,0,2',
          '1,0,2'
        ],
        correctAnswer: 0,
        explanation: 'ID (1), class (1), element (1) = 0,1,1,1 specificity.'
      },
      {
        id: 'css-adv-2',
        question: 'Which CSS property creates a new stacking context?',
        options: [
          'position: relative',
          'z-index (with positioned element)',
          'display: block',
          'float: left'
        ],
        correctAnswer: 1,
        explanation: 'z-index on positioned elements creates stacking contexts.'
      },
      {
        id: 'css-adv-3',
        question: 'What does the contain property do in CSS?',
        options: [
          'Contains floated elements',
          'Isolates elements for performance optimization',
          'Contains text overflow',
          'Contains margin collapse'
        ],
        correctAnswer: 1,
        explanation: 'contain helps browsers optimize rendering by isolating elements.'
      },
      {
        id: 'css-adv-4',
        question: 'Which CSS function calculates values dynamically?',
        options: [
          'var()',
          'calc()',
          'attr()',
          'counter()'
        ],
        correctAnswer: 1,
        explanation: 'calc() performs mathematical calculations in CSS.'
      },
      {
        id: 'css-adv-5',
        question: 'What is the difference between em and rem?',
        options: [
          'No difference',
          'em is relative to parent, rem to root',
          'rem is deprecated',
          'em is larger'
        ],
        correctAnswer: 1,
        explanation: 'em is relative to parent element, rem to root element.'
      },
      {
        id: 'css-adv-6',
        question: 'Which CSS property controls how flex items wrap?',
        options: [
          'flex-wrap',
          'flex-flow',
          'wrap',
          'flex-direction'
        ],
        correctAnswer: 0,
        explanation: 'flex-wrap controls whether flex items wrap to new lines.'
      },
      {
        id: 'css-adv-7',
        question: 'What does the :nth-child(2n+1) selector target?',
        options: [
          'Every second element',
          'Odd-numbered elements',
          'Even-numbered elements',
          'First and third elements'
        ],
        correctAnswer: 1,
        explanation: '2n+1 selects odd-numbered child elements (1, 3, 5, etc.).'
      },
      {
        id: 'css-adv-8',
        question: 'Which CSS property creates CSS custom properties?',
        options: [
          'var()',
          '--property-name',
          'custom-property',
          '@property'
        ],
        correctAnswer: 1,
        explanation: 'CSS custom properties are defined with -- prefix.'
      },
      {
        id: 'css-adv-9',
        question: 'What does the clip-path property do?',
        options: [
          'Clips text',
          'Creates geometric shapes by clipping elements',
          'Clips images',
          'Creates animations'
        ],
        correctAnswer: 1,
        explanation: 'clip-path creates complex shapes by clipping element regions.'
      },
      {
        id: 'css-adv-10',
        question: 'Which CSS feature allows conditional styling?',
        options: [
          '@supports',
          '@media',
          '@import',
          '@keyframes'
        ],
        correctAnswer: 0,
        explanation: '@supports applies styles based on feature support.'
      },
      {
        id: 'css-adv-11',
        question: 'What is the purpose of the will-change property?',
        options: [
          'Changes colors',
          'Hints to browser about upcoming changes',
          'Changes layout',
          'Changes fonts'
        ],
        correctAnswer: 1,
        explanation: 'will-change optimizes performance by hinting at future changes.'
      },
      {
        id: 'css-adv-12',
        question: 'Which CSS grid property defines the size of grid tracks?',
        options: [
          'grid-template',
          'grid-template-columns',
          'grid-auto-rows',
          'grid-gap'
        ],
        correctAnswer: 1,
        explanation: 'grid-template-columns defines column track sizes.'
      },
      {
        id: 'css-adv-13',
        question: 'What does the isolation property do?',
        options: [
          'Isolates elements from parent',
          'Creates new stacking context',
          'Isolates colors',
          'Isolates fonts'
        ],
        correctAnswer: 1,
        explanation: 'isolation: isolate creates a new stacking context.'
      },
      {
        id: 'css-adv-14',
        question: 'Which CSS property controls subgrid behavior?',
        options: [
          'display: subgrid',
          'grid-template: subgrid',
          'subgrid: inherit',
          'grid: subgrid'
        ],
        correctAnswer: 1,
        explanation: 'grid-template-rows/columns: subgrid creates subgrids.'
      },
      {
        id: 'css-adv-15',
        question: 'What is the cascade in CSS?',
        options: [
          'Waterfall effect',
          'Algorithm determining which styles apply',
          'Animation type',
          'Layout method'
        ],
        correctAnswer: 1,
        explanation: 'The cascade determines which styles take precedence.'
      },
      {
        id: 'css-adv-16',
        question: 'Which CSS property creates masking effects?',
        options: [
          'mask',
          'clip',
          'opacity',
          'filter'
        ],
        correctAnswer: 0,
        explanation: 'mask property creates complex masking effects.'
      },
      {
        id: 'css-adv-17',
        question: 'What does the aspect-ratio property do?',
        options: [
          'Sets width/height ratio',
          'Controls image quality',
          'Sets font ratio',
          'Controls margins'
        ],
        correctAnswer: 0,
        explanation: 'aspect-ratio maintains consistent width-to-height ratios.'
      },
      {
        id: 'css-adv-18',
        question: 'Which CSS function references element attributes?',
        options: [
          'var()',
          'attr()',
          'calc()',
          'url()'
        ],
        correctAnswer: 1,
        explanation: 'attr() function accesses HTML attribute values.'
      },
      {
        id: 'css-adv-19',
        question: 'What is the difference between logical and physical properties?',
        options: [
          'No difference',
          'Logical properties adapt to writing direction',
          'Physical properties are deprecated',
          'Logical properties are faster'
        ],
        correctAnswer: 1,
        explanation: 'Logical properties (margin-inline-start) adapt to text direction.'
      },
      {
        id: 'css-adv-20',
        question: 'Which CSS property creates scroll-driven animations?',
        options: [
          'animation-timeline',
          'scroll-behavior',
          'animation-scroll',
          'scroll-animation'
        ],
        correctAnswer: 0,
        explanation: 'animation-timeline can link animations to scroll progress.'
      },
      {
        id: 'css-adv-21',
        question: 'What does the inert attribute provide for CSS?',
        options: [
          'Styling inactive elements',
          'Makes elements non-interactive',
          'Creates inert animations',
          'Inert positioning'
        ],
        correctAnswer: 1,
        explanation: 'inert makes elements and their descendants non-interactive.'
      }
    ]
  }
];
