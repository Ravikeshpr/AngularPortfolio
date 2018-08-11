import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  technologies: any = [];

  constructor() {
    this.technologies = [
      {
        frontImgUrl: "../../../assets/angular.png",
        name: "Angular",
        relativeExperice: "12 months",
        numberOfProjects: "2",
        details: [
          { project: "Risk Management Application" },
          {
            project:
              "Risk Mangement application for the leading bank of Australia"
          }
        ],
        concepts: [
          {
            name: "Nested Components",
            details: " Wrote Reusable components  to be used at many positions "
          },
          {
            name: "Routing",
            details: " Nested Components and passing data in the hierarcy"
          },
          {
            name: "Lazy Loading",
            details: "Routing with Nav or Tabs and authentication srvice"
          },
          {
            name: "Pipes and Directives",
            details:
              "Wrote reusable directives and used it using shared modules"
          },
          {
            name: "Modules",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          },
          {
            name: "Services and Rxjs",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          },
          {
            name: "Angular-CLI",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          }
        ]
      },
      {
        frontImgUrl: "../../../assets/react.png",
        name: "React",
        relativeExperice: "18 months",
        numberOfProjects: "2",
        details: [
          { project: "Risk Management Application" },
          {
            project:
              "Risk Mangement application for the leading bank of Australia"
          }
        ],
        concepts: [
          {
            name: "One way data flow",
            details: " Wrote Reusable components  to be used at many positions "
          },
          {
            name: "Reusable components",
            details: " Nested Components and passing data in the hierarcy"
          },
          {
            name: "Routing and Lazy Loading",
            details: "Routing with Nav or Tabs and authentication srvice"
          },
          {
            name: "Redux (reducers,sagas)",
            details:
              "Wrote reusable directives and used it using shared modules"
          },
          {
            name: "Redux Middleware",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          },
          {
            name: "selectors, Recompose,children, HOC, context",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          }
        ]
      },
      {
        frontImgUrl: "../../../assets/bootstrap4.png",
        name: "Bootstrap 4",
        relativeExperice: "36 months",
        numberOfProjects: "3",
        details: [
          { project: "Risk Management Application" },
          {
            project:
              "Risk Mangement application for the leading bank of Australia"
          }
        ],
        concepts: [
          {
            name: "Grid Layout",
            details: " Wrote Reusable components  to be used at many positions "
          },
          {
            name: "New Flex styling",
            details: " Nested Components and passing data in the hierarcy"
          },
          {
            name: "Responsiveness",
            details: "Routing with Nav or Tabs and authentication srvice"
          },
          {
            name: "Pagination",
            details:
              "Wrote reusable directives and used it using shared modules"
          },
          {
            name: "NavBar",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          },
          {
            name: "Widgets",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          }
        ]
      },
      {
        frontImgUrl: "../../../assets/sass.png",
        name: "Sass",
        relativeExperice: "12 months",
        numberOfProjects: "2",
        details: [
          { project: "Risk Management Application" },
          {
            project:
              "Risk Mangement application for the leading bank of Australia"
          }
        ],
        concepts: [
          {
            name: "Variables",
            details: " Wrote Reusable components  to be used at many positions "
          },
          {
            name: "Partials",
            details: " Nested Components and passing data in the hierarcy"
          },
          {
            name: "Mixins",
            details: "Routing with Nav or Tabs and authentication srvice"
          },
          {
            name: "Normalization",
            details:
              "Wrote reusable directives and used it using shared modules"
          },
          {
            name: "Reusable Styling",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          },
          {
            name: "Pre Processing to CSS",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          }
        ]
      },
      {
        frontImgUrl: "../../../assets/jquery.png",
        name: "jquery",
        relativeExperice: "24 months",
        numberOfProjects: "4",
        details: [
          { project: "Risk Management Application" },
          {
            project:
              "Risk Mangement application for the leading bank of Australia"
          }
        ],
        concepts: [
          {
            name: "Selectors",
            details: " Wrote Reusable components  to be used at many positions "
          },
          {
            name: "Animation",
            details: " Nested Components and passing data in the hierarcy"
          },
          {
            name: "Chaining",
            details: "Routing with Nav or Tabs and authentication srvice"
          },
          {
            name: "Events",
            details:
              "Wrote reusable directives and used it using shared modules"
          },
          {
            name: "cashing",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          },
          {
            name: "Image manipulation",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          }
        ]
      },
      {
        frontImgUrl: "../../../assets/redux.png",
        name: "Bootstrap 4",
        relativeExperice: "15 months",
        numberOfProjects: "2",
        details: [
          { project: "Risk Management Application" },
          {
            project:
              "Risk Mangement application for the leading bank of Australia"
          }
        ],
        concepts: [
          {
            name: "Actions",
            details: " Wrote Reusable components  to be used at many positions "
          },
          {
            name: "Sagas",
            details: " Nested Components and passing data in the hierarcy"
          },
          {
            name: "Middleware",
            details: "Routing with Nav or Tabs and authentication srvice"
          },
          {
            name: "Imuatability",
            details:
              "Wrote reusable directives and used it using shared modules"
          },
          {
            name: "Store structuring",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          },
          {
            name: "Normalization",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          }
        ]
      },
      {
        frontImgUrl: "../../../assets/es6.png",
        name: "ES6",
        relativeExperice: "16 months",
        numberOfProjects: "2",
        details: [
          { project: "Risk Management Application" },
          {
            project:
              "Risk Mangement application for the leading bank of Australia"
          }
        ],
        concepts: [
          {
            name: "Arrow functions",
            details: " Wrote Reusable components  to be used at many positions "
          },
          {
            name: "Destructuring",
            details: " Nested Components and passing data in the hierarcy"
          },
          {
            name: "Modules",
            details: "Routing with Nav or Tabs and authentication srvice"
          },
          {
            name: "Enabling Polyfills",
            details:
              "Wrote reusable directives and used it using shared modules"
          },
          {
            name: "New Syntax",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          }
        ]
      },
      {
        frontImgUrl: "../../../assets/node.png",
        name: "Nodejs",
        relativeExperice: "6 months",
        numberOfProjects: "1",
        details: [
          { project: "Risk Management Application" },
          {
            project:
              "Risk Mangement application for the leading bank of Australia"
          }
        ],
        concepts: [
          {
            name: "Expressjs",
            details: " Wrote Reusable components  to be used at many positions "
          },
          {
            name: "Routing",
            details: " Nested Components and passing data in the hierarcy"
          },
          {
            name: "Middlewares",
            details: "Routing with Nav or Tabs and authentication srvice"
          },
          {
            name: "security of routes JWS tokens",
            details:
              "Wrote reusable directives and used it using shared modules"
          },
          {
            name: "Testing",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          }
        ]
      }
    ];
  }

  ngOnInit() {}
}
