(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{135:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return a?r.a.createElement(d,s(s({ref:t},b),{},{components:a})):r.a.createElement(d,s({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(6),i=(a(0),a(135)),o={id:"contributing",title:"Contributing"},s={unversionedId:"developer/contributing",id:"developer/contributing",isDocsHomePage:!1,title:"Contributing",description:"Contributing to Erxes",source:"@site/docs/developer/contributing.md",permalink:"/developer/contributing",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/developer/contributing.md",lastUpdatedBy:"Jason-2020",lastUpdatedAt:1590116873,sidebar:"docs",previous:{title:"Developing erxes",permalink:"/developer/developer"},next:{title:"GraphQL API Schema",permalink:"/developer/graphql-api"}},l=[{value:"Contributing to Erxes",id:"contributing-to-erxes",children:[{value:"Found a Bug?",id:"found-a-bug",children:[]},{value:"Missing a Feature?",id:"missing-a-feature",children:[]}]},{value:"Submission Guidelines",id:"submission-guidelines",children:[{value:"Submitting an Issue",id:"submitting-an-issue",children:[]},{value:"Your First Contribution",id:"your-first-contribution",children:[]},{value:"Submitting a Pull Request (PR)",id:"submitting-a-pull-request-pr",children:[]}]},{value:"Coding Standards",id:"coding-standards",children:[{value:"Common rules",id:"common-rules",children:[]},{value:"Comments",id:"comments",children:[]},{value:"React",id:"react",children:[]},{value:"Graphql",id:"graphql",children:[]},{value:"Test",id:"test",children:[]}]},{value:"Commit Message Guidelines",id:"commit-message-guidelines",children:[{value:"Commit Message Format",id:"commit-message-format",children:[]},{value:"Revert",id:"revert",children:[]},{value:"Type",id:"type",children:[]},{value:"Scope",id:"scope",children:[]},{value:"Subject",id:"subject",children:[]},{value:"Body",id:"body",children:[]},{value:"Footer",id:"footer",children:[]},{value:"Examples",id:"examples",children:[]}]},{value:"Swag for Contributions",id:"swag-for-contributions",children:[]}],b={rightToc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"contributing-to-erxes"},"Contributing to Erxes"),Object(i.b)("p",null,"We would love for you to contribute to Erxes and help make it even better than it is today! As a contributor, here are the guidelines we would like you to follow:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#found-a-bug"}),"Issues and Bugs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#missing-a-feature"}),"Feature Requests")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#submission-guidelines"}),"Submission Guidelines")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#coding-standards"}),"Coding Standards")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#commit-message-guidelines"}),"Commit Message Guidelines")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#swag-for-contributions"}),"Swag for Contributions"))),Object(i.b)("h3",{id:"found-a-bug"},"Found a Bug?"),Object(i.b)("p",null,"If you find a bug in the source code, you can help us by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#submitting-an-issue"}),"submitting an issue")," to our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/erxes/erxes"}),"GitHub Repository"),". Even better, you can ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#submitting-a-pull-request-pr"}),"submit a Pull Request")," with a fix."),Object(i.b)("h3",{id:"missing-a-feature"},"Missing a Feature?"),Object(i.b)("p",null,"You can request a new feature by ","[submitting an issue]"," to our GitHub Repository. If you would like to ",Object(i.b)("em",{parentName:"p"},"implement")," a new feature, please submit an issue with a proposal for your work first, to be sure that we can use it. Please consider what kind of change it is:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"For a ",Object(i.b)("strong",{parentName:"p"},"Major Feature"),", first open an issue and outline your proposal so that it can be discussed. This will also allow us to better coordinate our efforts, prevent duplication of work, and help you to craft the change so that it is successfully accepted into the project.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Small Features")," can be crafted and directly ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#submitting-a-pull-request-pr"}),"submitted as a Pull Request"),"."))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"submission-guidelines"},"Submission Guidelines"),Object(i.b)("h3",{id:"submitting-an-issue"},"Submitting an Issue"),Object(i.b)("p",null,"Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available."),Object(i.b)("p",null,"We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. In order to reproduce bugs, we will systematically ask you to provide a minimal reproduction. Having a minimal reproducible scenario gives us a wealth of important information without going back & forth to you with additional questions."),Object(i.b)("p",null,"A minimal reproduction allows us to quickly confirm a bug (or point out a coding problem) as well as confirm that we are fixing the right problem."),Object(i.b)("p",null,"We will be insisting on a minimal reproduction scenario in order to save maintainers time and ultimately be able to fix more bugs. Interestingly, from our experience users often find coding problems themselves while preparing a minimal reproduction. We understand that sometimes it might be hard to extract essential bits of code from a larger code-base but we really need to isolate the problem before we can fix it."),Object(i.b)("p",null,"Unfortunately, we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you we are going to close an issue that doesn't have enough info to be reproduced."),Object(i.b)("p",null,"You can file new issues by selecting from our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/erxes/erxes/issues/new/choose"}),"new issue templates")," and filling out the issue template."),Object(i.b)("h3",{id:"your-first-contribution"},"Your First Contribution"),Object(i.b)("p",null,"Working on your first Pull Request? You can learn how from this ",Object(i.b)("em",{parentName:"p"},"free")," series, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github"}),"How to Contribute to an Open Source Project on GitHub"),"."),Object(i.b)("h3",{id:"submitting-a-pull-request-pr"},"Submitting a Pull Request (PR)"),Object(i.b)("p",null,"The bigger the pull request, the longer it will take to review and merge. Try to break down large pull requests in smaller chunks that are easier to review and merge.\nIt is also always helpful to have some context for your pull request. What was the purpose? Why does it matter to you?"),Object(i.b)("p",null,"Before you submit your Pull Request (PR) consider the following guidelines:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Search ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/erxes/erxes/pulls"}),"GitHub")," for an open or closed PR that relates to your submission. You don't want to duplicate effort.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add. Discussing the design up front helps to ensure that we're ready to accept your work.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Fork the erxes/erxes repo.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make your changes in a new git branch:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Note: Please create new branch from develop branch")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git checkout -b my-fix-branch develop\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create your patch, ",Object(i.b)("strong",{parentName:"p"},"including appropriate test cases"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Follow our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#coding-standards"}),"Coding Standards"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run the full erxes test suite, as described in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"developer documentation"),", and ensure that all tests pass.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Commit your changes using a descriptive commit message that follows our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#commit-message-format"}),"commit message conventions"),". Adherence to these conventions is necessary because release notes are automatically generated from these messages."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git commit -a\n")),Object(i.b)("p",{parentName:"li"},'Note: the optional commit -a command line option will automatically "add" and "rm" edited files.')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Push your branch to GitHub:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git push origin my-fix-branch\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In GitHub, send a pull request to ",Object(i.b)("inlineCode",{parentName:"p"},"erxes:develop"),"."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If we suggest changes then:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Make the required updates."),Object(i.b)("li",{parentName:"ul"},"Re-run the erxes test suites to ensure tests are still passing."),Object(i.b)("li",{parentName:"ul"},"Rebase your branch and force push to your GitHub repository (this will update your Pull Request):")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git rebase master -i\ngit push -f\n")))),Object(i.b)("p",null,"That's it! Thank you for your contribution!"),Object(i.b)("h4",{id:"after-your-pull-request-is-merged"},"After your pull request is merged"),Object(i.b)("p",null,"After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git push origin --delete my-fix-branch\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Check out the develop branch:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git checkout develop -f\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Delete the local branch:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git branch -D my-fix-branch\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Update your develop with the latest upstream version:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git pull --ff upstream develop\n")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"coding-standards"},"Coding Standards"),Object(i.b)("h3",{id:"common-rules"},"Common rules"),Object(i.b)("p",null,"To ensure consistency throughout the source code, keep these rules in mind as you are working:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"All features or bug fixes ",Object(i.b)("strong",{parentName:"p"},"must be tested")," by one or more specs (unit-tests).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We follow ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/felixge/node-style-guide"}),"https://github.com/felixge/node-style-guide"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/prettier/prettier"}),"https://github.com/prettier/prettier")," code formatter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"File names must be in camel case"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// right\nknowledgeBaseArticles;\n\n// wrong\nknowledgeBase_Articles;\n\n// wrong\nKnowldegBase_articles;\n")))),Object(i.b)("h3",{id:"comments"},"Comments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"/** ... */")," for multiline comments. Include a description, specify types and values for all parameters and return values."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// bad\n// make() returns a new element\n// based on the passed in tag name\n//\n// @param {String} tag\n// @return {Element} element\nfunction make(tag) {\n  // ...stuff...\n\n  return element;\n}\n\n// good\n/**\n * make() returns a new element\n * based on the passed in tag name\n *\n * @param {String} tag\n * @return {Element} element\n */\nfunction make(tag) {\n  // ...stuff...\n\n  return element;\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"//")," for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// bad\nvar active = true; // is current tab\n\n// good\n// is current tab\nvar active = true;\n\n// bad\nfunction getType() {\n  console.log("fetching type...");\n  // set the default type to \'no type\'\n  var type = this._type || "no type";\n\n  return type;\n}\n\n// good\nfunction getType() {\n  console.log("fetching type...");\n\n  // set the default type to \'no type\'\n  var type = this._type || "no type";\n\n  return type;\n}\n')))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Prefixing your comments with ",Object(i.b)("inlineCode",{parentName:"p"},"FIXME")," or ",Object(i.b)("inlineCode",{parentName:"p"},"TODO")," helps other developers quickly understand if you're pointing out a problem that needs to be revisited, or if you're suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are ",Object(i.b)("inlineCode",{parentName:"p"},"FIXME -- need to figure this out")," or ",Object(i.b)("inlineCode",{parentName:"p"},"TODO -- need to implement"),"."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Use ",Object(i.b)("inlineCode",{parentName:"li"},"// FIXME"),": to annotate problems")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function Calculator() {\n  // FIXME: shouldn't use a global here\n  total = 0;\n\n  return this;\n}\n")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Use ",Object(i.b)("inlineCode",{parentName:"li"},"// TODO"),": to annotate solutions to problems")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function Calculator() {\n  // TODO: total should be configurable by an options param\n  this.total = 0;\n\n  return this;\n}\n")))),Object(i.b)("h3",{id:"react"},"React"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Extension must be ",Object(i.b)("inlineCode",{parentName:"li"},".js")," not ",Object(i.b)("inlineCode",{parentName:"li"},".jsx")),Object(i.b)("li",{parentName:"ul"},"Put data fetching logics in containers folder"),Object(i.b)("li",{parentName:"ul"},"Put static representations (dumb components) in components folder"),Object(i.b)("li",{parentName:"ul"},"Put graphql queries, mutations and subscriptions in separate file")),Object(i.b)("h3",{id:"graphql"},"Graphql"),Object(i.b)("h4",{id:"naming-queries"},"Naming queries"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"{model name camel case}{action name}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"List query (brands, conversations, etc...)"),Object(i.b)("li",{parentName:"ul"},"Detail query (brandDetail, conversationDetail, etc...)")),Object(i.b)("h4",{id:"naming-mutations"},"Naming mutations"),Object(i.b)("p",null,"{model name camel case}{plural}{action name}"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create mutation (brandsAdd, channelsAdd, etc...)"),Object(i.b)("li",{parentName:"ul"},"Update mutation (brandsEdit, channelsEdit, etc...)"),Object(i.b)("li",{parentName:"ul"},"Delete mutation (brandsRemove, channelsRemove, etc..)")),Object(i.b)("h4",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Mutations must be easily testable. Write utils functions in associated models"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"class Conversation {\n  static createConversation() {\n    // ...\n  }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Keep mutations and queries files simple. Write utils or helper functions in associated models")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Every mutation must have unit tests"))),Object(i.b)("h3",{id:"test"},"Test"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://facebook.github.io/jest"}),"https://facebook.github.io/jest"))),Object(i.b)("h2",{id:"commit-message-guidelines"},"Commit Message Guidelines"),Object(i.b)("p",null,"We have very precise rules over how our git commit messages can be formatted. This leads to ",Object(i.b)("strong",{parentName:"p"},"more readable messages")," that are easy to follow when looking through the ",Object(i.b)("strong",{parentName:"p"},"project history"),". But also, we use the git commit messages to ",Object(i.b)("strong",{parentName:"p"},"generate the erxes change log"),"."),Object(i.b)("p",null,"We use Angular convention ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-angular/README.md"}),"preset.")),Object(i.b)("h3",{id:"commit-message-format"},"Commit Message Format"),Object(i.b)("p",null,"A commit message consists of a ",Object(i.b)("strong",{parentName:"p"},"header"),", ",Object(i.b)("strong",{parentName:"p"},"body")," and ",Object(i.b)("strong",{parentName:"p"},"footer"),". The header has a ",Object(i.b)("strong",{parentName:"p"},"type"),", ",Object(i.b)("strong",{parentName:"p"},"scope")," and ",Object(i.b)("strong",{parentName:"p"},"subject"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"<type>(<scope>): <subject>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n")),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"header")," is mandatory and the ",Object(i.b)("strong",{parentName:"p"},"scope")," of the header is optional."),Object(i.b)("p",null,"The footer should contain a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/articles/closing-issues-via-commit-messages/"}),"closing reference to an issue")," if any."),Object(i.b)("h3",{id:"revert"},"Revert"),Object(i.b)("p",null,"If the commit reverts a previous commit, it should begin with ",Object(i.b)("inlineCode",{parentName:"p"},"revert:"),", followed by the header of the reverted commit. In the body it should say: ",Object(i.b)("inlineCode",{parentName:"p"},"This reverts commit <hash>."),", where the hash is the SHA of the commit being reverted."),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("p",null,"Must be one of the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"feat"),": A new feature"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"fix"),": A bug fix"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"perf"),": A code change that improves performance"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"refactor"),": A code change that neither fixes a bug nor adds a feature"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style"),": Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"test"),": Adding missing tests or correcting existing tests")),Object(i.b)("p",null,"If the prefix is ",Object(i.b)("inlineCode",{parentName:"p"},"feat"),", ",Object(i.b)("inlineCode",{parentName:"p"},"fix")," or ",Object(i.b)("inlineCode",{parentName:"p"},"perf"),", it will appear in the changelog. However if there is any ",Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"BREAKING CHANGE")),", the commit will always appear in the changelog."),Object(i.b)("h3",{id:"scope"},"Scope"),Object(i.b)("p",null,"The scope could be anything specifying place of the commit change. For example ",Object(i.b)("inlineCode",{parentName:"p"},"insights"),", ",Object(i.b)("inlineCode",{parentName:"p"},"deal"),", ",Object(i.b)("inlineCode",{parentName:"p"},"inbox"),", etc..."),Object(i.b)("h3",{id:"subject"},"Subject"),Object(i.b)("p",null,"The subject contains succinct description of the change:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'use the imperative, present tense: "change" not "changed" nor "changes"'),Object(i.b)("li",{parentName:"ul"},"don't capitalize first letter"),Object(i.b)("li",{parentName:"ul"},"no dot (.) at the end")),Object(i.b)("h3",{id:"body"},"Body"),Object(i.b)("p",null,"Just as in the ",Object(i.b)("strong",{parentName:"p"},"subject"),', use the imperative, present tense: "change" not "changed" nor "changes".\nThe body should include the motivation for the change and contrast this with previous behavior.'),Object(i.b)("h3",{id:"footer"},"Footer"),Object(i.b)("p",null,"The footer should contain any information about ",Object(i.b)("strong",{parentName:"p"},"Breaking Changes")," and is also the place to\nreference GitHub issues that this commit ",Object(i.b)("strong",{parentName:"p"},"Closes"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Breaking Changes")," should start with the word ",Object(i.b)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," with a space or two newlines. The rest of the commit message is then used for this."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("p",null,'Appears under "Features" header, inbox subheader:'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"feat(inbox): add 'graphiteWidth' option\n")),Object(i.b)("p",null,'Appears under "Bug Fixes" header, graphite subheader, with a link to issue #28:'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"fix(graphite): stop graphite breaking when width < 0.1\nCloses #28\n")),Object(i.b)("p",null,'Appears under "Performance Improvements" header, and under "Breaking Changes" with the breaking change explanation:'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"perf(inbox): remove graphiteWidth option\nBREAKING CHANGE: The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reason.\n")),Object(i.b)("p",null,"The following commit ",Object(i.b)("inlineCode",{parentName:"p"},"667ecc1"),' do not appear in the changelog if they are under the same release. If not, the revert commit appears under the "Reverts" header.'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"revert: feat(inbox): add 'graphiteWidth' option\nThis reverts commit 667ecc1654a317a13331b17617d973392f415f02.\n")),Object(i.b)("h2",{id:"swag-for-contributions"},"Swag for Contributions"),Object(i.b)("p",null,"To show our appreciation, we are sending everyone who contributes to erxes a special package, which includes a t-shirt and stickers. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://erxes.io/hubspot-alternative-erxes-swag"}),"Click here")," to claim your swag. (Worldwide free shipping included!)"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://erxes.io/static/images/swag.gif",alt:"erxes Swag"}))))}c.isMDXComponent=!0}}]);